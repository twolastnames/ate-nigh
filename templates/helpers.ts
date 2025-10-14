import { Aggregate } from "mongoose";
import { markCurrentScopeAsDynamic } from "next/dist/server/app-render/dynamic-rendering";

const typeMaps: { [arg: string]: string } = {
  'string': "string",
  String: "string",
  'number': "number",
  Number: "number",
  Boolean: "boolean",
};

export interface Parameters {
// eslint-disable-next-line  @typescript-eslint/no-explicit-any
  [arg: string]: any;
}

export type Aggregation<RESULT_TYPE> = {
  name: string;
  model: string;
  parameters: Parameters;
// eslint-disable-next-line  @typescript-eslint/no-explicit-any
  pipeline: Aggregate<RESULT_TYPE>;
}

// eslint-disable-next-line  @typescript-eslint/no-explicit-any
export function dumpTypescriptSchema(schema: any): any {
  if (Array.isArray(schema) || Array.isArray(schema.type)) {
    const added = dumpTypescriptSchema((schema.type || schema)[0]);
    return `Array<${added}${schema.type ? "Type" : ""}>`;
  } else if (typeof schema == "object" && !!schema.type) {
    const end = schema.required == false ? "| undefined" : "";
    return `${typeMaps[schema.type] || `${schema.type}Type`} ${end}`;
  } else if (typeof schema == "object") {
    return Object.entries(schema)
      .map(([name, schema]) => `${name}:${dumpTypescriptSchema(schema)};\n`)
      .join("");
  }
  return typeMaps[schema] || schema;
}

// eslint-disable-next-line  @typescript-eslint/no-explicit-any
function getArgumentsSchema(aggregation: any) : any {
  if (Array.isArray(aggregation) || Array.isArray(aggregation.type)) {
    return aggregation.reduce((current: any, next: any) => ({
      ...current,
      ...getArgumentsSchema(next),
    }), {})
  } else if (typeof aggregation == "object" && aggregation.anParameter) {
    const {name, schema} = aggregation.anParameter;
    return {[name]: schema}
  } else if (typeof aggregation == "object") {
    return Object.values(aggregation).reduce((current: any, next: any) => ({
      ...current,
      ...getArgumentsSchema(next),
    }), {})
  } else {
    return {}
  }
}

export function dumpParametersTypescript(aggregation: any) : string{
  return dumpTypescriptSchema(getArgumentsSchema(aggregation)).trim()
}

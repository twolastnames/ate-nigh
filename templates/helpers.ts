import { Aggregate } from "mongoose";

/* eslint-disable  @typescript-eslint/no-explicit-any */
const typeMaps: { [arg: string]: string } = {
  string: "string",
  String: "string",
  number: "number",
  Number: "number",
  Boolean: "boolean",
};

export interface Parameters {
  [arg: string]: any;
}

export type Aggregation<RESULT_TYPE> = {
  name: string;
  model: string;
  parameters: Parameters;
  pipeline: Aggregate<RESULT_TYPE>;
};

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

function getArgumentsSchema(aggregation: any): any {
  if (Array.isArray(aggregation) || Array.isArray(aggregation.type)) {
    return aggregation.reduce(
      (current: any, next: any) => ({
        ...current,
        ...getArgumentsSchema(next),
      }),
      {},
    );
  } else if (typeof aggregation == "object" && aggregation.anParameter) {
    const { name, schema } = aggregation.anParameter;
    return { [name]: schema };
  } else if (typeof aggregation == "object") {
    return Object.values(aggregation).reduce(
      (current: any, next: any) => ({
        ...current,
        ...getArgumentsSchema(next),
      }),
      {},
    );
  } else {
    return {};
  }
}

export function dumpParametersTypescript(aggregation: any): string {
  return dumpTypescriptSchema(getArgumentsSchema(aggregation)).trim();
}
/* eslint-enable  @typescript-eslint/no-explicit-any */

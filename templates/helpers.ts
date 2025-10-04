import { Aggregate } from "mongoose";

const typeMaps: { [arg: string]: string } = {
  String: "string",
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

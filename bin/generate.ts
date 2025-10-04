import ejs from "ejs";
import YAML from "yaml";
import "../util/extensions"
import { dumpTypescriptSchema } from "../templates/helpers";

import { readFileSync, writeFileSync, mkdirSync } from "fs";
import { queryObjects } from "v8";

const typesTemplate = readFileSync("./types/db.ts.ejs").toString();
const modelsTemplate = readFileSync("./util/db.ts.ejs").toString();
const schemas = YAML.parse(readFileSync("./schemas.yaml").toString());

const paths = Array.from(new Set([
    ...schemas.aggregations.map(({name}: {name: string})=> name),
    ...Object.keys(schemas.collections),
]))

const types = Object.keys(schemas.types).concat(Object.keys(schemas.collections))

writeFileSync(
  "./types/db.ts",
  ejs.render(typesTemplate, { ...schemas, dumpTypescriptSchema }),
);
writeFileSync("./util/db.ts", ejs.render(modelsTemplate, schemas));

for(const path of paths) {
    const name = path.uncapitalize()
    const collection = schemas.collections[path]
    const aggregation = schemas.aggregations.find(({name} : {name:string}) => name ===path)
    mkdirSync(`./app/api/${name}`, {recursive: true})
    writeFileSync(`./app/api/${name}/route.ts`, ejs.render(readFileSync(
        './templates/route.ts.ejs').toString(), {
            path,
            types,
            schemas,
            aggregation,
            collection,
        }));
}

/*
const typeMaps = {
    String: 'string',
    Number: 'number',
    Boolean: 'boolean',
}


const dumpTypescriptSchema = (schema) => {
    if(Array.isArray(schema) || Array.isArray(schema.type)) {
        const added = dumpTypescriptSchema((schema.type || schema)[0])
        return `Array<${added}${schema.type ? 'Type' : ''}>`
    } else if(typeof schema == "object" && !!schema.type) {
        const end = schema.required == false ? "| undefined" : "";
        return `${typeMaps[schema.type] || `${schema.type}Type`} ${end}`;
    } else if(typeof schema == "object") {
        return Object.entries(schema).map(
            ([name, schema]) => `${name}:${dumpTypescriptSchema(schema)};\n`
        ).join('')
    }
    return typeMaps[schema] || schema; 
}
*/

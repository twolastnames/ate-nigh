import ejs from "ejs";
import YAML from "yaml";
import "../util/extensions"
import { dumpTypescriptSchema, dumpParametersTypescript } from "../templates/helpers";

import { readFileSync, writeFileSync, mkdirSync } from "fs";

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
    const aggregation = schemas.aggregations.find(({name} : {name:string}) => name===path)
    const backPath = path.split('/').map(() => '../').join('')
    mkdirSync(`./app/api/${name}`, {recursive: true})
    writeFileSync(`./app/api/${name}/route.ts`, ejs.render(readFileSync(
        './templates/route.ts.ejs').toString(), {
            path,
            backPath,
            types,
            schemas,
            aggregation,
            name,
            collection,
        }));
}

writeFileSync(`./hooks/api.ts`, ejs.render(readFileSync(
    './templates/apiHooks.ts.ejs').toString(),
    {
        schemas,
        types,
        dumpParametersTypescript,
        dumpTypescriptSchema,
    }))

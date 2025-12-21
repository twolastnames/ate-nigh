import ejs, { Template } from "ejs";
import "../util/extensions"
import path from 'node:path'
import fs, { readFileSync, writeFileSync } from 'node:fs'
import { fileURLToPath } from 'url';

if(process.argv.length < 3) {
    console.error('Error: please include a non-existant file/directory name on the command line')
}

type ContextType = {
    input: string;
    directory: string;
    relative: string;
    downName: string;
    upName: string;
    lastName: string;
}

type OutputType = {
    template: string;
    filename: string;
}

const componentOutputs = [
    {
        template: './templates/component/component.tsx.ejs',
        filename: '{relative}/{upName}.tsx'
    },
    {
        template: './templates/component/test.tsx.ejs',
        filename: '{relative}/tests/snapshot.test.tsx'
    },
]

const fileHandlers = [
    {
        test: new RegExp("^app"),
        outputs: [
            {
                template: './templates/page/page.tsx.ejs',
                filename: '{relative}/page.tsx'
            },
            {
                template: './templates/page/cypress.tsx.ejs',
                filename: '{relative}/{downName}.cy.tsx'
            },
        ],
    },
    {
        test: new RegExp("^components\/ui"),
        outputs: componentOutputs,
    },
    {
        test: new RegExp("^components\/features"),
        outputs: componentOutputs,
    },
]

const outputFile = (output: OutputType, context: ContextType) => {
    const name = Object.entries(context).reduce((current, [key, value]
    ) => current.replaceAll(`{${key}}`, value),output.filename).replaceAll('/', path.sep)
    const directory = path.dirname(name)
    if(!fs.existsSync(directory)) {
        console.log(`generating directory "${directory}"`)
        fs.mkdirSync(directory, {recursive: true})
    }
    if(fs.existsSync(name)) {
        console.log(`not generating "${name}" because that file exists`)
        return
    }
    console.log(`generating file "${name}"`)
    const template = readFileSync(output.template.replaceAll('/', path.sep)).toString()
    writeFileSync(name, ejs.render(template, context));

}

function getContext(input: string) : ContextType {
    const __filename = fileURLToPath(import.meta.url);
    const dirname = path.normalize(path.dirname(__filename) + '/..')
    const lastName = path.basename(input)
    return {
    directory: dirname ,
    relative : path.relative(dirname, input),
    lastName,
    downName : lastName.charAt(0).toLowerCase() + lastName.slice(1),
    upName : lastName.charAt(0).toUpperCase() + lastName.slice(1),
    input,
    }
}

const dumpContext = (context: ContextType) => Object.entries(context).map(
    ([key, value]) => `${key}: ${value}`).join("\n")


process.argv.forEach(function (input, index, array) {
    if(index < 2) {
        return
    }

    const context = getContext(input)
    console.log("context:\n", dumpContext(context))
    for(const {test, outputs} of fileHandlers) {
        if(test.test(context.relative)) {
            for(const output of outputs) {
                outputFile(output, context)
            }
            return;
        }
    }
    console.error("given filename doesn't match a file template")
});




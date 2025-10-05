import { NextRequest } from "next/server";

export type ParameterError = {
    name: string;
    description: string;
}

export type SubstituteResponse = {
    error?: ParameterError;
    pipeline?: any[];
}


interface Operation {
[key: string]: any;
}

const validators = {
    'number': {
        validate: (value: any) => !isNaN(Number(value)),
        unmarshal: (value: any) => Number(value),
    }
}

function substituteOperation(request: NextRequest, operation: Operation) : any {
    if(Array.isArray(operation)) {
        return operation.map((on) => substituteOperation(request, on))
    } else if(operation.anParameter) {
        const parameter = operation.anParameter;
        const value= request.nextUrl.searchParams.get(parameter.name)
        if(value == null && parameter.schema.required) {
            throw new Error(`required parameter ${parameter.name} not present`)
        }
        const validator = validators[parameter.schema.format]
        if(!validator.validate(value)) {
            throw new Error(`Parameter "${parameter}" not in format of ${parameter.schema.format}`)
        }
        return validator.unmarshal(value)
    } else if(operation == null) {
        return operation
    } else if(typeof operation === 'object') {
        return Object.entries(operation).reduce((current: any, [key, value]: [string, any]) => ({
            ...current,
            [key]: substituteOperation(request, value)
        }), {})
    } else {
        return operation;
    }
}

export function substitutePipelineParameters(request: NextRequest, pipeline: Array<any>) : any {
    return pipeline.map((operation: any) => substituteOperation(request, operation))
}

/*
export async function doRouteGet<BASE, RESPONSE>(
    base: BASE , pipeline: any,
    request: Request, result: NextResponse
) : RESPONSE {
  return NextResponse.json(await base.aggregate(pipeline))
    
}
*/

export function doRoutePost<BASE>(
    base: BASE, definition: any,
    request: Request, result: NextResponse
) : Response {
    
}


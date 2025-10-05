/*****************************************************
* DO NOT MODIFY THIS!!!
* Edit the schemas.json file at the base of the project
* then run "npm run dbschema" to regenerate this
*****************************************************/

//import type { NextApiRequest, NextApiResponse } from "next";
import { NextRequest, NextResponse } from "next/server";
import { substitutePipelineParameters } from "../helpers"

/* eslint-disable @typescript-eslint/no-unused-vars */
import {
NutrientType,FoodType,
} from "../../../types/db"

import {
Food,
} from "../../../util/db"
/* eslint-enable @typescript-eslint/no-unused-vars */


// eslint-disable-next-line @typescript-eslint/no-unused-vars
export async function GET(request: NextRequest) {
  try {
    return NextResponse.json(await Food.aggregate(substitutePipelineParameters(
      request,
      [{"$match":{"persistantId":{"anParameter":{"name":"id","schema":{"type":"string","format":"number","required":true}}}}}]
    )))
  } catch(e : any) {
    return NextResponse.json({error: e.message}, {status: 400})
  }
}



// eslint-disable-next-line @typescript-eslint/no-unused-vars
export async function POST(request: NextRequest) {
  const model = new Food(await request.json())
  model.save()
}


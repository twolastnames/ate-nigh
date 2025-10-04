/*****************************************************
* DO NOT MODIFY THIS!!!
* Edit the schemas.json file at the base of the project
* then run "npm run dbschema" to regenerate this
*****************************************************/

//import type { NextApiRequest, NextApiResponse } from "next";
import { NextResponse } from "next/server";

/* eslint-disable @typescript-eslint/no-unused-vars */
import {
NutrientType,FoodType,
} from "../../../types/db"

import {
Food,
} from "../../../util/db"
/* eslint-enable @typescript-eslint/no-unused-vars */


// eslint-disable-next-line @typescript-eslint/no-unused-vars
export async function GET(request: Request) {
  return NextResponse.json(await Food.aggregate([{"$match":{"persistantId":2705383}}]))
}



// eslint-disable-next-line @typescript-eslint/no-unused-vars
export async function POST(request: Request) {
  const model = new Food(await request.json())
  model.save()
}


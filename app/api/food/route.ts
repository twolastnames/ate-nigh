/*****************************************************
* DO NOT MODIFY THIS!!!
* Edit the schemas.json file at the base of the project
* then run "npm run dbschema" to regenerate this
*****************************************************/

import { NextRequest, NextResponse } from "next/server";
import { doRouteGet, useBaseGet } from "../helpers"
import * as finalizers from "../finalizers"

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
  return doRouteGet(
    Food,
    [{"$match":{"persistantId":{"anParameter":{"name":"id","schema":{"type":"number","format":"number","required":true}}}}},{"$limit":1}],
    request,
    finalizers.haveOne
  )
}



// eslint-disable-next-line @typescript-eslint/no-unused-vars
export async function POST(request: NextRequest) {
  const model = new Food(await request.json())
  model.save()
}


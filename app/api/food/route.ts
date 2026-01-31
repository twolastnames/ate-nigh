/*****************************************************
 * DO NOT MODIFY THIS!!!
 * Edit the schemas.json file at the base of the project
 * then run "npm run dbschema" to regenerate this
 *****************************************************/

import { NextRequest, NextResponse } from "next/server";
import { doRouteGet } from "../helpers";
import * as finalizers from "../finalizers";

/* eslint-disable @typescript-eslint/no-unused-vars */
import { NutrientType, AteType, FoodType } from "../../../types/db";

import { Ate, Food } from "../../../util/db";
/* eslint-enable @typescript-eslint/no-unused-vars */

export async function GET(request: NextRequest) {
  return doRouteGet(
    Food,
    [
      {
        $match: {
          persistantId: {
            anParameter: {
              name: "id",
              schema: { type: "number", format: "number", required: true },
            },
          },
        },
      },
      { $limit: 1 },
    ],
    request,
    finalizers.haveOne,
  );
}

export async function POST(request: NextRequest) {
  try {
    const model = new Food(await request.json());
    const result = await model.save();
    return new NextResponse(JSON.stringify({ id: result?._id?.toString() }));
  } catch (e) {
    return new NextResponse(JSON.stringify(e), { status: 400 });
  }
}

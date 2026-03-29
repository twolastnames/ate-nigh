/*****************************************************
 * DO NOT MODIFY THIS!!!
 * Edit the schemas.json file at the base of the project
 * then run "npm run dbschema" to regenerate this
 *****************************************************/

import nextServer from "next/server";
import { doRouteGet } from "../helpers";
import * as finalizers from "../finalizers";

/* eslint-disable @typescript-eslint/no-unused-vars */
import { NutrientType, AteType, FoodType } from "../../../types/db";

import { Ate, Food } from "../../../util/db";
/* eslint-enable @typescript-eslint/no-unused-vars */

export async function GET(request: nextServer.NextRequest) {
  return doRouteGet(
    Ate,
    [
      {
        $match: {
          time: {
            $gte: {
              anParameter: {
                name: "from",
                schema: { type: "Date", format: "Date", required: true },
              },
            },
            $lt: {
              anParameter: {
                name: "to",
                schema: { type: "Date", format: "Date", required: true },
              },
            },
          },
        },
      },
      {
        $lookup: {
          from: "foods",
          localField: "foodId",
          foreignField: "persistantId",
          as: "food",
        },
      },
      { $unwind: "$food" },
      { $unwind: "$food.nutrients" },
      {
        $project: {
          persistantId: "$food.nutrients.persistantId",
          name: "$food.nutrients.name",
          units: "$food.nutrients.units",
          amount: { $multiply: ["$food.nutrients.amount", "$amount", 0.01] },
        },
      },
      {
        $group: {
          _id: "$name",
          name: { $first: "$name" },
          units: { $first: "$units" },
          amount: { $sum: "$amount" },
        },
      },
    ],
    request,
    finalizers.raw,
  );
}

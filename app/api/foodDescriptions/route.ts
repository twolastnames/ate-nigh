/*****************************************************
 * DO NOT MODIFY THIS!!!
 * Edit the schemas.json file at the base of the project
 * then run "npm run dbschema" to regenerate this
 *****************************************************/

import { NextRequest } from "next/server";
import { doRouteGet } from "../helpers";
import * as finalizers from "../finalizers";

/* eslint-disable @typescript-eslint/no-unused-vars */
import {
  FoodDescriptionsType,
  NutrientType,
  FoodType,
} from "../../../types/db";

import { Food } from "../../../util/db";
/* eslint-enable @typescript-eslint/no-unused-vars */

export async function GET(request: NextRequest) {
  return doRouteGet(
    Food,
    [
      {
        $search: {
          autocomplete: {
            query: {
              anParameter: {
                name: "query",
                schema: { type: "String", required: true },
              },
            },
            path: "description",
            tokenOrder: "any",
          },
        },
      },
    ],
    request,
    finalizers.raw,
  );
}

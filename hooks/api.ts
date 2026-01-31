/*****************************************************
 * DO NOT MODIFY THIS!!!
 * Edit the schemas.json file at the base of the project
 * then run "npm run dbschema" to regenerate this
 *****************************************************/

import { useBaseGet, useBasePost } from "./helpers";
import { GetResponse, PostResponse } from "./helpersTypes";

/* eslint-disable @typescript-eslint/no-unused-vars */
import { NutrientType, AteType, FoodType } from "../types/db";

import { Ate, Food } from "../util/db";
/* eslint-enable @typescript-eslint/no-unused-vars */

export type FoodResponseType = FoodType;
export function useFoodGet(parameters: {
  id: number;
}): GetResponse<FoodResponseType> {
  return useBaseGet("/api/food", parameters);
}

export function useFoodPost(): PostResponse<FoodResponseType> {
  return useBasePost("/api/food");
}

export type AteResponseType = AteType;
export function useAteGet(parameters: {
  id: number;
}): GetResponse<AteResponseType> {
  return useBaseGet("/api/ate", parameters);
}

export function useAtePost(): PostResponse<AteResponseType> {
  return useBasePost("/api/ate");
}

/*****************************************************
 * DO NOT MODIFY THIS!!!
 * Edit the schemas.json file at the base of the project
 * then run "npm run dbschema" to regenerate this
 *****************************************************/

import { useBaseGet, useBasePost } from "./helpers";
import { GetResponse, PostResponse, GetOptions } from "./helpersTypes";

/* eslint-disable @typescript-eslint/no-unused-vars */
import { NutrientType, AteType, FoodType } from "../types/db";

import { Ate, Food } from "../util/db";
/* eslint-enable @typescript-eslint/no-unused-vars */

export type FoodResponseType = FoodType;
export function useFoodGet(
  parameters: {
    id: number;
  },
  options?: GetOptions,
): GetResponse<FoodResponseType> {
  return useBaseGet("/api/food", parameters, options);
}

export type AteResponseType = AteType;
export function useAteGet(
  parameters: {
    id: number;
  },
  options?: GetOptions,
): GetResponse<AteResponseType> {
  return useBaseGet("/api/ate", parameters, options);
}

export type AtesResponseType = Array<AteType>;
export function useAtesGet(
  parameters: {
    from: Date;
    to: Date;
  },
  options?: GetOptions,
): GetResponse<AtesResponseType> {
  return useBaseGet("/api/ates", parameters, options);
}

export type NutrientsResponseType = Array<NutrientType>;
export function useNutrientsGet(
  parameters: {
    from: Date;
    to: Date;
  },
  options?: GetOptions,
): GetResponse<NutrientsResponseType> {
  return useBaseGet("/api/nutrients", parameters, options);
}

export function useAtePost(): PostResponse<AteResponseType> {
  return useBasePost("/api/ate");
}

export function useFoodPost(): PostResponse<FoodResponseType> {
  return useBasePost("/api/food");
}

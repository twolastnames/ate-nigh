/*****************************************************
* DO NOT MODIFY THIS!!!
* Edit the schemas.json file at the base of the project
* then run "npm run dbschema" to regenerate this
*****************************************************/

import { useBaseGet } from "./helpers"
import { GetResponse } from "./helpersTypes"

/* eslint-disable @typescript-eslint/no-unused-vars */
import {
NutrientType,FoodType,
} from "../types/db"

import {
Food,
} from "../util/db"
/* eslint-enable @typescript-eslint/no-unused-vars */


export type FoodResponseType = FoodType 
export function useFoodGet(parameters: {
        id:number ;
    }) : GetResponse< FoodResponseType > {
  return useBaseGet('/api/food', parameters)
}


/*****************************************************
* DO NOT MODIFY THIS!!!
* Edit the schemas.json file at the base of the project
* then run "npm run dbschema" to regenerate this
*****************************************************/

import  mongoose, { Schema } from "mongoose";
import { FoodType } from "../types/db"

const uri = process.env.AN_DBURL || "mongodb://127.0.0.1:27017/an_test";
if(!uri) {
    console.error("need to set environment variable AN_DBURL with mongodb uri")
    process.exit(1)
}

mongoose.connect(uri);


    const Nutrient = {"persistantId":{type:Number,"required":true},"name":{type:String,"required":true},"units":{type:String,"required":true},"amount":{type:Number,"required":true}}



export const FoodSchema = {"persistantId":{type:Number,"index":true,"unique":true,"required":true},"description":{type:String,"required":true},"nutrients":{type:[Nutrient]}};

export const Food = mongoose.models.Food || mongoose.model< FoodType >(
    "Food",new Schema< FoodType >(
    FoodSchema
))





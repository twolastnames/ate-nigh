/*****************************************************
 * DO NOT MODIFY THIS!!!
 * Edit the schemas.json file at the base of the project
 * then run "npm run dbschema" to regenerate this
 *****************************************************/

import mongoose, { Schema } from "mongoose";
import { AteType, FoodType } from "../types/db";
import { dbUri } from "./helpers";

mongoose.connect(dbUri);

const Nutrient = {
  persistantId: { type: Number, required: true },
  name: { type: String, required: true },
  units: { type: String, required: true },
  amount: { type: Number, required: true },
};

export const AteSchema = {
  persistantId: { type: Number, index: true, unique: true },
  amount: { type: Number, required: true },
  foodId: { type: Number, required: true },
  time: { type: Date, required: true },
};

export const Ate =
  mongoose.models.Ate ||
  mongoose.model<AteType>("Ate", new Schema<AteType>(AteSchema));

export const FoodSchema = {
  persistantId: { type: Number, index: true, unique: true, required: true },
  description: { type: String, required: true },
  nutrients: { type: [Nutrient] },
};

export const Food =
  mongoose.models.Food ||
  mongoose.model<FoodType>("Food", new Schema<FoodType>(FoodSchema));

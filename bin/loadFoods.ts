import { Food } from "../util/db";
import { readFileSync } from "fs";

// nutrients based on 100g

(async () => {
  const foodsString = readFileSync("./data/surveyDownload.json").toString();
  const foods = JSON.parse(foodsString);

  for (const surveyed of foods.SurveyFoods) {
    const food = new Food();
    food.persistantId = surveyed.fdcId;
    food.description = surveyed.description;
    food.nutrients = surveyed.foodNutrients
      .filter(({ amount }: { amount: number }) => amount > 0)
      .map(
        ({
          id,
          nutrient: { name, unitName },
          amount,
        }: {
          id: number;
          nutrient: {
            name: string;
            unitName: string;
          };
          amount: number;
        }) => ({
          persistantId: id,
          amount,
          name,
          units: unitName,
        }),
      );
    try {
      await food.save();
      console.log(`saved: ${surveyed.description}`);
    } catch (e) {
      console.error(e);
    }
  }
  process.exit(0);
})();

/*****************************************************
* DO NOT MODIFY THIS!!!
* Edit the schemas.json file at the base of the project
* then run "npm run dbschema" to regenerate this
*****************************************************/



export type NutrientType = {
persistantId:number ;
name:string ;
units:string ;
amount:number ;

}



export type FoodType = {
persistantId:number ;
description:string ;
nutrients:Array<NutrientType>;

}


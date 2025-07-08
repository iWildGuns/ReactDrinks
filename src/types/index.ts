//

import z from "zod";
import {
  CategoriesAPIResponseSchema,
  DrinkAPIResponse,
  DrinksAPIResponse,
  RecipeAPIResponseSchema,
  SearchFilterSchema,
} from "../schemas/recipesSchemas";

export type Categories = z.infer<typeof CategoriesAPIResponseSchema>;
export type SearchFilter = z.infer<typeof SearchFilterSchema>;
export type Drinks = z.infer<typeof DrinksAPIResponse>;
export type Drink = z.infer<typeof DrinkAPIResponse>;
export type GetRecipe = z.infer<typeof RecipeAPIResponseSchema>;

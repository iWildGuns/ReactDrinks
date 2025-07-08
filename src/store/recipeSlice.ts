//
import type { StateCreator } from "zustand";
import {
  getCategories,
  getRecipeById,
  getRecipes,
} from "../services/RecipeService";
import type {
  Categories,
  Drink,
  Drinks,
  GetRecipe,
  SearchFilter,
} from "../types";
import type { FavoritesSliceType } from "./favoritesSlice";

export type RecipesSliceType = {
  categories: Categories;
  drinks: Drinks;
  recipeById: GetRecipe;
  modal: boolean;
  fetchCategories: () => Promise<void>;
  searchRecipes: (searchFilters: SearchFilter) => Promise<void>;
  selectRecipe: (id: Drink["idDrink"]) => Promise<void>;
  closeModal: () => void;
};

export const createRecipesSlice: StateCreator<
  RecipesSliceType & FavoritesSliceType,
  [],
  [],
  RecipesSliceType
> = (set) => ({
  categories: {
    drinks: [],
  },
  drinks: {
    drinks: [],
  },
  recipeById: {} as GetRecipe,
  modal: false,
  fetchCategories: async () => {
    const categories = await getCategories();
    set({
      categories,
    });
  },
  searchRecipes: async (filters) => {
    const drinks = await getRecipes(filters);
    set({
      drinks,
    });
  },
  selectRecipe: async (id) => {
    const recipeById = await getRecipeById(id);
    set({
      recipeById,
      modal: true,
    });
  },
  closeModal: () => {
    set({
      modal: false,
      recipeById: {} as GetRecipe,
    });
  },
});

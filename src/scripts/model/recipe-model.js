import { API_URL, TIMEOUT_SEC } from "./config";
import { timeout } from "../helper";

class Recipe {
  constructor(recipe) {
    this.title = recipe.title;
    this.publisher = recipe.publisher;
    this.id = recipe.id;
    this.sourceURL = recipe.source_url;
    this.imageURL = recipe.image_url;
    this.ingredients = recipe.ingredients;
    this.servings = recipe.servings;
    this.cookingTime = recipe.cooking_time;
  }
}

class RecipeModel {
  _recipe;
  _bookmarked;
  _servings;

  get recipe() {
    return this._recipe;
  }

  get bookmarked() {
    return this._bookmarked;
  }

  set bookmarked(value) {
    this._bookmarked = value;
  }

  get servings() {
    return this._servings;
  }

  set servings(value) {
    this._servings = value;
  }

  async getRecipeById(id) {
    try {
      const res = await Promise.race([
        fetch(`${API_URL}${id}`),
        timeout(TIMEOUT_SEC),
      ]);
      const data = await res.json();

      if (!res.ok) throw new Error(data.message);

      this._recipe = new Recipe(data.data.recipe);
      this._servings = this._recipe.servings;

      return this._recipe;
    } catch (error) {
      console.error(error);
      throw error;
    }
  }
}

export default new RecipeModel();

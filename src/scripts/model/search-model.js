import { API_URL, TIMEOUT_SEC } from "./config";
import { timeout } from "../helper";
const ITEMS_PER_PAGE = 10;

class SearchModel {
  _list;
  _currentPage;
  _perPage = ITEMS_PER_PAGE;

  get list() {
    return this._list;
  }

  get currentPage() {
    return this._currentPage;
  }

  set currentPage(value) {
    this._currentPage = value;
  }

  get perPage() {
    return this._perPage;
  }

  async searchRecipes(query) {
    try {
      const res = await Promise.race([
        fetch(`${API_URL}?search=${query}`),
        timeout(TIMEOUT_SEC),
      ]);
      const data = await res.json();

      if (!res.ok) throw new Error(data.error);
      const responseList = data.data.recipes;
      this._list = responseList.map((r) => new RecipePreview(r));
      this._currentPage = 1;
      return this._list;
    } catch (error) {
      console.error(error);
      throw error;
    }
  }
}

export class RecipePreview {
  constructor(recipePreview) {
    this.title = recipePreview.title;
    this.publisher = recipePreview.publisher;
    this.id = recipePreview.id;
    this.imageURL = recipePreview.image_url;
  }
}

export default new SearchModel();

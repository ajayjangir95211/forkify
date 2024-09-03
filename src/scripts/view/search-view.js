import { View } from "./view";
import PaginationView from "./pagination-view";
import PreviewListView from "./preview-list-view";

class SearchView extends View {
  _parentElement = document.querySelector(".search-results");

  render(recipePreviewsList, perPage) {
    PreviewListView.render(recipePreviewsList, perPage);
    PaginationView.render(Math.ceil(recipePreviewsList.length / perPage));
  }

  updatePage(currentPage) {
    PreviewListView.updatePage(currentPage);
    PaginationView.updatePage(currentPage);
  }

  addHandler(loadRecipe, prev, next) {
    PreviewListView.addHandler(loadRecipe);
    PaginationView.addHandler(prev, next);
  }

  spinner() {
    this._clear();
    PreviewListView.spinner();
  }

  _clear() {
    PreviewListView._clear();
    PaginationView._clear();
  }

  error(error) {
    PreviewListView.error(error);
  }
}

export default new SearchView();

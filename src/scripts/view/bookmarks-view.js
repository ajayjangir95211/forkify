import { View } from "./view";
import { markupToElement } from "../helper";

class BookmarksView extends View {
  _parentElement = document.querySelector(".bookmarks");

  render(bookmarks) {
    this._clear();
    if (bookmarks.length)
      bookmarks.forEach((r) =>
        this._parentElement.append(this._recipePreviewElement(r))
      );
    else this.error(new Error("No bookmarks yet."));
  }

  _recipePreviewElement(recipe) {
    const recipePreviewMarkup = `<div class="recipe-preview" data-id=${recipe.id} >
      <img src="${recipe.imageURL}" alt="${recipe.title}" />
      <div>
        <h4>${recipe.title}</h4>
        <p>${recipe.publisher}</p>
      </div>
    </div>`;
    const e = markupToElement(recipePreviewMarkup);
    e.addEventListener("click", this._handler);
    return e;
  }
}

export default new BookmarksView();

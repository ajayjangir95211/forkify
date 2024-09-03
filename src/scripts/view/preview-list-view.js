import { View } from "./view";
import { markupToElement } from "../helper";

class PreviewListView extends View {
  _parentElement = document.querySelector(".preview-list");

  render(recipePreviewsList, perPage) {
    this._clear();
    for (let i = 0; i < Math.ceil(recipePreviewsList.length / perPage); i++) {
      const page = markupToElement(`<div class="page"></div>`);
      recipePreviewsList
        .slice(i * perPage, (i + 1) * perPage)
        .forEach((r) => page.append(this._recipePreviewElement(r)));
      this._parentElement.append(page);
    }
  }

  updatePage(currentPage) {
    this._parentElement.querySelectorAll(".page").forEach((p, i) => {
      if (i + 1 === currentPage) {
        this._parentElement
          .querySelector(".current-page")
          ?.classList.remove("current-page");
        p.classList.add("current-page");
      }
      p.style.transform = `translate(${(i + 1 - currentPage) * 100}%)`;
    });
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

export default new PreviewListView();

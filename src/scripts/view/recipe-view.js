import icons from "../../img/icons.svg";
import { View } from "./view";
import { markupToElement } from "../helper";
import Fraction from "fraction.js";

class RecipeView extends View {
  _parentElement = document.querySelector(".recipe-container");
  _bookmarkHandler;
  _decServings;
  _incServings;

  render(recipe, bookmarked) {
    this._clear();
    const recipeMarkup = `
    <article class="recipe">
  <div class="recipe__figure">
    <img src="${recipe.imageURL}" alt="${recipe.title}" />
    <h1 class="recipe__title"><span>${recipe.title}</span></h1>
  </div>
  <div class="recipe__details">
    <div class="recipe__detail">
      <svg>
        <use href="${icons}#icon-clock"></use>
      </svg>
      <span class="recipe__time">${recipe.cookingTime} Minutes</span>
    </div>
    <div class="recipe__detail">
      <svg>
        <use href="${icons}#icon-users"></use>
      </svg>
      <span class="recipe__servings">${recipe.servings} Servings</span>
      <button class="decServings">
        <svg>
          <use href="${icons}#icon-minus-circle"></use>
        </svg>
      </button>
      <button class="incServings">
        <svg>
          <use href="${icons}#icon-plus-circle"></use>
        </svg>
      </button>
    </div>
    <div class="bookmark__btn">
      <button class="btn">
        <svg>
          <use href="${icons}#icon-bookmark${bookmarked ? "-fill" : ""}"></use>
        </svg>
      </button>
    </div>
  </div>
  <div class="recipe__ingredients__container">
    <h2>Recipe ingredients</h2>
    <ul class="recipe__ingredients">
    </ul>
  </div>
  <div class="recipe__how">
    <h2>How to cook it</h2>
    <p>
      This recipe was carefully designed and tested by
      <span class="recipe__publisher">${recipe.publisher}</span>. Please
      check out directions at their website.
    </p>
    <a href="${recipe.sourceURL}" class="btn"
      >Directions
      <svg>
        <use href="${icons}#icon-arrow-right"></use>
      </svg>
    </a>
  </div>
</article>
`;
    const el = markupToElement(recipeMarkup);
    el.querySelector(".bookmark__btn").addEventListener("click", () =>
      this._bookmarkHandler(recipe)
    );
    el.querySelector(".decServings").addEventListener(
      "click",
      this._decServings
    );
    el.querySelector(".incServings").addEventListener(
      "click",
      this._incServings
    );

    this._parentElement.append(el);
    this.updateServings(recipe, recipe.servings);
  }

  updateBookmark(bookmarked) {
    this._parentElement.querySelector(
      ".bookmark__btn"
    ).innerHTML = `<button class="btn">
        <svg>
          <use href="${icons}#icon-bookmark${bookmarked ? "-fill" : ""}"></use>
        </svg>
      </button>`;
  }

  updateServings(recipe, newServings) {
    this._parentElement.querySelector(".decServings").disabled =
      newServings === 1 ? true : false;
    this._parentElement.querySelector(
      ".recipe__servings"
    ).innerHTML = `${newServings} Servings`;
    this._parentElement.querySelector(
      ".recipe__ingredients"
    ).innerHTML = `${recipe.ingredients
      .map((i) => {
        return `
      <li class="recipe__ingredient">
        <svg>
          <use href="${icons}#icon-check"></use>
        </svg>
        <span
          >${
            i.quantity
              ? `${Fraction(i.quantity)
                  .mul(newServings)
                  .div(recipe.servings)
                  .toFraction()} ${i.unit}`
              : ""
          } ${i.description}</span
        >
      </li>
      `;
      })
      .join("")}`;
  }

  addHandler(bookmarkHandler, decServings, incServings) {
    this._bookmarkHandler = bookmarkHandler;
    this._decServings = decServings;
    this._incServings = incServings;
  }
}

export default new RecipeView();

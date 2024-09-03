import "../styles/main.scss";
import RecipeModel from "./model/recipe-model";
import SearchModel from "./model/search-model";
import RecipeView from "./view/recipe-view";
import SearchView from "./view/search-view";
import BookmarksView from "./view/bookmarks-view";
import BookmarksModel from "./model/bookmarks-model";
import { fraction } from "mathjs";

console.log(fraction);

document.querySelector(".search-form").addEventListener("submit", (e) => {
  e.preventDefault();

  const query = e.target
    .querySelector("input[name='search-query']")
    .value.trim();
  if (!query) return;
  SearchView.spinner();
  renderSearch(query);
});

async function renderSearch(query) {
  try {
    const recipePreviewsList = await SearchModel.searchRecipes(query);
    if (!Array.isArray(recipePreviewsList) || recipePreviewsList.length === 0)
      throw new Error("No Recipe Found!");

    SearchView.render(SearchModel.list, SearchModel.perPage);
    SearchView.updatePage(SearchModel.currentPage);
  } catch (error) {
    console.error(error);
    SearchView.error(error);
  }
}

document.querySelector(".bookmarks-btn").addEventListener("click", (e) => {
  e.preventDefault();
  BookmarksModel.visible = !BookmarksModel.visible;
  const bookmarks = document.querySelector(".bookmarks");

  if (BookmarksModel.visible) {
    bookmarks.style.display = "flex";
    BookmarksView.render(BookmarksModel.bookmarks);
  } else bookmarks.style.display = "none";
});

function init() {
  JSON.parse(localStorage.getItem("forkify"))?.forEach((i) =>
    BookmarksModel.addBookmark(i)
  );
  SearchView.addHandler(loadRecipe, prev, next);
  RecipeView.addHandler(bookmarkHandler, decServings, incServings);
  BookmarksView.addHandler(loadRecipe);
}

function loadRecipe() {
  document
    .querySelectorAll(".active-recipe")
    ?.forEach((e) => e.classList.remove("active-recipe"));
  document
    .querySelectorAll(`div[data-id="${this.dataset.id}"]`)
    ?.forEach((e) => e.classList.add("active-recipe"));
  RecipeView.spinner();
  renderRecipe(this.dataset.id);
}

async function renderRecipe(id) {
  try {
    const recipe = await RecipeModel.getRecipeById(id);
    RecipeModel.bookmarked = false;
    BookmarksModel.bookmarks.forEach((r) => {
      if (r.id === recipe.id) RecipeModel.bookmarked = true;
    });
    RecipeView.render(RecipeModel.recipe, RecipeModel.bookmarked);
  } catch (error) {
    console.error(error);
    RecipeView.error(error);
  }
}

function prev() {
  SearchModel.currentPage--;
  SearchView.updatePage(SearchModel.currentPage);
}

function next() {
  SearchModel.currentPage++;
  SearchView.updatePage(SearchModel.currentPage);
}

function bookmarkHandler(recipe) {
  if (RecipeModel.bookmarked) BookmarksModel.removeBookmark(recipe.id);
  else BookmarksModel.addBookmark(recipe);
  BookmarksView.render(BookmarksModel.bookmarks);
  RecipeModel.bookmarked = !RecipeModel.bookmarked;
  RecipeView.updateBookmark(RecipeModel.bookmarked);
}

function decServings() {
  RecipeModel.servings--;
  RecipeView.updateServings(RecipeModel.recipe, RecipeModel.servings);
}

function incServings() {
  RecipeModel.servings++;
  RecipeView.updateServings(RecipeModel.recipe, RecipeModel.servings);
}

init();

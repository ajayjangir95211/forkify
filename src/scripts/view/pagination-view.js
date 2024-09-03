import { View } from "./view";
import { markupToElement } from "../helper";
import icons from "../../img/icons.svg";

class PaginationView extends View {
  _parentElement = document.querySelector(".pagination");
  _prevBtn = markupToElement(`<button class="prev-page">
    <svg><use href="${icons}#icon-arrow-left"></use></svg>
    </button>`);
  _nextBtn = markupToElement(`<button class="next-page">
    <svg><use href="${icons}#icon-arrow-right"></use></svg>
    </button>`);

  addHandler(prev, next) {
    this._prevBtn.addEventListener("click", prev);
    this._nextBtn.addEventListener("click", next);
  }

  render(totalPages) {
    this._clear();

    const pageNumbers = markupToElement(`<div class="page-numbers"></div>`);
    for (let i = 0; i < totalPages; i++) {
      pageNumbers.append(markupToElement(`<p>${i + 1}</p>`));
    }

    this._parentElement.append(this._prevBtn, pageNumbers, this._nextBtn);
  }

  updatePage(currentPage) {
    const pageNumbers = this._parentElement.querySelectorAll(".page-numbers p");
    pageNumbers.forEach((pn, i) => {
      if (i + 1 === currentPage) {
        this._parentElement
          .querySelector(".current-page-number")
          ?.classList.remove("current-page-number");
        pn.classList.add("current-page-number");
      }
      pn.style.transform = `translate(${(i + 1 - currentPage) * 100}%)`;
    });

    this._prevBtn.disabled = currentPage === 1 ? true : false;
    this._nextBtn.disabled = currentPage === pageNumbers.length ? true : false;
  }
}

export default new PaginationView();

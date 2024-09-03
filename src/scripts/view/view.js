import { markupToElement } from "../helper";
import icons from "../../img/icons.svg";

export class View {
  _parentElement;
  _handler;

  render() {}

  addHandler(handler) {
    this._handler = handler;
  }

  _clear() {
    this._parentElement.innerHTML = "";
  }

  spinner() {
    this._clear();
    const spinnerMarkup = `<div class="spinner message">
    <svg>
    <use href="${icons}#icon-loader"></use>
    </svg>
    </div>`;
    this._parentElement.append(markupToElement(spinnerMarkup));
  }

  error(error) {
    this._clear();
    const errorMarkup = `<div class="error message">
    <svg>
    <use href="${icons}#icon-alert-circle"></use>
    </svg>
    <span class="error-text">${error.message}</span>
    </div>`;
    this._parentElement.append(markupToElement(errorMarkup));
  }
}

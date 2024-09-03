class BookmarksModel {
  _bookmarks = [];
  _visible = false;

  addBookmark(item) {
    this._bookmarks.push(item);
    localStorage.setItem("forkify", JSON.stringify(this._bookmarks));
  }

  removeBookmark(id) {
    this._bookmarks.splice(
      this._bookmarks.findIndex((e) => e.id === id),
      1
    );
    localStorage.setItem("forkify", JSON.stringify(this._bookmarks));
  }
  get visible() {
    return this._visible;
  }

  set visible(value) {
    this._visible = value;
  }

  get bookmarks() {
    return this._bookmarks;
  }
}

export default new BookmarksModel();

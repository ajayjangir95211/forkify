export function markupToElement(markupString) {
  const temp = document.createElement("div");
  temp.innerHTML = markupString.trim();
  return temp.firstChild;
}

export function timeout(s) {
  return new Promise((_, reject) => {
    setTimeout(
      () => reject(new Error(`Request timed out after ${s} seconds`)),
      s * 1000
    );
  });
}

const go = document.querySelector(".go");
const getElem = document.querySelector(".get");
const myBtn = document.querySelector(".button");

myBtn.addEventListener("click", () => {
  getElem.className = "get in";
  go.className = "go out";
});

getElem.querySelector("div").addEventListener("animationend", () => {
  console.log("finished");
  getElem.className = "get out";
  go.className = "go in";
});

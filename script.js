const items = document.querySelectorAll(".item");
const winText = document.querySelector(".win__text");
const refreshBtn = document.querySelector(".refresh__btn");

const win = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
  [1, 5, 9],
  [3, 5, 7],
  [1, 4, 7],
  [2, 5, 8],
  [3, 6, 9],
];

let turn = 0;

for (let i = 0; i < items.length; i++) {
  items[i].onclick = () => {
    ne(i);
  };
}
function oStep(indx) {
  const o = document.createElement("div");
  o.className = "o";
  items[indx].appendChild(o);
  items[indx].id = "o";
  turn = 1;
  condition();
}
function xStep(indx) {
  const x = document.createElement("div");
  x.className = "x";
  items[indx].appendChild(x);
  items[indx].id = "x";
  turn = 0;
  condition();
}
function condition() {
  for (let index = 0; index < win.length; index++) {
    if (
      items[win[index][0] - 1].id == "o" &&
      items[win[index][1] - 1].id == "o" &&
      items[win[index][2] - 1].id == "o"
    ) {
      winText.textContent = "о виграв";
      refreshBtn.style.display = "block";
      console.log(12);

      return true;
    } else if (
      items[win[index][0] - 1].id == "x" &&
      items[win[index][1] - 1].id == "x" &&
      items[win[index][2] - 1].id == "x"
    ) {
      winText.textContent = "x виграв";
      refreshBtn.style.display = "block";
      return true;
    }
  }
}

function ne(i) {
  if (!condition()) {
    console.log(!condition());
    if (!items[i].childNodes[0]) {
      if (turn == 0) {
        oStep(i);
      } else if (turn == 1) {
        xStep(i);
      }
    }
  }
}
refreshBtn.onclick = () => {
  refresh();
};
function refresh() {
  winText.textContent = "";
  refreshBtn.style.display = "none";
  for (let indx = 0; indx < items.length; indx++) {
    if (Boolean(items[indx].childNodes[0])) {
      items[indx].id = "";
      items[indx].removeChild(items[indx].firstChild);
    }
  }
}

(() => {
  setRandomColors();
  const topMenu = document.getElementById("top-menu-small-list");
  document
    .getElementById("top-menu-small-btn")
    .addEventListener("click", (e) => {
      e.preventDefault();
      topMenu.classList.toggle("is-open");
    });
})();

function setRandomColors() {
  const colors = [
    "#f78f1d",
    "#ec098d",
    "#5261ac",
    "#8cc63f",
    "#00aedb",
    "#898989",
  ];
  let prevColor = "";
  const list = document.getElementsByClassName("random-color");
  for (let l of list) {
    let currColor = "";
    do {
      currColor = colors[Math.floor(Math.random() * colors.length)];
    } while (prevColor === currColor);
    l.style.backgroundColor = currColor;
    l.style.borderColor = currColor;
    prevColor = currColor;
  }
}

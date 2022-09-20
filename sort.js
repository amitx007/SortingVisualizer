const size = document.querySelector("#size");
const speed = document.querySelector("#speed");
const sizeText = document.querySelector("label[for='size']> span");
const speedText = document.querySelector("label[for='speed']> span");
const elements = document.getElementsByClassName("elements")[0];
const width = parseFloat(window.getComputedStyle(elements).width);
const height = parseFloat(window.getComputedStyle(elements).height);

// about
const aboutPara = document.querySelector(".about>p");
const aboutCode = document.querySelector("#code");
// table
const worstTC = document.querySelector(".worst>td");
const averageTC = document.querySelector(".average>td");
const bestTC = document.querySelector(".best>td");
const spaceC = document.querySelector(".spaceComplexity>td");
// code
const javaButton = document.querySelector(".java");
const javaScriptButton = document.querySelector(".js");

size.value = 50;
sizeText.innerText = size.value;
speed.value = 5;
speedText.innerText = speed.value;
let widthDiv = width / Number(size.value);

formationOfBars(size.value, widthDiv);

size.addEventListener("input", () => {
  sizeText.innerText = size.value;
  widthDiv = width / Number(size.value);
  formationOfBars(Number(size.value), widthDiv);
});
speed.addEventListener("input", () => {
  speedText.innerText = speed.value;
});
function pageUpdation(name) {
  const head = document.getElementById("headx");
  head.innerText = name;

  if (name == "Bubble Sort") {
    descriptionBubbleSort();
  } else if (name == "Selection Sort") {
    descriptionSelectionSort();
  } else if (name == "Insertion Sort") {
    descriptionInsertionSort();
  } else if (name == "Quick Sort") {
    descriptionQuickSort();
  } else if (name == "Merge Sort") {
    descriptionMergeSort();
  } else if (name == "Heap Sort") {
    descriptionHeapSort();
  }
}
function formationOfBars(size, widthDiv) {
  elements.innerText = "";
  for (let i = 0; i < size; i++) {
    let h = Math.random() * 10 + 1;
    arr.push(h);
    const div = document.createElement("div");
    div.classList.add("ele");
    elements.insertAdjacentElement("beforeend", div);
    div.style.height = `${h * 30}px`;
    div.style.width = `${widthDiv}px`;
    div.id = `ele${i}`;
  }
}
async function delay(sec) {
  return new Promise((res) => {
    setTimeout(() => {
      return res();
    }, sec * 1000);
  });
}
function error(ele1, ele2) {
  ele1
    ? (ele1.style.background =
        "linear-gradient(to top, #ff0844 0%, #ffb199 100%)")
    : "";
  ele2
    ? (ele2.style.background =
        "linear-gradient(to top, #ff0844 0%, #ffb199 100%)")
    : "";
}
function successful(ele1, ele2) {
  ele1
    ? (ele1.style.background =
        "linear-gradient( 180deg,  rgba(155,254,23,1) 45.5%, rgba(36,243,8,1) 97.9% )")
    : "";
  ele2
    ? (ele2.style.background =
        "linear-gradient( 180deg,  rgba(155,254,23,1) 45.5%, rgba(36,243,8,1) 97.9% )")
    : "";
}
function reset(ele1, ele2) {
  ele1
    ? (ele1.style.background =
        "radial-gradient( circle 1224px at 10.6% 8.8%,  rgba(255,255,255,1) 0%, rgba(153,202,251,1) 100.2% )")
    : "";
  ele2
    ? (ele2.style.background =
        "radial-gradient( circle 1224px at 10.6% 8.8%,  rgba(255,255,255,1) 0%, rgba(153,202,251,1) 100.2% )")
    : "";
}

VanillaTilt.init(document.querySelector(".complexityTable"), {
  max: 10,
  speed: 400,
});
VanillaTilt.init(document.querySelector(".code"), {
  max: 10,
  speed: 400,
});

const hamburger = document.querySelector(".hamburger");
const up = document.querySelector(".up");
const right = document.querySelector(".right");
const upList = document.querySelectorAll(".up>.head>.content>ul>li");
const rightList = document.querySelectorAll(".right>.head>.content>ul>li");
const exploring = document.querySelector(".exp");
const sortButton = document.querySelectorAll(".content>ul>li");


sortButton.forEach((ele) => {
  ele.addEventListener("click", (e) => {
    window.localStorage.setItem("sort", e.target.innerText);
    SortName = e.target.innerText;
    hamburger.querySelector(".menu").click();
  });
});

function sortingFunction(name) {
  if (name.includes("Merge")) {
    mergeSort();
  } else if (name.includes("Heap")) {
    heapSort();
  } else if (name.includes("Bubble")) {
    bubbleSort();
  } else if (name.includes("Insertion")) {
    insertionSort();
  } else if (name.includes("Selection")) {
    selectionSort();
  } else if (name.includes("Quick")) {
    quickSort();
  }
}

gsap.from(hamburger, {
  duration: 0.5,
  x: -100,
  ease: "power4.out",
});
const heading = document.querySelectorAll(".sortingHeading>.heading>h1");
let arr = [
  "siucs",
  "dugcdh",
  "aiuhfeg",
  "efgudjhcms",
  "efiugng",
  "scusuyhms",
  "auiugng",
  "wtcusuthms",
  "efiugng",
  "sccusuitms",
  "axting",
  "ugsxrithms",
  "sorting",
  "algorithms",
];
let index = 0;
document.addEventListener("DOMContentLoaded", () => {
  if (!location.href.includes("Sortx")) {
     console.log("amit");
    let interval = setInterval(() => {
      if (index > 6) {
        clearInterval(interval);
      } else {
        heading[0].innerText = arr[index * 2];
        heading[1].innerText = arr[index * 2 + 1];
        index++;
      }
    }, 100);
  }
  if (location.href.includes("Sortx")) {
     const start = document.getElementById("start");
     const random = document.getElementById("random");
     let sort = localStorage.getItem("sort");
     pageUpdation(sort);
     start.addEventListener("click", () => {
       size.setAttribute("disabled", "true");
       speed.setAttribute("disabled", "true");
       random.setAttribute("disabled", "true");
       sortingFunction(sort);
     });
     random.addEventListener("click", () => {
       let widthDiv = width / Number(size.value);
       formationOfBars(size.value, widthDiv);
     });
   }
   if (location.href.includes("index")) {
     localStorage.clear();
   }
});

function navigationOpen() {
  gsap.to(".up", { duration: 1, top: "0%", ease: "power3.out" });
  gsap.to(".right", { duration: 1, right: "0%", ease: "power3.out" });
  gsap.from(upList, {
    duration: 1,
    y: -30,
    opacity: 0,
    stagger: 0.5,
    delay: 0.5,
    ease: "power1.out",
  });
  gsap.from(rightList, {
    duration: 1,
    x: 30,
    opacity: 0,
    stagger: 0.5,
    delay: 0.1,
    ease: "power1.out",
  });
}
function navigationClose() {
  gsap.to(".up", { duration: 1, top: "-100%", ease: "power3.out" });
  gsap.to(".right", { duration: 1, right: "-100%", ease: "power3.out" });
}

hamburger.addEventListener("click", () => {
  if (hamburger.classList.contains("on")) {
    hamburger.classList.remove("on");
    navigationClose();
  } else {
    hamburger.classList.add("on");
    navigationOpen();
  }
});

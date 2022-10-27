// const rules = JSON.parse(localStorage.getItem("rules")) || [];
const rules = [
  {
    engText: "Hello",
    banText: "Hello",
    img1: "../rules_images/sample1.jpg",
    img2: "../rules_images/sample2.jpg",
    img3: null,
  },
  {
    engText: "Hello World",
    banText: "Hello World",
    img1: "../rules_images/sample1.jpg",
    img2: null,
    img3: null,
  },
  {
    engText: "Hello",
    banText: "Hello",
    img1: "../rules_images/sample1.jpg",
    img2: "../rules_images/sample2.jpg",
    img3: "../rules_images/sample3.jpg",
  },
  {
    engText: "Hello World",
    banText: "Hello World",
    img1: "../rules_images/sample1.jpg",
    img2: "../rules_images/sample2.jpg",
    img3: null,
  },
];

let currentRuleIndex = 0;

document.addEventListener("DOMContentLoaded", () => {
  createRule();
});

const btnPrevious = document.querySelector(".btn-previous");
btnPrevious.addEventListener("click", () => {
  if (currentRuleIndex) {
    currentRuleIndex--;
    createRule();
  }
});

const btnNext = document.querySelector(".btn-next");
btnNext.addEventListener("click", () => {
  // if (currentRuleIndex < rules.length - 1) {
  //   currentRuleIndex++;
  // }
  if (currentRuleIndex < rules.length - 1) {
    currentRuleIndex++;
    createRule();
  } else {
    window.location.href = "./report.html";
  }
});

// Create Rules Content
const createRule = () => {
  console.log(currentRuleIndex + 1);
  const ruleNumber =
    currentRuleIndex < 9
      ? `0${currentRuleIndex + 1}`
      : `${currentRuleIndex + 1}`;
  document.querySelector(
    ".rule-header"
  ).innerText = `General Safety Rules: ${ruleNumber}`;
  if (currentRuleIndex === rules.length - 1) {
    btnNext.innerText = "Finish";
  } else {
    btnNext.innerText = "Next";
  }
  document.querySelector(".eng-text").innerText =
    rules[currentRuleIndex].engText;
  document.querySelector(".ban-text").innerText =
    rules[currentRuleIndex].banText;
  const ruleImg1 = document.querySelector(".rule-img-1");
  const ruleImg2 = document.querySelector(".rule-img-2");
  const ruleImg3 = document.querySelector(".rule-img-3");
  ruleImg1.setAttribute("src", rules[currentRuleIndex].img1);
  if (rules[currentRuleIndex].img2 === null) {
    ruleImg2.style.display = "none";
  } else {
    ruleImg2.setAttribute("src", rules[currentRuleIndex].img2);
    ruleImg2.style.display = "block";
  }
  if (rules[currentRuleIndex].img3 === null) {
    ruleImg3.style.display = "none";
  } else {
    ruleImg3.setAttribute("src", rules[currentRuleIndex].img3);
    ruleImg3.style.display = "flex";
  }
};

// const rules = JSON.parse(localStorage.getItem("rules")) || [];
const rules = [
  {
    engText: "Walk Outside the Yellow Line. Use Footpath to Avoid Accident.",
    banText: "হলুদ লাইনের বাইরে হাঁটুন। দুর্ঘটনা এড়াতে ফুটপাথ ব্যবহার করুন।",
    img1: "../rules_images/rule1_image1.jpg",
    img2: null,
    img3: null,
  },
  {
    engText:
      "Always use Zebra Crossing for crossing the road. Don't use Speed Breaker ( Black-yellow) for crossing.",
    banText:
      "রাস্তা পার হওয়ার জন্য সবসময় জেব্রা ক্রসিং ব্যবহার করুন। ক্রসিংয়ের জন্য স্পিড ব্রেকার (কালো-হলুদ) ব্যবহার করবেন না।",
    img1: "../rules_images/rule2_image1.png",
    img2: "../rules_images/rule2_image2.png",
    img3: null,
  },
  {
    engText: "Don't run/walk in front of Running Vehicle.",
    banText: "চলমান যানবাহনের সামনে দৌড়াবেন/হাঁটবেন না।",
    img1: "../rules_images/rule3_image1.jpg",
    img2: null,
    img3: null,
  },
  {
    engText:
      "Unauthorized Movement is NOT Allowed. Do not enter in Restricted Area.",
    banText: "অননুমোদিত চলাচল অনুমোদিত নয়। সীমাবদ্ধ এলাকায় প্রবেশ করবেন না।",
    img1: "../rules_images/rule4_image1.jpg",
    img2: "../rules_images/rule4_image2.jpg",
    img3: null,
  },
  {
    engText:
      "Report Immediately for any condition or practice you think might cause injury to employees or damage equipment.",
    banText:
      "যে কোনো অবস্থা বা অনুশীলনের জন্য অবিলম্বে রিপোর্ট করুন যা আপনার মনে হয় কর্মীদের আঘাত বা সরঞ্জামের ক্ষতি হতে পারে।",
    img1: "../rules_images/rule5_image1.png",
    img2: "../rules_images/rule5_image2.png",
    img3: "../rules_images/rule5_image3.png",
  },
  {
    engText:
      "If you see any Unsafe condition related to Electricity(open cable, broken switch, open arc) Report Immediately.",
    banText:
      "যদি আপনি বিদ্যুৎ সম্পর্কিত কোনো অনিরাপদ অবস্থা দেখেন (খোলা তার, ভাঙা সুইচ, ওপেন আর্ক) অবিলম্বে রিপোর্ট করুন।",
    img1: "../rules_images/rule6_image1.png",
    img2: "../rules_images/rule6_image2.png",
    img3: "../rules_images/rule6_image3.png",
  },
  {
    engText:
      "Put everything you use in its proper place. Disorder causes injury and wastes time, energy, and material.",
    banText:
      "আপনার ব্যবহার্য যন্ত্রপাতি সঠিক জায়গায় রাখুন। বিশৃঙ্খলা আঘাতের কারণ হয় এবং সময়, শক্তি এবং উপাদান নষ্ট করে।",
    img1: "../rules_images/rule7_image1.png",
    img2: null,
    img3: null,
  },
  {
    engText:
      "Use the Right Tools and Equipment for the job and use them Safely.",
    banText:
      "কাজের জন্য সঠিক যন্ত্রপাতি ও সরঞ্জাম ব্যবহার করুন এবং সেগুলি নিরাপদে ব্যবহার করুন।",
    img1: "../rules_images/rule8_image1.png",
    img2: "../rules_images/rule8_image2.png",
    img3: null,
  },
  {
    engText:
      "Don't Touch any kind of Machines that you are not supposed to use.",
    banText: "আপনার ব্যবহার করা উচিত নয় এমন কোনো মেশিন স্পর্শ করবেন না।",
    img1: "../rules_images/rule9_image1.png",
    img2: "../rules_images/rule9_image2.png",
    img3: null,
  },
  {
    engText:
      "Don't Touch any kind of oil, water, chemicals or other elements Without Knowing.",
    banText:
      "না জেনে কোন প্রকার তেল, পানি, রাসায়নিক বা অন্যান্য উপাদান স্পর্শ করবেন না।",
    img1: "../rules_images/rule10_image1.png",
    img2: null,
    img3: null,
  },
  {
    engText: "Do Not stand beside Running Machine.",
    banText: "চলমান মেশিনের পাশে দাঁড়াবেন না।",
    img1: "../rules_images/rule11_image1.png",
    img2: null,
    img3: null,
  },
  {
    engText: "Keep out of sharp edges like metal, glasses, broken plastic etc.",
    banText:
      "ধাতব বস্তু, গ্লাস, ভাঙা প্লাস্টিক ইত্যাদির মতো ধারালো প্রান্ত থেকে দূরে থাকুন",
    img1: "../rules_images/rule12_image1.png",
    img2: "../rules_images/rule12_image2.png",
    img3: null,
  },
  {
    engText: "Loose dress and clothes are NOT Allowed in the Factory.",
    banText:
      "কারখানার অভ্যন্তরে ঢিলেঢালা জামা কাপড় (যেমন: লুঙ্গি, পাঞ্জাবি, পায়জামা কিংবা ফতোয়া) পরে প্রবেশ করা যাবে না।",
    img1: "../rules_images/rule13_image1.png",
    img2: "../rules_images/rule13_image2.png",
    img3: null,
  },
  {
    engText:
      "Smoking is Strictly Prohibited in the factory except the designated Smoking Zone.",
    banText: "নির্ধারিত ধূমপান অঞ্চল ছাড়া কারখানায় ধূমপান কঠোরভাবে নিষিদ্ধ।",
    img1: "../rules_images/rule14_image1.jpg",
    img2: null,
    img3: null,
  },
  {
    engText:
      "Whenever you or the equipment you operate is involve in an accident, regardless of how minor, Report it Immediately. Get the first aid promptly.",
    banText:
      "যখনই আপনি বা আপনি যে সরঞ্জামগুলি পরিচালনা করেন তা দুর্ঘটনার সাথে জড়িত, তা যতই ছোট হোক না কেন, অবিলম্বে রিপোর্ট করুন। দ্রুত প্রাথমিক চিকিৎসা নিন।",
    img1: "../rules_images/rule15_image1.png",
    img2: null,
    img3: null,
  },
  {
    engText: "Use, adjust, alter and repair equipment only when Authorized.",
    banText:
      "শুধুমাত্র অনুমোদিত হলেই সরঞ্জাম ব্যবহার, সমন্বয়, পরিবর্তন এবং মেরামত করুন।",
    img1: "../rules_images/rule16_image1.png",
    img2: null,
    img3: null,
  },
  {
    engText:
      "Wear approved Personal Protective Equipment (PPE) as desired. Keep it in Good Condition.",
    banText:
      "অনুমোদিত ব্যক্তিগত সুরক্ষা সরঞ্জাম (পিপিই) পরুন। এগুলো ভালো অবস্থায় সংরক্ষণ করুন।",
    img1: "../rules_images/rule17_image1.jpg",
    img2: "../rules_images/rule17_image2.png",
    img3: null,
  },
  {
    engText:
      "When lifting; bend your knees, grasp the load firmly, then raise the load keeping your back as straight as possible. Get help for heavy loads more than 25Kg.",
    banText:
      "উত্তোলন করার সময়; আপনার হাঁটু বাঁকুন, দৃঢ়ভাবে বোঝা ধরুন, তারপর আপনার পিঠ যতটা সম্ভব সোজা রেখে বোঝা বাড়ান। ২৫ কেজির বেশি ভারী বোঝার জন্য সহায়তা নিন।",
    img1: "../rules_images/rule18_image1.png",
    img2: "../rules_images/rule18_image2.png",
    img3: null,
  },
  {
    engText: "Obey all Rules, Signs, and Instructions.",
    banText: "সমস্ত নিয়ম, চিহ্ন, এবং নির্দেশাবলী মেনে চলুন।",
    img1: "../rules_images/rule19_image1.png",
    img2: "../rules_images/rule19_image2.png",
    img3: null,
  },
  {
    engText:
      "If you feel sick Inform your Reporting Manager and go to Health Center.",
    banText:
      "আপনি অসুস্থ বোধ করলে আপনার রিপোর্টিং ম্যানেজারকে জানান এবং দ্রুত স্বাস্থ্য কেন্দ্রে যান।",
    img1: "../rules_images/rule20_image1.png",
    img2: null,
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
  // Rule Image Boxes
  const ruleBox2 = document.querySelector(".rule-box-2");
  const ruleBox3 = document.querySelector(".rule-box-3");
  // Rule Images
  const ruleImg1 = document.querySelector(".rule-img-1");
  const ruleImg2 = document.querySelector(".rule-img-2");
  const ruleImg3 = document.querySelector(".rule-img-3");
  ruleImg1.setAttribute("src", rules[currentRuleIndex].img1);
  if (rules[currentRuleIndex].img2 === null) {
    ruleBox2.style.display = "none";
  } else {
    ruleImg2.setAttribute("src", rules[currentRuleIndex].img2);
    ruleBox2.style.display = "flex";
  }
  if (rules[currentRuleIndex].img3 === null) {
    ruleBox3.style.display = "none";
  } else {
    ruleImg3.setAttribute("src", rules[currentRuleIndex].img3);
    ruleBox3.style.display = "flex";
  }
};

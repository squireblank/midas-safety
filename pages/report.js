const visitor = JSON.parse(localStorage.getItem("visitor"));
console.log(visitor);

document.addEventListener("DOMContentLoaded", () => {
  document.querySelector(".name").innerText = visitor.name;
  document.querySelector(".company").innerText = visitor.company;
  document.querySelector(".area-visit").innerText = visitor.areaVisit;
  document.querySelector(".person-visit").innerText = visitor.personVisit;
  document.querySelector(".contact").innerText = visitor.contact;
  document.querySelector(".result").innerText = "80%";
});

document.querySelector(".btn-report").addEventListener("click", () => {
  alert("Not Available Currently");
  window.location.href = "../index.html";
});

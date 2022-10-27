document.querySelector("#visitorForm").addEventListener("submit", (e) => {
  e.preventDefault();
  const visitor = {
    name: document.querySelector("#name").value,
    company: document.querySelector("#company").value,
    areaVisit: document.querySelector("#area-visit").value,
    personVisit: document.querySelector("#person-visit").value,
    contact: document.querySelector("#contact").value,
  };
  localStorage.setItem("visitor", JSON.stringify(visitor));
  window.location.href = "rules-welcome.html";
});

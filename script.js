const form = document.querySelector("form");
const nlwSetup = new NLWSetup(form);
const button = document.querySelector("header button");

button.addEventListener("click", addD);
form.addEventListener("change", save);

function addD() {
  today = new Date().toLocaleDateString().slice(0, -5);
  dayExists = nlwSetup.dayExists(today);

  if (dayExists) {
    alert("Day already exists ❌");
    return;
  } else {
    alert("Added Successfully ✔");
  }

  nlwSetup.addDay(today);
}

function save() {
  localStorage.setItem("nlwSaveChanges", JSON.stringify(nlwSetup.data));
}

data = JSON.parse(localStorage.getItem("nlwSaveChanges")) || {};

nlwSetup.setData(data);
nlwSetup.load();

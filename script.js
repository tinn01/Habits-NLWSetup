const form = document.querySelector("form");
const nlwSetup = new NLWSetup(form);

const data = {
  run: ["01-19", "01-20", "01-21", "01-22", "01-23"],
  water: ["01-19", "01-20", "01-21"],
  gym: ["01-19", "01-20", "01-21"],
};

nlwSetup.setData(data);

nlwSetup.load();

const input_M2 = document.querySelector(".input-m2");

const simulateValue = () => {
  input_M2.addEventListener("keyup", function () {
    let inputValueM2 = parseFloat(input_M2.value);
    let valorm2;

    if (inputValueM2 <= 40) {
      valorm2 = 5;
    } else if (inputValueM2 <= 80) {
      valorm2 = 4;
    } else if (inputValueM2 <= 120) {
      valorm2 = 3;
    } else if (inputValueM2 <= 180) {
      valorm2 = 2;
    } else {
      valorm2 = 1;
    }
    document.querySelector(".valor-p-m2").value = valorm2;
    document.querySelector(".valor-total-input").value = inputValueM2 * valorm2;
  });
};

simulateValue();

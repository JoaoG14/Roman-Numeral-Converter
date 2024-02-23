const number = document.getElementById("number");
const convertButton = document.getElementById("convert-btn");
const output = document.getElementById("output");

convertButton.addEventListener("click", () => {
  let num = parseInt(number.value);
  
  output.innerText = "";

  if (!num) {
    output.innerText = "Please enter a valid number"
    number.value = "";
    return;
  }

  if (num <= 0) {
    output.innerText = "Please enter a number greater than or equal to 1";
    number.value = "";
    return;
  }

  if (num >= 4000) {
    output.innerText = "Please enter a number less than or equal to 3999";
    number.value = "";
    return;
  }

  while (num >= 1000) {
    num -= 1000
    output.innerText += "M";
  };
  while (num >= 900) {
    num -= 900;
    output.innerText += "CM";
  };
  while (num >= 500) {
    num -= 500;
    output.innerText += "D";
  };
  while (num >= 400) {
    num -= 400;
    output.innerText +=  "CD";
  };
  while (num >= 100) {
    num -= 100;
    output.innerText += "C";
  };
  while (num >= 90) {
    num -= 90;
    output.innerText += "XC";
  };
  while (num >= 50) {
    num -= 50;
    output.innerText += "L";
  };
  while (num >= 40) {
    num -= 40;
    output.innerText += "XL";
  };
  while (num >= 10) {
    num -= 10;
    output.innerText += "X";
  };
  while (num >= 9) {
    num -= 9;
    output.innerText += "IX";
  };
  while (num >= 5) {
    num -= 5;
    output.innerText += "V"
  };
  while (num >= 4) {
    num -= 4;
    output.innerText += "IV"
  };
  while (num >= 1) {
    num -= 1;
    output.innerText += "I";
  }
  
  number.value = "";
})
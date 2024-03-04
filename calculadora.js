let result = document.querySelector(".result");
let nums = document.querySelectorAll(".num");
let plus = document.querySelector(".mas");
let borrar = document.querySelector(".delete");
let signs = document.querySelectorAll(".signs");
let igual = document.querySelector(".igual");

let currentNumber = 0;
let previousNumber = 0;
let currentSign;
let previousSign;
let bandera = false;
let bandera2 = false;
let igualTocado = false;

borrar.addEventListener("click", () => {
  result.innerText = "";
  currentNumber = 0;
  previousNumber = 0;
  currentSign = undefined;
  previousSign = undefined;
  bandera = false;
  bandera2 = false;
});

for (let i = 0; i < nums.length; i++) {
  nums[i].addEventListener("click", function () {
    result.innerText += this.innerText;
    currentNumber = result.innerText;
    console.log("numero anterior: " + previousNumber);
    console.log("numero nuevo: " + currentNumber);
  });
}

for (let i = 0; i < signs.length; i++) {
  signs[i].addEventListener("click", function () {
    currentSign = this.innerText;
    console.log(currentSign);

    if (bandera) {
      if (previousSign) {
        switch (previousSign) {
          case "+":
            previousNumber = previousNumber * 1 + currentNumber * 1;
            break;
          case "-":
            previousNumber = previousNumber - currentNumber;
            break;
          case "*":
            previousNumber = previousNumber * currentNumber;
            break;
        }
      }
    } else {
      switch (currentSign) {
        case "+":
          previousNumber = previousNumber * 1 + currentNumber * 1;
          break;
        case "-":
          if (bandera2) {
            previousNumber = previousNumber - currentNumber;
          } else {
            previousNumber = currentNumber;
          }
          break;
        case "*":
          if (bandera2) {
            previousNumber = previousNumber;
          } else {
            previousNumber = currentNumber;
          }
          break;
        case "/":
          if (bandera2) {
            previousNumber = previousNumber;
          } else {
            previousNumber = currentNumber;
          }
          break;
      }
    }

    previousSign = currentSign;
    bandera = true;
    result.innerText = "";
    currentNumber = 0;
    console.log("numero anterior: " + previousNumber);
  });
}

igual.addEventListener("click", () => {
  switch (previousSign) {
    case "+":
      previousNumber = previousNumber * 1 + currentNumber * 1;
      break;
    case "-":
      previousNumber = previousNumber - currentNumber;
      break;
    case "*":
      previousNumber = previousNumber * currentNumber;
      break;
    case "/":
      previousNumber = previousNumber / currentNumber;
      break;
  }

  result.innerText = previousNumber;
  bandera = false;
  previousSign = undefined;
  currentNumber = 0;
  bandera2 = true;
  console.log(previousNumber);
  console.log(currentNumber);

  result.classList.add("result-border");
  setTimeout(() => {
    result.classList.remove("result-border");
  }, 750);
});

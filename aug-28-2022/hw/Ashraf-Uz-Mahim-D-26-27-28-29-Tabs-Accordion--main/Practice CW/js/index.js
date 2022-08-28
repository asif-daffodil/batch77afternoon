// summation js coding

const myForm = document.getElementById("myForm");
const num1 = document.getElementById("num1");
const num2 = document.getElementById("num2");
const result = document.getElementById("result");

myForm.addEventListener("submit", (e) => {
  e.preventDefault();
  result.innerHTML = parseFloat(num1.value) + parseFloat(num2.value);
});

// tabs js coding

const button1 = document.getElementById("button1");
const button2 = document.getElementById("button2");
const button3 = document.getElementById("button3");
const story = document.getElementById("story");

button1.addEventListener("click", () => {
  story.textContent = "ঢাকা";
});
button2.addEventListener("click", () => {
  story.textContent = "চট্টগ্রাম";
});
button3.addEventListener("click", () => {
  story.textContent = "শনির আখড়া";
});

story.addEventListener("mouseover", () => {
  story.innerHTML = "Hellow! Bangladesh.";
});

// light of light on coding

const buttons = document.querySelectorAll(".buttons")[0];
const img = document.querySelectorAll(".img")[0].children[0];

buttons.addEventListener("click", (e) => {
  const buttonNo = Array.from(buttons.children).indexOf(e.target);

  buttonNo === 0
    ? (img.src = "./images/light on.png")
    : (img.src = "./images/light off.png");

  // switch (buttonNo) {
  //   case 0:
  //     img.src = "./images/light on.png";
  //     break;
  //   case 1:
  //     img.src = "./images/light off.png";
  //     break;

  //   default:
  //     img.src = "./images/light off.png";
  //     break;
  // }
});

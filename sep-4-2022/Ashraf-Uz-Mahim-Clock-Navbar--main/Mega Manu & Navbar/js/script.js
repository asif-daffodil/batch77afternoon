const nav = document.querySelectorAll("nav")[0];
const manubarDropdown = document.querySelectorAll(".manubarDropdown")[0];
const zindex = document.querySelectorAll(".z-index")[0];

const arrayManubarDropdown = Array.from(manubarDropdown.children);

nav.addEventListener("click", (e) => {
  const manuBar = Array.from(e.target.parentElement.parentElement.children);
  const clickedIndex = manuBar.indexOf(e.target.parentElement);
  for (let i = 0; i < manuBar.length; i++) {
    if (i === clickedIndex) {
      zindex.classList.toggle("displayNone");
      manuBar[i].classList.toggle("activeBar");
      arrayManubarDropdown[i].classList.toggle("displayNone");
    } else {
      manuBar[i].classList.remove("activeBar");
      arrayManubarDropdown[i].classList.add("displayNone");
    }
  }
});

// z-index js coding started here

zindex.addEventListener("click", () => {
  for (let i = 0; i < arrayManubarDropdown.length; i++) {
    zindex.classList.add("displayNone");
    arrayManubarDropdown[i].classList.add("displayNone");
    nav.children[0].children[i].classList.remove("activeBar");
  }
});

// digital clock js coding --------->>>>>>>>>>>>>>>>>>>>>>>>>>>>

const time = document.querySelectorAll(".time")[0];
const date = document.querySelectorAll(".date")[0];
const week = document.querySelectorAll(".week")[0];

// time management

let hour, amPm;
const manageHour = (h) => {
  if (h < 12) {
    hour = h;
    amPm = "AM";
  } else if (h === 12) {
    hour = h;
    amPm = "PM";
  } else {
    hour = h - 12;
    amPm = "PM";
  }
};

setInterval(() => {
  const d = new Date();
  manageHour(d.getHours());
  showDate(d);
  time.textContent =
    ("0" + hour).slice(-2) +
    ":" +
    ("0" + d.getMinutes()).slice(-2) +
    ":" +
    ("0" + d.getSeconds()).slice(-2) +
    " " +
    amPm;
});

// date management

const showDate = (d) => {
  const month = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12"];

  date.textContent =
    "Date: " +
    ("0" + d.getDate()).slice(-2) +
    "-" +
    ("0" + month[d.getMonth()]).slice(-2) +
    "-" +
    d.getFullYear();
};

// week management

const d = new Date();
const weekArray = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
week.textContent = Monday[d.getDate()];

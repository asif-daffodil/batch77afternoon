// accordion js coding >>>>>>>>>>>>>>>>>>

const header = document.querySelectorAll(".header");
const details = document.querySelectorAll(".details");

for (let i = 0; i < header.length; i++) {
  header[i].addEventListener("click", () => {
    for (let j = 0; j < header.length; j++) {
      if (i === j) {
        if (header[j].classList.contains("active")) {
          header[j].classList.remove("active");
          details[j].style.maxHeight = null;
        } else {
          header[j].classList.add("active");
          details[j].style.maxHeight = details[j].scrollHeight + "px";
        }
      } else {
        header[j].classList.remove("active");
        details[j].style.maxHeight = null;
      }
    }
  });
}

// tabs js coding started here >>>>>>>>>>>>>>>>>>

const tabManuBtn = document.querySelectorAll(".tabManuBtn");
const tabsDetails = document.querySelectorAll(".tabsDetails");

for (let i = 0; i < tabManuBtn.length; i++) {
  tabManuBtn[i].addEventListener("click", () => {
    for (let j = 0; j < tabManuBtn.length; j++) {
      if (i === j) {
        tabManuBtn[j].classList.add("activeTab");
        tabsDetails[j].classList.remove("d-none");
      } else {
        tabManuBtn[j].classList.remove("activeTab");
        tabsDetails[j].classList.add("d-none");
      }
    }
  });
}

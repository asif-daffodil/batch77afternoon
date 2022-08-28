const tabs = document.querySelectorAll(".tabs");
const tab = document.querySelectorAll(".tab");
const panel = document.querySelectorAll(".panel");

function onTabClick(event) {
  // deactivate existing active tabs and panel

  for (let i = 0; i < tab.length; i++) {
    tab[i].classList.remove("active");
  }

  for (let i = 0; i < panel.length; i++) {
    panel[i].classList.remove("active");
  }

  // activate new tabs and panel
  event.target.classList.add("active");
  let classString = event.target.getAttribute("data-target");
  console.log(classString);
  document
    .getElementById("panels")
    .getElementsByClassName(classString)[0]
    .classList.add("active");
}

for (let i = 0; i < tab.length; i++) {
  tab[i].addEventListener("click", onTabClick, false);
}

// tab end here

var accItem = document.getElementsByClassName("accordionItem");
var accHD = document.getElementsByClassName("accordionItemHeading");
for (i = 0; i < accHD.length; i++) {
  accHD[i].addEventListener("click", toggleItem, false);
}
function toggleItem() {
  var itemClass = this.parentNode.className;
  for (i = 0; i < accItem.length; i++) {
    accItem[i].className = "accordionItem close";
  }
  if (itemClass == "accordionItem close") {
    this.parentNode.className = "accordionItem open";
  }
}

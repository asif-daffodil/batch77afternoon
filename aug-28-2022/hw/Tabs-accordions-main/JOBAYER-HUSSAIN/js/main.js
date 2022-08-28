//****Accordion****//

const header = document.querySelectorAll(".header");
const details = document.querySelectorAll(".details");

for (let i = 0; i < header.length; i++) {
    header[i].addEventListener("click", () => {
        for (let j = 0; j < header.length; j++){
            if(i == j){
                if(header[j].classList.contains("active")){
                    header[j].classList.remove("active");
                    details[j].classList.add("d-none");
                }else{
                    header[j].classList.add("active");
                    details[j].classList.remove("d-none");
                }
            }else{
                header[j].classList.remove("active");
                details[j].classList.add("d-none");
            }
        }
    });
};

//****Tabs****//

const headings = document.querySelectorAll(".headings")[0];
const Details = document.querySelectorAll(".Details")[0];
const headingsArr = Array.from(headings.children);
const DetailsArr = Array.from(Details.children);

headings.addEventListener("click", (e) => {
    const clickedDivIndex = headingsArr.indexOf(e.target);
    for(let i = 0; i < headingsArr.length; i++){
        if(i === clickedDivIndex){
            headingsArr[i].classList.add("active");
            DetailsArr[i].classList.remove("d-none");
        }else{
            headingsArr[i].classList.remove("active");
            DetailsArr[i].classList.add("d-none");
        }
    }
})
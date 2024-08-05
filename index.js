const circles = document.querySelectorAll(".circle");
const hr  = document.getElementsByTagName("hr");
const prev = document.querySelector(".prev");
const next = document.querySelector(".next");
const className = "active";

var lastActive = 0;

function checkLastActive() {
    for (var i = 0; i < circles.length; i ++) {
        if (circles[i].classList.contains(className)) {
            lastActive = i;
        }
    }
    console.log(lastActive);
}


next.addEventListener("click", ()=> {
    checkLastActive();
    circles[lastActive + 1].classList.add(className);
    if (lastActive < 3) {
        hr[lastActive].classList.add(className);
        if (lastActive === 2) {
            next.classList.remove(className);
        }
    }    
    prev.classList.add(className);
});

prev.addEventListener("click", function() {
    checkLastActive();
    if (lastActive > 0) {
        circles[lastActive].classList.remove(className);
        if (lastActive === 1) {
            prev.classList.remove(className)
        }   
        if (lastActive <= 3) {
            next.classList.add(className);
        } 
    } else {
        prev.classList.remove(className)
    }   
    hr[lastActive - 1].classList.remove(className);
    
})
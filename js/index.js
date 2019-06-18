// Your code goes here
function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}
/* MOUSEOVER */
let navLinks = document.querySelectorAll("nav a")

navLinks.forEach(link => {
    link.addEventListener("mouseover", function(event) {
        event.preventDefault();
        link.style.border = "4px dotted skyblue";
    })
})

navLinks.forEach(link => {
    link.addEventListener("mouseleave", function(event) {
        event.preventDefault();
        link.style.border = "";
    }) 
    
    link.addEventListener("click", function(event) {
        event.preventDefault();
    })
})

/* KEYDOWN */
window.addEventListener("keydown", function(event) {
    event.preventDefault();
    if (event.key == "f") {
        window.open ("https://mastery.games/p/flexbox-zombies", '_blank'
        )};
});


let funBusImg = document.querySelector(".intro img")

funBusImg.addEventListener("dblclick", function(event) {
  event.preventDefault();
  funBusImg.style.width = "50%";
});
console.log(funBusImg);

let adventureAwaitsTexts = document.querySelectorAll('.inverse-content .text-content p')
adventureAwaitsTexts.forEach(paragraph => {
    paragraph.addEventListener("click", function(event){
        event.preventDefault();
        paragraph.style.color = "rebeccapurple";
    });
});

adventureAwaitsTexts.forEach(paragraph => {
    paragraph.addEventListener("copy", function(event) {
        event.preventDefault();
        alert("Please DO NOT COPY!");
    });
});

let body = document.querySelector("body")
let opacityCheck;

window.addEventListener("scroll", function(event) {
    event.preventDefault();
    clearTimeout(opacityCheck);
    body.style.opacity = "0.6";
    opacityCheck = setTimeout(function() {
        body.style.opacity = "";
    }, 66);
});

window.addEventListener("resize", function(event) {
    event.preventDefault();
    body.style.opacity = "1";
});

window.addEventListener("load", function(event) {
    event.preventDefault();
    this.alert("Page reloaded!");
});

body.addEventListener("dragstart", function(event) {
    // event.preventDefault();
    console.log(event.target);
    event.target.style.opacity = "0.3";
});

body.addEventListener("dragend", function(event) {
    // event.preventDefault();
    console.log(event.target);
    event.target.style.opacity = "";
});

let scrolling = true;

window.addEventListener("wheel", function(event) {
    event.preventDefault();
    body.style.background = "#ffcc00";
    
    if(scrolling) {
        body.style.color = getRandomColor();
        scrolling = false;
        setTimeout(function() {
            scrolling = true;
        }, 100 )
    }
});


 
let contentPickTexts = document.querySelector(".content-pick p")

contentPickTexts.addEventListener("wheel", function(event) {
    event.stopPropagation();
    body.style.color = "navy";
})
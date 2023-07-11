"use strict";
window.addEventListener("DOMContentLoaded", init);


// var prevScrollpos = window.pageYOffset;
// window.onscroll = function () {
//     var currentScrollPos = window.pageYOffset;
//     if (prevScrollpos > currentScrollPos) {
//         document.querySelector("nav").style.top = "0";
//     } else {
//         document.querySelector("nav").style.top = "-100px";
//     }
//     prevScrollpos = currentScrollPos;
// }



function init() {
    fetchSVG();
};


async function fetchSVG() {  // fetching the name text
    let response = await fetch("./graphics/text.svg");
    let mySvgData = await response.text();
    document.querySelector("#textSVGholder").innerHTML = mySvgData;
    startTextAnimation();

};



function startTextAnimation() {
    const bigLetters = document.querySelectorAll(".lineBigText");
    const mihutoniText = document.querySelectorAll(".lineMihutoniText");
    const andreiText = document.querySelectorAll(".lineAndreiText");
    const frontEndDevText = document.querySelectorAll(".lineFrontEndDev");

    bigLetters.forEach(drawtext1Big);
    bigLetters.forEach(fillBigLetters);

    mihutoniText.forEach(drawMihutoni);
    mihutoniText.forEach(fillMihutoni);


    andreiText.forEach(drawAndrei);
    andreiText.forEach(fillAndrei);

    frontend(frontEndDevText);

}

function drawtext1Big(line, i) {
    setTimeout(function (i) {
        line.classList.add("draw");
    }, (i + 1) * 200);
    console.log(i)

};

function fillBigLetters(line, i) {
    setTimeout(function (i) {
        line.classList.add("fillBigText");
    }, (i + 1) * 400);
};



function drawMihutoni(line, i) {
    // console.log("1")
    setTimeout(function (i) {
        line.classList.add("draw");
    }, (i + 1) * 200);
};

function fillMihutoni(line, i) {
    setTimeout(function (i) {
        line.classList.add("fillMihutoniText");
    }, (i + 1) * 300);
};




function drawAndrei(line, i) {
    // console.log("1")
    setTimeout(function (i) {
        line.classList.add("draw");
    }, (i + 1) * 300);
};

function fillAndrei(line, i) {
    setTimeout(function (i) {
        line.classList.add("fillAndreiText");
    }, (i + 1) * 400);
};




function frontend(frontEndDevText) {
    setTimeout(() => {

        frontEndDevText.forEach(drawFrontEndDev);
        frontEndDevText.forEach(fillFrontEndDev);

    }, 2000);
}


function drawFrontEndDev(line, i) {
    // console.log("1")
    setTimeout(function (i) {
        line.classList.add("draw");
    }, (i + 1) * 100);
};

function fillFrontEndDev(line, i) {
    setTimeout(function (i) {
        line.classList.add("fillFrontEndDev");
    }, (i + 1) * 300);
};




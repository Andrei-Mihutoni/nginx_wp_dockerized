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







// gsap > jump to section




// gsap.utils.toArray("section").forEach((panel, i) => {
//     ScrollTrigger.create({
//         trigger: panel,
//         onEnter: () => goToSection(i)
//     });

//     ScrollTrigger.create({
//         trigger: panel,
//         start: "bottom bottom",
//         onEnterBack: () => goToSection(i)

//     });
// });




// gsap.utils.toArray("section").forEach((panel, i) => {
//     ScrollTrigger.create({
//         trigger: panel,
//         start: "top-=200 top",
//         end: "top-=50 top",
//         markers: true,
//         onLeaveBack: (direction) => { goToSection(i - 1); console.log(direction) },
//         // onEnterBack: ({ progress, direction, isActive }) => console.log(progress, direction, isActive)

//     });
// });






// function goToSection(i, anim) {
//     gsap.to(window, {
//         scrollTo: { y: i * innerHeight, autoKill: false },
//         duration: 1
//     });

//     if (anim) {
//         anim.restart();
//     }
// }




// ScrollTrigger.create({
//     trigger: panel,
//     start: "bottom bottom",
//     onEnterBack: () => goToSection(i)



//  ^^^^^ jump to section ^^^^^

// gsap.to('#wellcomeAnim', {
//     opacity: 0,
//     scrollTrigger: {
//         trigger: '#meImg',
//         start: 'top bottom-=200',
//         end: 'bottom bottom-=250',
//         scrub: true,
//         // markers: true
//     }
// })




// gsap.from('#aboutMe', {
//     opacity: 0,
//     scrollTrigger: {
//         trigger: '#aboutMe img',
//         start: 'top bottom-=100',
//         end: 'bottom bottom-=250',
//         scrub: true,
//         // markers: true
//     }
// })

// gsap.from('#projects', {
//     opacity: 0,
//     scrollTrigger: {
//         trigger: '#projects',
//         start: 'top bottom-=250',
//         end: 'bottom bottom-=250',
//         scrub: true,
//         // markers: true
//     }
// })







gsap.to('#wellcomeAnim', {
    opacity: 0,
    scrollTrigger: {
        trigger: '#meImg',
        scroller: "main",
        start: 'top bottom-=200',
        end: 'bottom bottom-=250',
        scrub: true,
        // markers: true
    }
})


gsap.to('#wellcomeAnim', {
    opacity: 0,
    scrollTrigger: {
        trigger: '#meImg',
        scroller: "main",
        start: 'top bottom-=200',
        end: 'bottom bottom-=250',
        scrub: true,
        // markers: true
    }
})




let aboutTimeLine = gsap.timeline({
    scrollTrigger: {
        trigger: '#aboutMe',
        scroller: "main",

        start: "center bottom-=250",
        // markers: true
    }
});

aboutTimeLine
    .from("#meImg", { x: -300, opacity: 0, duration: 1.3 })
    .from("#aboutMeText", { y: 200, opacity: 0, duration: .8 }, "-=1")




// gsap.to('#aboutMe', {
//     opacity: 0,
//     scrollTrigger: {
//         trigger: '#aboutMe',
//         scroller: "main",

//         start: 'bottom bottom-=100',
//         end: 'bottom bottom-=250',
//         scrub: true,
//         // markers: true
//     },
// });



let projectTimeline = gsap.timeline({
    scrollTrigger: {
        trigger: '#projects',
        scroller: "main",

        start: "top bottom-=500",
        // markers: true
    }
});

projectTimeline.from("#projects", { opacity: 0, duration: 1 }, "-=1")
    .from(".cards", { y: 300, opacity: 0, duration: 1.5 }, "-=1")







let toolsTimeLine = gsap.timeline({
    scrollTrigger: {
        trigger: '#tools',
        scroller: "main",
        start: "center bottom-=250",
        // markers: true
    }
});

toolsTimeLine
    .from("#leftCol", { x: -300, opacity: 0, duration: 1.3 })
    .from("#rightCol", { y: 250, opacity: 0, duration: 1.2 }, "-=1")


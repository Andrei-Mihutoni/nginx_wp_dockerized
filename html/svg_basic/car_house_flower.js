document.addEventListener("DOMContentLoaded", start);

async function start() {
  let response = await fetch("car.svg");
  let mySvgData = await response.text();
  document.querySelector("#svgHolder").innerHTML = mySvgData;

  startManipulatingTheSvg();
}

function startManipulatingTheSvg() {
//   document.querySelector("#car").addEventListener("click", function () {
//     document.querySelector(".hood").style.fill = "#68cbf2";

//   });

  document.querySelector("#car").addEventListener("click", function () {
    document.querySelector("#car").style.animationName = "moveRight";
  });

}
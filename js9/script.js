const button = document.getElementById("button");

// button.addEventListener("click", function () {
//     document.body.style.backgroundColor = "#500aa6";
//   using setAttribute
//   document.body.setAttribute("class", "purple");

//   using toggle
//   document.body.classList.toggle("purple");
// });

const randomButton = document.createElement("button");
const contentButton = document.createTextNode("Click Button");

randomButton.appendChild(contentButton);
randomButton.style.marginLeft = "10px";
randomButton.setAttribute("type", "button");

button.after(randomButton);

randomButton.addEventListener("click", function () {
  const r = Math.round(Math.random() * 255 + 1);
  const g = Math.round(Math.random() * 255 + 1);
  const b = Math.round(Math.random() * 255 + 1);

  document.body.style.backgroundColor = `rgb(${r},${g},${b})`;
});

// //SLIDER COLOUR
const redSlider = document.querySelector("input[name=RedSlider]");
const greenSlider = document.querySelector("input[name=GreenSlider]");
const blueSlider = document.querySelector("input[name=BlueSlider]");

function updateBackgroundColor() {
  const r = redSlider.value;
  const g = greenSlider.value;
  const b = blueSlider.value;
  document.body.style.backgroundColor = `rgb(${r},${g},${b})`;
}

redSlider.addEventListener("input", updateBackgroundColor);
greenSlider.addEventListener("input", updateBackgroundColor);
blueSlider.addEventListener("input", updateBackgroundColor);

document.body.addEventListener("mousemove", function (event) {
  const xPos = Math.round((event.clientX / window.innerWidth) * 255);
  const YPos = Math.round((event.clientX / window.innerHeight) * 255);

  document.body.style.backgroundColor = `rgb(${xPos},${YPos},100)`;
});

const ColorDisplay = document.querySelector("h3");
let color1, color2, color3;

function generateur(){
color1 = Math.round(Math.random() * 255);
color2 = Math.round(Math.random() * 255);
color3 = Math.round(Math.random() * 255);

document.body.style.backgroundColor =
"rgb(" + color1 + "," + color2 + "," + color3 + ")";

ColorDisplay.textContent =
"rgb (" + color1 + ", " + color2 + ", " + color3 + ")";
}
generateur();
setInterval(generateur, 4500);
// Website created by romainsavigny.be
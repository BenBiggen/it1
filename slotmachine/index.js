const jackpot = ["7", "J", "!", "6"];
let screen1;
let screen2;
let screen3;
const button = document.getElementById("gambleButton");

button.addEventListener("click", () => {
  trekk();
});

function trekk() {
    screen1 = jackpot[Math.floor(Math.random() * jackpot.length)]
    screen2 = jackpot[Math.floor(Math.random() * jackpot.length)]
    screen3 = jackpot[Math.floor(Math.random() * jackpot.length)]
    document.getElementById("screen1").innerText=screen1
    document.getElementById("screen2").innerText=screen2
    document.getElementById("screen3").innerText=screen3
};


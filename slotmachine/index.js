const jackpot = ["🍋‍🟩", "🍉", "🍉", "🍉", "🍋",  "🍋", "🍋", "🍋", "🍋", "🍋", "🍒", "🍒", "🍒", "🍒", "🍒", "🍒", "🍒", "🍒", "🍒", "🍒", "🍇", "🍇", "🍇", "🍇", "🍍", "🍍", "🍌", "🍌", "🍌", "🍓", "🍓", "🍓", "🍓", "🍓", "🍓", "🍓"];
let screen1;
let screen2;
let screen3;
const button = document.getElementById("gambleButton");
let randomNumber;
let screenNumber;

button.addEventListener("click", () => {
  trekk();
});

function delay(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function trekk() {
  screen1 = ""
  screen2 = ""
  screen3 = ""
  document.getElementById("screen1").innerText=screen1
  document.getElementById("screen2").innerText=screen2
  document.getElementById("screen3").innerText=screen3

    for (let i = 0; i < 8; i++) {
      screen1 = jackpot[Math.floor(Math.random() * jackpot.length)]
      document.getElementById("screen1").innerText=screen1
      await delay(200);
    }

    for (let i = 0; i < 8; i++) {
      screen2 = jackpot[Math.floor(Math.random() * jackpot.length)];
      document.getElementById("screen2").innerText=screen2;
      await delay(200);
    }

      for (let i = 0; i < 8; i++) {
      screen3 = jackpot[Math.floor(Math.random() * jackpot.length)];
      document.getElementById("screen3").innerText=screen3;
      await delay(200);
    }

    if (screen1 === screen2 && screen2 === screen3) {
      console.log(`Du har vunnet ${screen1} jackpot`);
    }
}

    

    

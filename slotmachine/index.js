const jackpot = ["🍋‍🟩", "🍉", "🍋", "🍒", "🍒", "🍇", "🍍", "🍌"];
const limeJack = ["🍋‍🟩", "🍋‍🟩", "🍉", "🍋", "🍒", "🍒", "🍇", "🍍", "🍌"];
const melonJack = ["🍉", "🍉", "🍉"];
const lemonJack = ["🍋", "🍋", "🍋", "🍋"];
const cherryJack = ["🍒", "🍒", "🍒", "🍒"];
const grapeJack = ["🍉", "🍋", "🍋", "🍒", "🍒", "🍍", "🍌", "🍋", "🍇", "🍇", "🍇"];
const pineappleJack = ["🍍", "🍍", "🍍", "🍍", "🍍", "🍍", "🍉", "🍋", "🍒", "🍒", "🍇", "🍌", "🍋"];
const bananaJack = ["🍉", "🍋"];
const button = document.getElementById("gambleButton");
let trekkAntall = 0;
let limeJackpots = 0;
let melonJackpots = 0;
let lemonJackpots = 0;
let cherryJackpots = 0;
let grapeJackpots = 0;
let pineJackpots = 0;
let bananaJackpots = 0;

button.addEventListener("click", () => {
  trekk();
});

function delay(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

/*async function getNext() {
  return new Promise(async resolve => {
    let result;
    for (let i = 0; i < 8; i++) {
        result = array[Math.floor(Math.random() * array.length)];
        element.innerText=screen2;
        await delay(200);
    }
    resolve(result);
  })
} */

async function trekk() {
  let array;
  trekkAntall++;
  document.getElementById("trekkAntall").innerText="du har gamblet "+trekkAntall+" gang(er)";
  let screen1 = "";
  let screen2 = "";
  let screen3 = "";
  document.getElementById("screen1").innerText=screen1;
  document.getElementById("screen2").innerText=screen2;
  document.getElementById("screen3").innerText=screen3;

    for (let i = 0; i < 8; i++) {
      screen1 = jackpot[Math.floor(Math.random() * jackpot.length)]
      document.getElementById("screen1").innerText=screen1
      await delay(200);
    }

    if (screen1==="🍋‍🟩") {
      array = jackpot.concat(limeJack);
    }
    if (screen1==="🍉") {
      array = jackpot.concat(melonJack);
    }
    if (screen1==="🍋") {
      array = jackpot.concat(lemonJack);
    }
    if (screen1==="🍒") {
      array = jackpot.concat(cherryJack);
    }
    if (screen1==="🍇") {
      array = jackpot.concat(grapeJack);
    }
    if (screen1==="🍍") {
      array = jackpot.concat(pineappleJack);
    }
    if (screen1==="🍌") {
      array = jackpot.concat(bananaJack);
    }

      for (let i = 0; i < 8; i++) {
      screen2 = array[Math.floor(Math.random() * array.length)];
      document.getElementById("screen2").innerText=screen2;
      await delay(200);
    }

      for (let i = 0; i < 8; i++) {
      screen3 = array[Math.floor(Math.random() * array.length)];
      document.getElementById("screen3").innerText=screen3;
      await delay(200);
    }

    if (screen1 === screen2 && screen2 === screen3) {
      console.log(`Du har vunnet ${screen1} jackpot`);
      document.getElementById("jackpotPrint").innerText=(`Du har vunnet ${screen1} jackpot`);
    }
    
    if (screen1===screen2 && screen2===screen3) {
      if (screen1==="🍋‍🟩") {
        limeJackpots++;
        document.getElementById("limeJackpots").innerText="du har vunnet 🍋‍🟩 jackpot: " + limeJackpots + " gang(er)";
      }
      if (screen1==="🍉") {
        melonJackpots++;
        document.getElementById("melonJackpots").innerText="du har vunnet 🍉 jackpot: " + melonJackpots + " gang(er)";
      }
      if (screen1==="🍋") {
        lemonJackpots++;
        document.getElementById("lemonJackpots").innerText="du har vunnet 🍋 jackpot: " + lemonJackpots + " gang(er)";
      }
      if (screen1==="🍒") {
        cherryJackpots++;
        document.getElementById("cherryJackpots").innerText="du har vunnet 🍒 jackpot: " + cherryJackpots + " gang(er)";
      }
      if (screen1==="🍇") {
        grapeJackpots++;
        document.getElementById("grapeJackpots").innerText="du har vunnet 🍇 jackpot: " + grapeJackpots + " gang(er)";
      }
      if (screen1==="🍍") {
        pineJackpots++;
        document.getElementById("pineJackpots").innerText="du har vunnet 🍍 jackpot: " + pineJackpots + " gang(er)";
      }
      if (screen1==="🍌") {
        bananaJackpots++;
        document.getElementById("bananaJackpots").innerText="du har vunnet 🍌 jackpot: " + bananaJackpots + " gang(er)";
      }
    }
}
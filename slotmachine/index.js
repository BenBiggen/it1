const jackpot = ["🍋‍🟩", "🍉", "🍋", "🍒"];
let screen1;
let screen2;
let screen3;
const button = document.getElementById("gambleButton");
let randomNumber;
let screenNumber;

button.addEventListener("click", () => {
  trekk();
});

function random() {
    randomNumber = Math.random()*100
    if (randomNumber<=50) {
      screenNumber = "🍒"
    } else {
      if (randomNumber<=80) {
        screenNumber = "🍋"
      } else {
        if (randomNumber<=95) {
          screenNumber = "🍉"
        } else {
          screenNumber = "🍋‍🟩"
        }
      }
    }
};

function trekk() {
    //screen1 = jackpot[Math.floor(Math.random() * jackpot.length)]
    //screen2 = jackpot[Math.floor(Math.random() * jackpot.length)]
    //screen3 = jackpot[Math.floor(Math.random() * jackpot.length)]
    random()
    screen1 = screenNumber
    random()
    screen2 = screenNumber
    random()
    screen3 = screenNumber
    document.getElementById("screen1").innerText=screen1
    document.getElementById("screen2").innerText=screen2
    document.getElementById("screen3").innerText=screen3
    if (screen1 == "🍒" && screen2 == "🍒" &&screen3 == "🍒") {
      console.log("du har vunnet kirsebær jackpot")
    } else {
      if (screen1 == "🍋" && screen2 == "🍋" &&screen3 == "🍋") {
        console.log("du har vunnet sitron jackpot")
      } else {
        if (screen1 == "🍉" && screen2 == "🍉" &&screen3 == "🍉") {
          console.log("du har vunnet vannmelom jackpot")
        } else {
          if (screen1 == "🍋‍🟩" && screen2 == "🍋‍🟩" &&screen3 == "🍋‍🟩") {
            console.log("du har vunnet lime jackpot")
          } 
        }
      }
    }
};


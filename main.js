const field = document.querySelector(".game_field");

const carrotNum = 10;
const bugNum = 10;

function makeCarrot() {
  for (let i = 0; i < carrotNum; i++) {
    let random = Math.floor(Math.random() * carrotNum);
    console.log(random);
  }
}

makeCarrot();

console.dir(field);

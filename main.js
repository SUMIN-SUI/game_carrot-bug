const field = document.querySelector(".game_field");

const carrotNum = 10;
const bugNum = 10;

const X = 800;
const START_Y = 296;
const Y = 530;

function makeCarrot() {
  const carrots = document.createElement("ul");

  for (let i = 0; i < carrotNum; i++) {
    let randomX = Math.floor(Math.random() * X);
    let randomY = Math.floor(Math.random() * Y);

    if (randomY < START_Y) {
      randomY = randomY + (Y - START_Y);
    }
    // console.log(randomX, randomY);

    const carrot = document.createElement("li");
    carrot.innerHTML = `<img src="./img/carrot.png" alt="당근">`;
    carrot.getBoundingClientRect().top = randomY;
    carrot.getBoundingClientRect().left = randomX;
    carrots.appendChild(carrot);
  }

  field.appendChild(carrots);
}

makeCarrot();

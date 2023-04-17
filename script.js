const coin = document.querySelector(".coin img");
const flipBtn = document.getElementById("flip");
const resultOutput = document.getElementById("result");

function flipCoin() {
  const random = Math.random();
  const result = random < 0.5 ? "cara" : "cruz";
  coin.style.animationPlayState = "running";
  setTimeout(() => {
    coin.style.animationPlayState = "paused";
    resultOutput.value = result;
  }, 5000);
}

flipBtn.addEventListener("click", flipCoin);

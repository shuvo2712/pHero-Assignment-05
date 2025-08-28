// heart counter
const hearts = document.getElementsByClassName("card-heart");
for (const heart of hearts) {
  heart.addEventListener("click", function () {
    heart.classList.toggle("fa-regular");
    heart.classList.toggle("fa-solid");
    const heartCount = document.getElementById("heart-Count");
    const currentHeart = parseInt(heartCount.innerText);
    heartCount.innerText = currentHeart + 1;
  });
}

// call button
const callBtns = document.getElementsByClassName("call-Btn");
for (const call of callBtns) {
  call.addEventListener("click", function () {
    const callCard = call.closest(".card");
    const cardName = callCard.querySelector(".card-Name").innerText;
    const cardNumber = callCard.querySelector(".card-Number").innerText;
    const coinCount = document.getElementById("coin-Count");
    const currentCoin = parseInt(coinCount.innerText);
    // check coin
    if (currentCoin < 20) {
      alert("Not enough coins!");
      return;
    }
    //   if enough coins
    coinCount.innerText = currentCoin - 20;
    alert(`Calling ${cardName} : ${cardNumber}.......`);

    // add to history log
    const historyLog = document.getElementById("history-Log");
    const newLog = document.createElement("li");
      newLog.innerText = `Called ${cardName} : ${cardNumber}`;
      newLog.classList.add("bg-gray-200", "p-2", "rounded");
    historyLog.prepend(newLog);
  });
}

// clear history button
const clearHistoryBtn = document.getElementById("clear-History");
clearHistoryBtn.addEventListener("click", function () {
  const historyLog = document.getElementById("history-Log");
  historyLog.innerHTML = '';
});
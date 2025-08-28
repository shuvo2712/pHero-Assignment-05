// Heart Counter
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

// Call Button
const callBtns = document.getElementsByClassName("call-Btn");
for (const call of callBtns) {
  call.addEventListener("click", function () {
    //   get values
    const callCard = call.closest(".card");
    const cardName = callCard.querySelector(".card-Name").innerText;
    const cardNumber = callCard.querySelector(".card-Number").innerText;
    const coinCount = document.getElementById("coin-Count");
    const currentCoin = parseInt(coinCount.innerText);
    //   get date & time
    const callTime = new Date().toLocaleTimeString();
    const callDate = new Date().toLocaleDateString();

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

    newLog.classList.add(
      "flex",
      "justify-between",
      "items-center",
      "bg-gray-200",
      "p-2",
      "rounded-xl"
    );

    newLog.innerHTML = `
        <div>
          <p>${cardName}</p>
          <p>${cardNumber}</p>
        </div>
        <div>
          <p>${callTime}</p>
            <p>${callDate}</p>
        </div>
      `;
    historyLog.prepend(newLog);
  });
}

// Clear History button
const clearHistoryBtn = document.getElementById("clear-History");
const historyLog = document.getElementById("history-Log");
clearHistoryBtn.addEventListener("click", function () {
  historyLog.innerHTML = "";
});

// Copy Number Button
const copyBtn = document.getElementsByClassName("copy-Btn");
for (const copy of copyBtn) {
    copy.addEventListener("click", function () {
        const copyCard = copy.closest(".card");
        const cardNumber = copyCard.querySelector(".card-Number").innerText;
        navigator.clipboard.writeText(cardNumber);
        alert(`${cardNumber} copied to clipboard!`);
        // update copy count
        const copyCount = document.getElementById("copy-Count");
        const currentCopy = parseInt(copyCount.innerText);
        copyCount.innerText = currentCopy + 1;
        });
}
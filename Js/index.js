let balance = 100000;
const history = [];

const balanceElement = document.getElementById("balance");
const donateButtons = document.querySelectorAll(".donate-now-btn");
const donationButtons = document.getElementById("donate-btn");
const historyButtons = document.getElementById("history-btn");
const mainSection = document.getElementById("donate-cards");
const historySection = document.getElementById("history-section");
const historyList = document.getElementById("history-list");


donationButtons.addEventListener("click", () => {
  mainSection.classList.remove("hidden");
  historySection.classList.add("hidden");

  donationButtons.classList.add("btn-active btn-success");
});

historyButtons.addEventListener("click", () => {
  mainSection.classList.add("hidden");
  historySection.classList.remove("hidden");
 
  historyButtons.classList.add("btn-active btn-success");
  displayHistory();
});

donateButtons.forEach((button) => {
  button.addEventListener("click", (event) => {
    const card = event.target.closest("div.p-5");
    const inputField = card.querySelector('input[name="price"]');
    const amount = parseFloat(inputField.value);

    if (isNaN(amount) || amount <= 0) {
      alert("Enter valid amount");
      return;
    }
    if (amount > balance) {
      alert("Insufficient balance.");
      return;
    }

    balance -= amount;
    const donatedAmountElement = card.querySelector(".donated-amount");
    const currentDonatedAmount = parseFloat(donatedAmountElement.textContent);
    donatedAmountElement.textContent = currentDonatedAmount + amount;

    balanceElement.textContent = balance.toFixed(0);
    inputField.value = "";

    const modal = card.querySelector("dialog");
    modal.showModal();

    const donationName = card.querySelector("h1").textContent;

    addToHistory(amount, donationName);
  });
});

function addToHistory(amount, name) {
  const now = new Date();
  const dateTime = now.toLocaleString();
  const img = document.querySelector(".img").src;
  history.push({ dateTime, amount, name, img });
  displayHistory();
}

function displayHistory() {
  historyList.innerHTML = "";
  history.forEach((item) => {
    const historyItem = document.createElement("div");
    historyItem.classList.add("history-item");
    historyItem.innerHTML = `
               <div class="card bg-base-100 w-96 my-4 shadow-xl">
  <div class="card-body">
    <h2 class="card-title">${item.name}</h2>
    <p>${item.dateTime}</p>
    <p> ${item.amount} ৳ BDT</p>
  </div>
  
</div>
              `;
    historyList.appendChild(historyItem);
  });
}

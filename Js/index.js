

let balance = 100000;
const history = [];


const balanceElement = document.getElementById('balance');
const donateButtons = document.querySelectorAll('.donate-now-btn');
const donationButtons = document.getElementById('donate-btn');
const historyButtons = document.getElementById('history-btn');
const mainSection = document.getElementById('donate-cards');


const historySection = document.createElement('div');
historySection.classList.add('history-section', 'hidden');
mainSection.appendChild(historySection);


donationButtons.addEventListener('click', () => {
    mainSection.classList.remove('hidden');
    historySection.classList.add('hidden');
});

historyButtons.addEventListener('click', () => {
    mainSection.classList.add('hidden');
    historySection.classList.remove('hidden');
    displayHistory();
});



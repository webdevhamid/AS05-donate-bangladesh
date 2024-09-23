// Elements
const btnDonationTop = document.querySelector("#btn-donation-top");
const btnHistoryTop = document.querySelector("#btn-history-top");
const sectionCard = document.querySelector("#card-section");
const sectionHistory = document.querySelector("#history-section");

// Input Fields
const inputAmountNoakhali = document.querySelector("#input-amount-noakhali");
const inputAmountFeni = document.querySelector("#input-amount-feni");
const inputAmountQuota = document.querySelector("#input-amount-quota-movement");

// Donate buttons
const btnDonateNoakhali = document.querySelector("#btn-donate-noakhali");
const btnDonateFeni = document.querySelector("#btn-donate-feni");
const btnDonateQuotaMovement = document.querySelector("#btn-donate-quota-movement");

// Label
const labelMyAccountBalance = document.querySelector("#label-my-account-balance");
const labelNoakhali = document.querySelector("#label-noakhali-total-fund");
const labelFeni = document.querySelector("#label-feni-total-fund");
const labelQuotaMovement = document.querySelector("#label-quota-total-fund");

// container
const historyContainer = document.querySelector("#history-container");

// Current account balance
let myAccountBalance = 5500;

// Noakhali Flood campaign amount
let amountNoakhali = 0;
let amountFeni = 600;
let amountQuotaMovement = 2400;

// Handler function for Noakhali campaign
function handleNoakhaliCampaign() {
  const donateAmount = +inputAmountNoakhali.value;

  validateInput(donateAmount);
  clearInput(inputAmountNoakhali);

  amountNoakhali += donateAmount;
  myAccountBalance -= donateAmount;

  // Update fund amount
  updateLabel(labelNoakhali, amountNoakhali);

  // Update my account label
  updateLabel(labelMyAccountBalance, myAccountBalance);

  // Store the latest transaction to history
  // Store the latest transaction to history
  insertTransaction(donateAmount, "noakhali");
}

// Handler function for Feni campaign
function handleFeniCampaign() {
  const donateAmount = +inputAmountFeni.value;

  validateInput(donateAmount);
  clearInput(inputAmountFeni);

  amountFeni += donateAmount;
  myAccountBalance -= donateAmount;

  // Update fund amount
  //   updateLabel(labelFeni, amountFeni);
  labelFeni.textContent = amountFeni;

  // Update my account label
  //   updateLabel(labelMyAccountBalance, myAccountBalance);
  labelMyAccountBalance.textContent = myAccountBalance;

  // Store the latest transaction to history
  insertTransaction(donateAmount, "feni");
}

// Handler function for Quota-movement campaign
function handleQuotaCampaign() {
  const donateAmount = +inputAmountQuota.value;

  validateInput(donateAmount);
  clearInput(inputAmountQuota);

  amountQuotaMovement += donateAmount;
  myAccountBalance -= donateAmount;

  // Update Fund amount
  updateLabel(labelQuotaMovement, amountQuotaMovement);

  // Update my account label
  updateLabel(labelMyAccountBalance, myAccountBalance);

  // Store the latest transaction to the history section
  insertTransaction(donateAmount, "quota movement");
}

btnDonateFeni.addEventListener("click", handleFeniCampaign);
btnDonateQuotaMovement.addEventListener("click", handleQuotaCampaign);
btnDonateNoakhali.addEventListener("click", handleNoakhaliCampaign);

btnDonationTop.addEventListener("click", function () {
  toggleButton(btnDonationTop, btnHistoryTop, sectionCard, sectionHistory);
});

btnHistoryTop.addEventListener("click", function () {
  toggleButton(btnHistoryTop, btnDonationTop, sectionHistory, sectionCard);
});

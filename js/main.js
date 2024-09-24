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

// Labels
const labelMyAccountBalance = document.querySelector("#label-my-account-balance");
const labelNoakhali = document.querySelector("#label-noakhali-total-fund");
const labelFeni = document.querySelector("#label-feni-total-fund");
const labelQuotaMovement = document.querySelector("#label-quota-total-fund");
const labelMobileAccountBalance = document.querySelector("#mobile-my-account-balance");

// Modal element
const modalElement = document.querySelector("#open_model");

// container
const historyContainer = document.querySelector("#history-container");

// Current account balance
let myAccountBalance = 5500;

// Noakhali, Feni and quota-movement account balance
let amountNoakhali = 0;
let amountFeni = 600;
let amountQuotaMovement = 2400;

// Handler function for Noakhali campaign
function handleNoakhaliCampaign(e) {
  // Prevent the default reloading behavior
  e.preventDefault();

  const donateAmount = getInputValue(inputAmountNoakhali);

  clearInput(inputAmountNoakhali);

  // Return the function Immediately if the input is invalid
  if (!validateInput(donateAmount)) {
    return;
  }

  // Open the static modal
  modalElement.showModal();

  amountNoakhali += donateAmount;
  myAccountBalance -= donateAmount;

  // Update fund amount label
  updateLabel(labelNoakhali, amountNoakhali);

  // Update my account label
  updateLabel(labelMyAccountBalance, myAccountBalance);
  updateLabel(labelMobileAccountBalance, myAccountBalance);

  // Store the latest transaction to history container
  insertTransaction(donateAmount, "noakhali");
}

// Handler function for Feni campaign
function handleFeniCampaign(e) {
  // Prevent the default reloading behavior
  e.preventDefault();

  const donateAmount = getInputValue(inputAmountFeni);

  clearInput(inputAmountFeni);

  // Return the function Immediately if the input is invalid
  if (!validateInput(donateAmount)) {
    return;
  }

  // Open static modal
  modalElement.showModal();

  amountFeni += donateAmount;
  myAccountBalance -= donateAmount;

  // Update fund amount
  updateLabel(labelFeni, amountFeni);

  // Update my account label
  updateLabel(labelMyAccountBalance, myAccountBalance);
  updateLabel(labelMobileAccountBalance, myAccountBalance);

  // Store the latest transaction to history
  insertTransaction(donateAmount, "feni");
}

// Handler function for Quota-movement campaign
function handleQuotaCampaign(e) {
  // Prevent the default reloading behavior
  e.preventDefault();

  const donateAmount = getInputValue(inputAmountQuota);

  clearInput(inputAmountQuota);

  // Return the function Immediately if the input is invalid
  if (!validateInput(donateAmount)) {
    return;
  }

  // Open static modal
  modalElement.showModal();

  amountQuotaMovement += donateAmount;
  myAccountBalance -= donateAmount;

  // Update Fund amount
  updateLabel(labelQuotaMovement, amountQuotaMovement);

  // Update my account label
  updateLabel(labelMyAccountBalance, myAccountBalance);
  updateLabel(labelMobileAccountBalance, myAccountBalance);

  // Store the latest transaction to the history section
  insertTransaction(donateAmount, "quota movement");
}

btnDonateNoakhali.addEventListener("click", handleNoakhaliCampaign);
btnDonateFeni.addEventListener("click", handleFeniCampaign);
btnDonateQuotaMovement.addEventListener("click", handleQuotaCampaign);

btnDonationTop.addEventListener("click", function () {
  // Toggle donation and history buttons and sections
  toggleButton(btnDonationTop, btnHistoryTop, sectionCard, sectionHistory);
});

btnHistoryTop.addEventListener("click", function () {
  // Toggle donation and history buttons and sections
  toggleButton(btnHistoryTop, btnDonationTop, sectionHistory, sectionCard);
});

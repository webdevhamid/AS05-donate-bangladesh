// Navbar top action button elements
const btnDonationTop = document.querySelector("#btn-donation-top");
const btnHistoryTop = document.querySelector("#btn-history-top");

// Section elements
const sectionCard = document.querySelector("#card-section");
const sectionHistory = document.querySelector("#history-section");

// All Navbar top action button elements
const navbarActionButtons = document.querySelectorAll(".btn-action-top");

// Input elements
const inputAmountNoakhali = document.querySelector("#input-amount-noakhali");
const inputAmountFeni = document.querySelector("#input-amount-feni");
const inputAmountQuota = document.querySelector("#input-amount-quota-movement");

// All Donate button elements
const allDonateButtons = document.querySelectorAll(".btn-donate");

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

// Noakhali, Feni and quota-movement initial account balance
let amountNoakhali = 0;
let amountFeni = 600;
let amountQuotaMovement = 2400;

// Handler function for all campaign
function handleCampaign(e) {
  // Prevent the default reloading behavior
  e.preventDefault();

  const currentBtnId = e.target.id;
  const currentInputElement = e.target.previousElementSibling;

  // Storing the donation amount
  const donateAmount = getInputValue(currentInputElement);

  // Clear the current input value
  clearInput(currentInputElement);

  // Return the function Immediately if the input is invalid
  if (!validateInput(donateAmount)) {
    return;
  }

  // Open the static modal
  modalElement.showModal();

  // Store the new total amount of the current campaign
  const campaignTotalAmount = updateAmount(currentBtnId, donateAmount);

  // Update all the label of the current campaign
  updateLabel(currentBtnId, campaignTotalAmount);

  // Store the latest transaction to the history container
  insertTransaction(donateAmount, currentBtnId);
}

// Event listeners for all donation buttons
allDonateButtons.forEach(function (button) {
  // handleCampaign event handler for each donation button
  button.addEventListener("click", handleCampaign);
});

// Event listener for all navbar action buttons
navbarActionButtons.forEach(function (button) {
  // ToggleButton Event handler for each navbar top action button
  button.addEventListener("click", toggleButton);
});

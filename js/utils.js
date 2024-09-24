// Reusable function for toggling navbar top action buttons and their sections
const toggleButton = function () {
  btnDonationTop.classList.toggle("!bg-primary-color");
  btnHistoryTop.classList.toggle("!bg-primary-color");
  sectionCard.classList.toggle("hidden");
  sectionHistory.classList.toggle("hidden");
};
// Reusable function for validating the input value
const validateInput = function (inputAmount) {
  if (
    !inputAmount ||
    typeof inputAmount !== "number" ||
    inputAmount > myAccountBalance ||
    inputAmount <= 0
  ) {
    alert("Invalid Donation Amount!");
    return false;
  } else {
    return true;
  }
};

// Reusable function for getting the input value
const getInputValue = function (input) {
  return +input.value;
};

// Reusable function for clearing the input field
const clearInput = function (inputElement) {
  inputElement.value = "";
};

// Reusable function for updating all the amount
const updateAmount = function (currentBtnId, donatedAmount) {
  // Deduct the donated amount from my account balance
  myAccountBalance -= donatedAmount;

  if (currentBtnId === "btn-donate-noakhali") {
    // Update the current amount of the Noakhali campaign
    amountNoakhali += donatedAmount;
    return amountNoakhali;
  } else if (currentBtnId === "btn-donate-feni") {
    // Update the current amount of the Feni campaign
    amountFeni += donatedAmount;
    return amountFeni;
  } else {
    // Update the current amount of the Quota-movement campaign
    amountQuotaMovement += donatedAmount;
    return amountQuotaMovement;
  }
};

// Reusable function for updating all the labels
const updateLabel = function (currentBtnId, newTotalAmount) {
  const currencyString = "BDT";
  // Update the label of my account balance
  labelMyAccountBalance.textContent = `${myAccountBalance} ${currencyString}`;
  // Update the label of my account balance on mobile navbar
  labelMobileAccountBalance.textContent = `${myAccountBalance} ${currencyString}`;

  if (currentBtnId === "btn-donate-noakhali") {
    // Update the Noakhali fund label
    labelNoakhali.textContent = `${newTotalAmount} ${currencyString}`;
  } else if (currentBtnId === "btn-donate-feni") {
    // Update the Feni Fund label
    labelFeni.textContent = `${newTotalAmount} ${currencyString}`;
  } else {
    // Update the Quota movement label
    labelQuotaMovement.textContent = `${newTotalAmount} ${currencyString}`;
  }
};

// Reusable function for inserting new history item to the history section
const insertTransaction = function (inputAmount, currentBtnId) {
  const html = `
    <div class="flex flex-col p-8 border rounded-xl">
        <h1 class="text-black font-bold lg:text-xl text-lg">
        ${inputAmount} Taka is Donated for ${
    currentBtnId === "btn-donate-noakhali"
      ? "Flood in Noakhali"
      : currentBtnId === "btn-donate-feni"
      ? "Flood Relief in Feni"
      : "Aid for injured in the quota movement"
  }, Bangladesh
        </h1>
        <p class="text-sm lg:text-lg font-light mt-3">
            Date : ${new Date()}
        </p>
     </div>
    `;

  historyContainer.insertAdjacentHTML("afterbegin", html);
};

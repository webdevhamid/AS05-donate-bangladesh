// Reusable function for toggling buttons
// const toggleButton = function (activeEl, notActiveEl, activeSection, notActiveSection) {
//   activeEl.classList.add("bg-primary-color");
//   activeEl.classList.remove("bg-transparent");

//   activeSection.classList.remove("hidden");
//   notActiveSection.classList.add("hidden");

//   notActiveEl.classList.remove("bg-primary-color");
//   notActiveEl.classList.add("bg-transparent");
// };

const toggleButton = function (buttonId) {
  if (buttonId === "btn-donation-top") {
    btnDonationTop.classList.toggle("!bg-primary-color");
    btnHistoryTop.classList.toggle("!bg-primary-color");
    sectionCard.classList.remove("hidden");
    sectionHistory.classList.add("hidden");
  } else if (buttonId === "btn-history-top") {
    btnHistoryTop.classList.toggle("!bg-primary-color");
    btnDonationTop.classList.toggle("!bg-primary-color");
    sectionCard.classList.add("hidden");
    sectionHistory.classList.remove("hidden");
  }
};

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

const getInputValue = function (input) {
  return +input.value;
};

const clearInput = function (inputElement) {
  inputElement.value = "";
};

const updateAmount = function (currentBtnId, donatedAmount) {
  // Deduct the donated amount from my account balance
  myAccountBalance -= donatedAmount;

  if (currentBtnId === "btn-donate-noakhali") {
    // Update the current fund amount of the Noakhali campaign
    amountNoakhali += donatedAmount;
    return amountNoakhali;
  } else if (currentBtnId === "btn-donate-feni") {
    // Update the current fund amount of the Feni campaign
    amountFeni += donatedAmount;
    return amountFeni;
  } else {
    // Update the current fund amount of the Quota-movement campaign
    amountQuotaMovement += donatedAmount;
    return amountQuotaMovement;
  }
};

const updateLabel = function (currentBtnId, newTotalAmount) {
  const currencyString = "BDT";
  labelMyAccountBalance.textContent = `${myAccountBalance} ${currencyString}`;
  labelMobileAccountBalance.textContent = `${myAccountBalance} ${currencyString}`;

  if (currentBtnId === "btn-donate-noakhali") {
    // Update the Noakhali fund label
    labelNoakhali.textContent = `${newTotalAmount} ${currencyString}`;
  } else if (currentBtnId === "btn-donate-feni") {
    // Update the Feni Fund label
    labelFeni.textContent = `${newTotalAmount} ${currencyString}`;
  } else {
    labelQuotaMovement.textContent = `${newTotalAmount} ${currencyString}`;
  }
};

const insertTransaction = function (inputAmount, currentBtnId) {
  const html = `
    <div class="flex flex-col p-8 border rounded-xl">
        <h1 class="text-black font-bold lg:text-xl text-lg">
        ${inputAmount} Taka is Donated for ${
    currentBtnId === "btn-donate-noakhali"
      ? "Famine-2024 in Feni"
      : currentBtnId === "btn-donate-feni"
      ? "Flood Relief in Noakhali"
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

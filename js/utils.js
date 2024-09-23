// Reusable function for toggling buttons
const toggleButton = function (activeEl, notActiveEl, activeSection, notActiveSection) {
  activeEl.classList.add("bg-primary-color");
  activeEl.classList.remove("bg-transparent");

  activeSection.classList.remove("hidden");
  notActiveSection.classList.add("hidden");

  notActiveEl.classList.remove("bg-primary-color");
  notActiveEl.classList.add("bg-transparent");
};

const validateInput = function (inputAmount) {
  if (
    !inputAmount ||
    typeof inputAmount !== "number" ||
    inputAmount > myAccountBalance ||
    inputAmount <= 0
  ) {
    alert("Invalid Input!");
    return false;
  } else {
    return true;
  }
};

const clearInput = function (inputElement) {
  inputElement.value = "";
};

const updateLabel = function (labelEl, totalAmount) {
  labelEl.textContent = `${totalAmount} BDT`;
};

const insertTransaction = function (inputAmount, donateType) {
  const html = `
    <div class="flex flex-col p-8 border rounded-xl">
        <h1 class="text-black font-bold lg:text-xl text-lg">
        ${inputAmount} Taka is Donated for ${
    donateType === "noakhali"
      ? "Famine-2024 in Feni"
      : donateType === "feni"
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

const getInputValue = function (input) {
  return +input.value;
};

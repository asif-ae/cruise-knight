// Increase value count
function controlIncrement(increaseButtonId, increaseInputId) {
  document.getElementById(increaseButtonId).addEventListener('click', function() {
    const seatCount = document.getElementById(increaseInputId);
    const seatCountInt = parseInt(seatCount.value);
    const seatNewCount = seatCountInt + 1;
    seatCount.value = seatNewCount;

    // You will find the calculation below the decrease value count section
    subtotalPriceCalculator();
    taxPriceCalculator();
    grandtotalCalculator();
    bookNowButtonControl();
  });
}
controlIncrement('first-class-seat-increase', 'first-class-seat-count');
controlIncrement('economy-seat-increase', 'economy-seat-count');

// Decrease value count
function controlDecrement(decreaseButtonId, decreaseInputId) {
  document.getElementById(decreaseButtonId).addEventListener('click', function() {
    const seatCount = document.getElementById(decreaseInputId);
    const seatCountInt = parseInt(seatCount.value);
    if (seatCountInt > 0) {
      const seatNewCount = seatCountInt - 1;
      seatCount.value = seatNewCount;
    }

    // You will find the calculation below the decrease value count section
    subtotalPriceCalculator();
    taxPriceCalculator();
    grandtotalCalculator();
    bookNowButtonControl();
  });
}
controlDecrement('first-class-seat-decrease', 'first-class-seat-count');
controlDecrement('economy-seat-decrease', 'economy-seat-count');

// Subtotal Price Calculator
function subtotalPriceCalculator() {
  // Update First Class Price
  const firstClassSeatTotalPrice = getFirstClassSeatPriceFunction('first-class-unit-price');

  // Update Economy Price
  const economySeatTotalPrice = getEconomySeatPriceFunction('economy-unit-price');

  // Get Subtotal Price and Calculate
  const getSubtotalPrice = document.getElementById('subtotal-price');
  const calculateSubtotalPrice = firstClassSeatTotalPrice + economySeatTotalPrice;
  getSubtotalPrice.innerText = '$' + calculateSubtotalPrice;
  return calculateSubtotalPrice;
}

// Tax/VAT Calculator
function taxPriceCalculator() {
  // Calculate Tax Price
  const getVatValue = Math.round(subtotalPriceCalculator() * 0.1);
  document.getElementById('vat-value').innerText = getVatValue;
  return getVatValue;
}

// Grandtotal Calculator
function grandtotalCalculator() {
  // Calculate Grandtotal Price
  const getGrandtotalPrice = subtotalPriceCalculator() + taxPriceCalculator();
  document.getElementById('grandtotal-value').innerText = getGrandtotalPrice;
  return getGrandtotalPrice;
}

function bookNowButtonControl() {
  const grandtotal = grandtotalCalculator();
  if (grandtotal == 0) {
    document.getElementById('submit-button').classList.add("disabled");
  } else {
    document.getElementById('submit-button').classList.remove("disabled");
  }
}

// First Class Price Calculate
function getFirstClassSeatPriceFunction(getFirstClassUnitPrice) {
  const getFirstClassPrice = document.getElementById(getFirstClassUnitPrice);
  const firstClassUnitPrice = parseInt(getFirstClassPrice.innerHTML);
  const getFirstClassSeatValue = document.getElementById('first-class-seat-count');
  const firstClassSeatValue = parseInt(getFirstClassSeatValue.value);
  const firstClassSeatPrice = firstClassSeatValue * firstClassUnitPrice;
  return firstClassSeatPrice;
}

// Economy Seat Price Calculate
function getEconomySeatPriceFunction(getEconomyUnitPrice) {
  const getEconomyPrice = document.getElementById(getEconomyUnitPrice);
  const economyUnitPrice = parseInt(getEconomyPrice.innerHTML);
  const getEconomySeatValue = document.getElementById('economy-seat-count');
  const economySeatValue = parseInt(getEconomySeatValue.value);
  const economySeatPrice = economySeatValue * economyUnitPrice;
  return economySeatPrice;
}

// For Bonus
const submitBtn = document.getElementById('submit-button');
submitBtn.addEventListener('click', function confirmOutputFunction() {
  // First Class Ticket Quantity Update
  const firstQuantity = document.getElementById('first-class-seat-count').value;
  const firstClassTicketQuantity = document.getElementById('first-class-ticket-quantity');
  firstClassTicketQuantity.innerText = firstQuantity;

  // Economy Ticket Quantity Update
  const economyQuantity = document.getElementById('economy-seat-count').value;
  const economyTicketQuantity = document.getElementById('economy-ticket-quantity');
  economyTicketQuantity.innerText = economyQuantity;

  // Subtotal Price Update
  const subtotalPriceOutput = document.getElementById('subtotal-price-is');
  const subtotal = subtotalPriceCalculator();
  subtotalPriceOutput.innerText = subtotal;

  // Total VAT Update
  const totalVatOutput = document.getElementById('total-vat-is');
  const tax = taxPriceCalculator();
  totalVatOutput.innerText = tax;

  // Grandtotal Update
  const grandtotalOutput = document.getElementById('grandtotal-is');
  const grandtotal = grandtotalCalculator();
  grandtotalOutput.innerText = grandtotal;
});
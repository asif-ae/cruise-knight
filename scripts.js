// Increase value count
function controlIncrement(increaseButtonId, increaseInputId) {
  document.getElementById(increaseButtonId).addEventListener('click', function() {
    const seatCount = document.getElementById(increaseInputId);
    const seatCountInt = parseInt(seatCount.value);
    const seatNewCount = seatCountInt + 1;
    seatCount.value = seatNewCount;

    // You will find the calculation below the decrease value count section
    subtotalCalculator();
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
    subtotalCalculator();
  });
}
controlDecrement('first-class-seat-decrease', 'first-class-seat-count');
controlDecrement('economy-seat-decrease', 'economy-seat-count');

// The Subtotal Value Calculator or the function subtotalCalculator()
function subtotalCalculator() {
  // Update First Class Price
  const firstClassSeatTotalPrice = getFirstClassSeatPriceFunction('first-class-unit-price');

  // Update Economy Price
  const economySeatTotalPrice = getEconomySeatPriceFunction('economy-unit-price');

  // Get Subtotal Price and Calculate
  const getSubtotalPrice = document.getElementById('subtotal-price');
  const calculateSubtotalPrice = firstClassSeatTotalPrice + economySeatTotalPrice;
  getSubtotalPrice.innerText = '$' + calculateSubtotalPrice;
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


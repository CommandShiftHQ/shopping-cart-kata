const orange = {
  barcode: 789,
  price: 7,
};
const pineapple = {
  barcode: 5367,
  price: 80,
};
const kiwi = {
  barcode: 765,
  price: 25,
};
const apple = {
  barcode: 123,
  price: 5,
};

const banana = {
  barcode: 456,
  price: 6,
};

const items = [apple, banana, orange, pineapple, kiwi];
const basket = [];

function scanItem(barcodeScannedByUser) {
  return items.find(product => {
      return product.barcode === barcodeScannedByUser;
  });
}

function addItemToBasket(itemToAddToTheBasket) {
    basket.push(itemToAddToTheBasket);
}

function getBasketTotal() {
  const finalTotal = basket.reduce((total, item) => {
    return item.price + total;
  }, 0);

  // accumulator = total
  // RUN 1:
  // total = 0, item = KIWI{}
  // item.price = 25, total = 0
  // return item.price + total
  // accumulator = 25 + 0  (whenever you return from reduce fucntion)
  // RUN 2:
  // total = 25, item = APPLE{}
  // item.price = 5, total = 25
  // accumulator = 5 + 25
  // NO OTHER RUNS
  // simply returns the final value of the accumulator

  return finalTotal;
}

function removeItemFromBasket(barcodeOfItemToRemove) {
    const indexOfTheItemYouWantToDelete = basket.findIndex(item => {
        return item.barcode === barcodeOfItemToRemove;
    });
    return basket.splice(indexOfTheItemYouWantToDelete, 1);
}

module.exports = {
  scanItem,
  addItemToBasket,
  basket,
  getBasketTotal,
  removeItemFromBasket
};

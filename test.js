const {
  scanItem,
  addItemToBasket,
  getBasketTotal,
  removeItemFromBasket,
  basket,
} = require("./cart");

const apple = {
  barcode: 123,
  price: 5,
};

const kiwi = {
  barcode: 765,
  price: 25,
};

describe("Shopping Cart", () => {
  it("should scan an item by barcode and return its details", () => {
    const APPLE_BARCODE = 123; // APPLE BARCODE
    expect(scanItem(APPLE_BARCODE)).toEqual(apple);

    const KIWI_BARCODE = 765;
    expect(scanItem(KIWI_BARCODE)).toEqual(kiwi);

    const UNKNOWN_BARCODE = 126536871298471287489;
    expect(scanItem(UNKNOWN_BARCODE)).toEqual(undefined);
  });

  it("should add an item to user's basket", () => {
    addItemToBasket(kiwi);
    expect(basket).toContain(kiwi);
  });

  it("should display total price of basket items", () => {
    // kiwi 25
    addItemToBasket(apple); // 5
    expect(getBasketTotal()).toBe(30); // 30
  });

  it("should remove an item from the basket", () => {
    // kiwi, apple
    const KIWI_BARCODE = 765;
    const APPLE_BARCODE = 123;
    removeItemFromBasket(KIWI_BARCODE);
    expect(basket).toContain(apple); 
    expect(basket).not.toContain(kiwi); 
    removeItemFromBasket(APPLE_BARCODE);
    expect(basket).toEqual([]);
  });
});

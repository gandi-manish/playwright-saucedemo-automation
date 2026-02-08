class InventoryPage {
  constructor(page) {
    this.page = page;

    this.addToCartButton = '#add-to-cart-sauce-labs-backpack';
    this.cartIcon = '.shopping_cart_link';
    this.cartBadge = '.shopping_cart_badge';
  }

  async addBackpackToCart() {
    await this.page.click(this.addToCartButton);
  }

  async goToCart() {
    await this.page.click(this.cartIcon);
  }

  async getCartCount() {
    return this.page.textContent(this.cartBadge);
  }
}

module.exports = { InventoryPage };

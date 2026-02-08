class CheckoutPage {
  constructor(page) {
    this.page = page;

    // Checkout step 1
    this.checkoutButton = '#checkout';
    this.firstName = '#first-name';
    this.lastName = '#last-name';
    this.postalCode = '#postal-code';
    this.continueButton = '#continue';

    // Checkout step 2
    this.finishButton = '#finish';
    this.successMessage = '.complete-header';
  }

  async startCheckout() {
    await this.page.click(this.checkoutButton);
  }

  async fillUserInfo(first, last, zip) {
    await this.page.fill(this.firstName, first);
    await this.page.fill(this.lastName, last);
    await this.page.fill(this.postalCode, zip);
    await this.page.click(this.continueButton);
  }

  async finishOrder() {
    await this.page.click(this.finishButton);
  }

  async getSuccessMessage() {
    return this.page.textContent(this.successMessage);
  }
}

module.exports = { CheckoutPage };

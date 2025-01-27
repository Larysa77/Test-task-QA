describe('Valid Login Test', () => {
  beforeEach(async () => {
    await browser.url('https://www.saucedemo.com'); 
  });

  it('should log in with valid credentials and redirect to the inventory page', async () => {
    const loginField = await $('#user-name');
    await loginField.setValue('standard_user');
    expect(await loginField.getValue()).toBe('standard_user');

    const passwordField = await $('#password');
    await passwordField.setValue('secret_sauce');
    expect(await passwordField.getAttribute('type')).toBe('password');

    const loginButton = await $('#login-button');
    await loginButton.click();

    expect(await browser.getUrl()).toContain('/inventory.html');

    const productsTitle = await $('.title');
    expect(await productsTitle.getText()).toBe('Products');

    const cartIcon = await $('.shopping_cart_link');
    expect(await cartIcon.isDisplayed()).toBe(true);
  });
});

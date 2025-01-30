const LoginPage = require('../pages/login.page');

describe('Login with invalid login', () => {
    it('should display an error message when login is invalid', async () => {
        await LoginPage.open(); 

        
        await LoginPage.login('standarD_user', 'secret_sauce');

        
        await expect(LoginPage.errorMessage).toBeDisplayed();
        await expect(await LoginPage.getErrorMessage()).toContain(
            'Epic sadface: Username and password do not match any user in this service'
        );

        
        const loginInputClass = await LoginPage.usernameInput.getAttribute('class');
        const passwordInputClass = await LoginPage.passwordInput.getAttribute('class');
        expect(loginInputClass).toContain('input_error');
        expect(passwordInputClass).toContain('input_error');
    });
});

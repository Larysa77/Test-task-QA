const LoginPage = require('../pages/login.page');

describe('Login with invalid password', () => {
    it('should display an error message when password is invalid', async () => {
        await LoginPage.open(); 
        
        await LoginPage.login('standard_user', 'invalid_password');

        
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

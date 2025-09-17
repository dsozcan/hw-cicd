class login{

    emailField = '#user_email';
    passwordField = '#user_password';
    loginButton = '.eckniwg2';

    // url visit method
    navigateUrl () {
        cy.fixture("user").then((data) => {
            cy.visit(data.url);
        })
    }

    // fill in email and password fields and click log in button
    userLogIn (email, password) {
        cy.get(this.emailField).type(email);
        cy.get(this.passwordField).type(password);
        cy.get(this.loginButton).click();
        cy.wait(5000)
    }

}

export default new login();
class HomePage {

menuButton = '#open-navigation-menu-mobile';
logOutButton = ':nth-child(12) > .next-bve2vl';

// find and click log out button
userLogOut() {
    cy.get(this.menuButton).click()
    cy.scrollTo('bottom')
    cy.get(this.logOutButton).click()
}
}

export default new HomePage();
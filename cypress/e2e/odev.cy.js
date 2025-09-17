describe('ilk odev', function() {

it('TC01 login ilk deneme', function(){

    cy.visit('https://www.edu.goit.global/account/login')
    cy.login("user888@gmail.com", "1234567890")
    cy.get(':nth-child(3) > .e1dapi390').should('exist')
    cy.get('#open-navigation-menu-mobile').click()
    cy.scrollTo('bottom')
    cy.get(':nth-child(12) > .next-bve2vl').click()
    cy.get('.next-10stgr7 > .next-c1vj7d').should('exist')

})

it('TC02 login ikinci deneme', function(){

    cy.visit('https://www.edu.goit.global/account/login')
    cy.login("testowyqa@qa.team", "QA!automation-1")
    cy.get(':nth-child(3) > .e1dapi390').should('exist')
    cy.get('#open-navigation-menu-mobile').click()
    cy.scrollTo('bottom')
    cy.get(':nth-child(8) > .next-bve2vl').click()
    cy.get('.next-10stgr7 > .next-c1vj7d').should('exist')

})

})
describe ('Pizza App', () =>{
    describe('Inputs and submit button', () => {
    it('can navigate to http://localhost:3000', () => {
    cy.visit('http://localhost:3000')
    cy.url().should('include', 'localhost')
    })

    it('working navlink', () => {
        cy.get('nav a')
          .should('have.attr', 'href').and('include', '/')
          .then((href) => {
            cy.visit('http://localhost:3000')
          })
     })

    // it('the submit button is enabled', () => {
    //     cy.get('#submitBtn').should('be.disabled')

})
})
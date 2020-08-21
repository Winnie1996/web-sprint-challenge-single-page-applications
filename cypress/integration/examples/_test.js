describe ('Pizza App', () =>{
    describe('Inputs and submit button', () => {
    it('can navigate to http://localhost:3000', () => {
    cy.visit('http://localhost:3000')
    cy.url().should('include', 'localhost')
    })

    // it('can type something in the "text" input ', () =>  {
    //     cy.get('"name"')
    //     .type('Nice')
    //     .should('have.value', 'Have Fun')
    })

    // it('the submit button is enabled', () => {
    //     cy.get('#submitBtn').should('be.disabled')

})

  describe('URL Test', () => {
it('Testing News-Letter', () => {
    cy
    .visit('localhost:4000')
    .contains('Sign me up!')
    .get('input[name="fName"]').type('Don')
    .get('input[name="lName"]').type('Tech')
    .get('input[ email="email"]').type('donnytech20@gmail.com')
    cy.wait(1000)
    .get('h1').contains('Sun Shine Letter 🌞!') 
    .get('a').contains('Success Page').click()
    cy.wait(1000)
    .get('a').contains('Back to Home Page').click()

})
}); 




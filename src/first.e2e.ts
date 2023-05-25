describe('My First Test', () => {
  it('Search cypress on google and enter on the web site', () => {
    cy.visit('https://google.com.br')

    cy.get('textarea[aria-label="Pesquisar"]').type('cypress{enter}')

    cy.contains('Cypress: JavaScript Component Testing and E2E Testing').click()
  })
})

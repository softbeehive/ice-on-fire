describe('House Info Page', () => {
  it('Find ', () => {
    // Visit the webpage
    cy.visit('/')
    // Fill in search input
    cy.get('input[data-test="search-houses-input"]').type('stark')
    // Click "Ask Elders" button
    cy.get('[data-test="search-houses-submit"]').click()
    // Check that the page contains the house of Stark
    cy.contains('House Stark of Winterfell').click()
    // And their motto
    cy.contains('Winter is Coming')
  })

  it('Go to Starks page directly via URL', () => {
    cy.visit('/')
    cy.get('input[data-test="search-houses-input"]').type('stark')
    cy.get('[data-test="search-houses-submit"]').click()
    cy.contains('House Stark of Winterfell').click()

    cy.url().then((url) => {
      cy.visit(url)
      cy.contains('House Stark of Winterfell')
      cy.contains('Winter is coming')
    })
  })
})

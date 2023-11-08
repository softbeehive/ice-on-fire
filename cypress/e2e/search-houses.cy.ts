describe('Search houses', () => {
  it('Find the house of Stark via click', () => {
    // Visit the webpage
    cy.visit('/')
    // Fill in search input
    cy.get('input[data-test="search-houses-input"]').type('stark')
    // Click "Ask Elders" button
    cy.get('[data-test="search-houses-submit"]').click()
    // Check that the page contains the house of Stark and their relatives
    cy.contains('House Stark of Winterfell')
    // And Karstarks
    cy.contains('House Karstark of Karhold')
  })

  it('Find the house of Baratheon via submit', () => {
    // Visit the webpage
    cy.visit('/')
    // Fill in the form
    cy.get('input[data-test="search-houses-input"]').type('BARA')
    // Submit the form
    cy.get('[data-test="search-houses-form"]').submit()
    // Check Baratheons
    cy.contains("House Baratheon of King's Landing")
  })
})

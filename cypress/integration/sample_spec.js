describe('My first test', () => {
  it('Does not do much', () => {
    expect(true).to.equal(true)
  })
  it('Visit home', () => {
    cy.visit('http://localhost:3000')
  })
})

describe('header: Header component', () => {
  beforeEach(() => cy.visit('/iframe.html?id=header--primary'));

  it('should render the component', () => {
    cy.get('h1').should('contain', 'Tailwind css!');
  });
});

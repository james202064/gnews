import { getGreeting, getMenu } from '../support/app.po';

describe('web', () => {
  beforeEach(() => cy.visit('/'));

  it('should display welcome message', () => {
    // Custom command example, see `../support/commands.ts` file
    cy.log('Logging in to Google');

    // Function helper example, see `../support/app.po.ts` file
    getGreeting().contains('Welcome web');
  });

  it('should display menu', () => {
      getMenu().contains(`You're up and running`)
      getMenu().contains(`Learning materials`)
      getMenu().contains(`Enable faster CI & better DX`)
  });
});

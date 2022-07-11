
// You need to write front-end integration tests to ensure the Calculator model and browser UI are working to meet the user requirements. The framework provided to do this is Cypress.. There is one sample test written in /cypress/integration/calculator.spec.js and you should continue writing your tests in this file.

// You should write tests to ensure the following requirements are met:

describe("Calculator", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000");
  })

  // Practice test
  it('should have working number buttons', () => {
    cy.get('#number2').click();
    cy.get('.display').should('contain', '2')
  })


  // Do the number buttons update the display of the running total?
  it('should let number buttons update the running total display', () => {
    cy.get('#number1, #number2').click({ multiple : true })
    cy.get('.display').should('contain', '12')
  })

  // Do the arithmetical operations update the display with the result of the operation?
  it('should update the display with results the addition operation', () => {
    cy.get('#number1').click()
    cy.get('#operator_add').click()
    cy.get('#number2').click()
    cy.get('#operator-equals').click()
    cy.get('.display').should('contain', '3')
  })

  it('should update the display with results the subtract operation', () => {
    cy.get('#number2').click()
    cy.get('#operator_subtract').click()
    cy.get('#number1').click()
    cy.get('#operator-equals').click()
    cy.get('.display').should('contain', '1')
  })

  it('should update the display with results the multiply operation', () => {
    cy.get('#number2').click()
    cy.get('#operator_multiply').click()
    cy.get('#number2').click()
    cy.get('#operator-equals').click()
    cy.get('.display').should('contain', '4')
  })

  it('should update the display with results the division operation', () => {
    cy.get('#number4').click()
    cy.get('#operator_multiply').click()
    cy.get('#number2').click()
    cy.get('#operator-equals').click()
    cy.get('.display').should('contain', '2')
  })

  // Can multiple operations be chained together?
  it('should chain multiple operators together', () => {
    cy.get('#number2').click()
    cy.get('#operator-multiply').click()
    cy.get('#number2').click()
    cy.get('#operator_add').click()
    cy.get('#number1').click()
    cy.get('#operator-equals').click()
    cy.get('.display').should('contain', '5')
  })

  // Is the output as expected for a range of numbers (for example, positive, negative, decimals and very large numbers)?
  it('should display the expected positive number output', () => {
    cy.get('#number1').click()
    cy.get('#operator_add').click()
    cy.get('#number2').click()
    cy.get('#operator-equals').click()
    cy.get('.display').should('contain', '3')
    cy.get('.clear')
  })

  it('should display the expected negative number output', () => {
    cy.get('#number1').click()
    cy.get('#operator-subtract').click()
    cy.get('#number4').click()
    cy.get('#operator-equals').click()
    cy.get('.display').should('contain', '-3')
  })

  it('should divide two numbers and display the expected number output', () => {
    cy.get('#number8').click()
    cy.get('#operator-divide').click()
    cy.get('#number2').click()
    cy.get('#operator-equals').click()
    cy.get('.display').should('contain', '4')
  })

  it('should display the expected decimal number output', () => {
    cy.get('#number9').click()
    cy.get('#operator-divide').click()
    cy.get('#number4').click()
    cy.get('#operator-equals').click()
    cy.get('.display').should('contain', '2.25')
    })

  it('should display the expected  large number output', () => {
    cy.get('#number9').click()
    cy.get('#number9').click()
    cy.get('#number9').click()
    cy.get('#number9').click()
    cy.get('#number9').click()
    cy.get('#number9').click()
    cy.get('#operator-multiply').click()
    cy.get('#number9').click()
    cy.get('#number9').click()
    cy.get('#number9').click()
    cy.get('#number9').click()
    cy.get('#number9').click()
    cy.get('#number9').click()
    cy.get('#operator-equals').click()
    cy.get('.display').should('contain', '999998000001')
    })

    // What does the code do in exceptional circumstances? Specifically, if you divide by zero, what is the effect? Write a test to describe what you'd prefer to happen, and then correct the code to make that test pass (you will need to modify the Calculator model to meet this requirement).
  it('should return ERROR if a number is divided by zero', () => {
    cy.get('#number9').click()
    cy.get('#operator-divide').click()
    cy.get('#number0').click()
    cy.get('#operator-equals').click()
    cy.get('.display').should('contain', 'ERROR')
  })

})



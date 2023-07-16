describe('template spec', () => {
  it('test1', () => {
    cy.visit('https://sanitarskyi-ngx-admin.herokuapp.com');

    cy.get('[src="assets/images/material-dark-theme.jpg"]').click();
    cy.get('[title="Forms"]').click();
    cy.get('[class="menu-title ng-tns-c141-11"]').click();
    
    cy.get('input[placeholder="Jane Doe"]').click().type("Marianna Dodon");
    cy.get('input[placeholder="Email"]').first().type("mariannadodon@gmail.com");
    cy.get('[class="text"]').click({ multiple: true });
    cy.get('[status="primary"]').first();
 //Using the Grid
    cy.get('[id="inputEmail1"]').click().type("mariannadodon@gmail.com");
    cy.get('[id="inputPassword2"]').click().type("Test123456");
    cy.get('[status="primary"]').eq(2);

    //Form without labels
    cy.get('[placeholder="Recipients"]').click().type("Marianna Dodon");
    cy.get('[placeholder="Subject"]').click().type("book");
    cy.get('[placeholder="Message"]').click().type("___ ");
    cy.get('[status="success"]').click();
    //Basic form
    cy.get('[id="exampleInputEmail1"]').click().type("mariannadodon@gmail.com");
    cy.get('[id="exampleInputPassword1"]').click().type("Test123456");
    cy.get('[status="danger"]').click();
    
    //Block form
    cy.get('[placeholder="First Name"]').click().type("Marianna");
    cy.get('[placeholder="Last Name"]').click().type("Dodon");
    cy.get('[id="inputEmail"]').click().type("mariannadodon@gmail.com");
    cy.get('[id="inputWebsite"]').click().type("mariannadodon@gmail.com");
    cy.get('[class="appearance-filled size-medium shape-rectangle status-basic nb-transition"]').click();
    
    //Horizontal form
    cy.get('[id="inputEmail3"]').click().type("mariannadodon@gmail.com");
    cy.get('[id="inputPassword3"]').click().type("Test123456");
    cy.get('[status="warning"]').click();
  })  
})
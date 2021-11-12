describe('Form App', () => {


    beforeEach(() => {
        cy.visit('http://localhost:3001/pizza')
    })

    it('sanity check', () => {
        expect(1 + 2).to.equal(3);
        expect(2 + 2).not.to.equal(5);
        expect({}).not.to.equal({});
        expect({}).to.eql({});
    })

    const instructions = () => cy.get('textarea[name=instructions]');
    const toppings = () => cy.get('input[id=toppings]');
    const submit = () => cy.get('button[name=order-button]');
    it('instructions test', () => {
        instructions()
            .should('have.value', '')
            .type('test that you can add text to the box')
            .should('have.value', 'test that you can add text to the box')
    })

    it('select mulitiple', () => {
        toppings().check();
    })

    it('submit test', () => {
        submit().click();
    })

})
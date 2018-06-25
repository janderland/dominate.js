const { div } = require('..');
const should = require('should');


it('no arguments', function() {
    div().should.equal('<div/>');
});


it('with children', function() {
    div(div()).should.equal('<div><div/></div>');
});


it('with attributes', function() {
    div({ class: 'MyClass', id: 'MyId' }).should.equal('<div class="MyClass" id="MyId"/>');
});


it('with children and attributes', function() {
    div({ class: 'MyClass', id: 'MyId' },
        div(), div(), div()
    ).should.equal('<div class="MyClass" id="MyId"><div/><div/><div/></div>');
});


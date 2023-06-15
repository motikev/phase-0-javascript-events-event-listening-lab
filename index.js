require('./helpers.js');

const sinon = require('sinon');

describe("index.js", () => {
  let input;

  beforeEach(function() {
    // Create a fake button element
    input = document.createElement('button');
    input.id = 'button';
    document.body.appendChild(input);

    // Spy on the addEventListener method of the button element
    sinon.spy(input, 'addEventListener');
  });

  afterEach(function() {
    // Clean up the fake button element
    document.body.removeChild(input);
  });

  it("binds an event listener in addingEventListener()", () => {
    addingEventListener();
    expect(input.addEventListener.called).to.be.true;
  });
});
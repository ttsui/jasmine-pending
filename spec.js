describe('Jasmine pending', function() {
  function add(a, b) {
    return a + b;
  }

  pending_it('add 1 + 1', function() {
    var expectation = expect(add(1, 2)).toEqual(3);
    var j;
  });

  pending('jasmine built-in pending', function() {
    asdf
  });

  function pending_it(description, fn) {
    var spec = it(description, fn);

    spec.pendingIt = true;

    spec.addExpectationResult = function(passed, result) {
      console.log('Called addExpectationResult');
      if (this.pendingIt && passed) {
        result.message = 'Unexpected success';
        result.passed = false;
        spec.__proto__.addExpectationResult.call(this, false, result);
      }

      spec.__proto__.addExpectationResult.apply(this, arguments);
    };

    return spec;
  }

  var i;
});

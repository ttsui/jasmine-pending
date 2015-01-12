  function pending_it(description, fn) {
    var spec = it('PENDING: ' + description, fn);

    spec.addExpectationResult = function(passed, result) {
      console.log('Called addExpectationResult');
      
      if (passed) {
        result.message = 'Unexpected success';
        result.passed = false;
        return spec.__proto__.addExpectationResult.call(this, false, result);
      }

      return spec.__proto__.addExpectationResult.call(this, true, result);
    };

    return spec;
  }
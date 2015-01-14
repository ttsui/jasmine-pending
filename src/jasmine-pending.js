function pending_it(description, func) {
  var spec = it('PENDING: ' + description, func);

  spec.addExpectationResult = function (passed, result) {
    if (passed) {
      result.message = 'Unexpected success. Did not expect ' +
                       result.actual + ' ' + result.matcherName + ' ' + result.expected;
      result.passed = false;
      return spec.__proto__.addExpectationResult.call(this, false, result);
    }

    return spec.__proto__.addExpectationResult.call(this, true, result);
  };

  return spec;
}
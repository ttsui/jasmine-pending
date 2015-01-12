describe('Hello jasmine-pending', function() {
  
  pending_it('a pending test', function() {
    expect(1 + 1).toEqual(3);
  });

  pending_it('an unexpected success', function() {
    expect(1 + 2).toEqual(3);
  });
  
  pending_it('a pending test with error', function() {
    asdf
  });

});
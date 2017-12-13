'use strict';

const check = createRuleChecker('form-layout');

describe('Rule: form-layout', () => {
  it('matches property `inline` of `Form`', () => {
    expect(check('<Form inline />')).toThrow();
  });

  it('matches property `horizontal` of `Form`', () => {
    expect(check('<Form horizontal />')).toThrow();
  });

  it('matches property `vertical` of `Form`', () => {
    expect(check('<Form vertical />')).toThrow();
  });
});

'use strict';

const check = createRuleChecker('form-layout');

describe('Rule: form-layout', () => {
  it('matches property `inline` of `Form`', () => {
    expect(check('<Form inline />')).toThrowError(/deprecated/);
  });

  it('matches property `horizontal` of `Form`', () => {
    expect(check('<Form horizontal />')).toThrowError(/deprecated/);
  });

  it('matches property `vertical` of `Form`', () => {
    expect(check('<Form vertical />')).toThrowError(/deprecated/);
  });
});

'use strict';

const check = createRuleChecker('input-type-textarea');

describe('Rule: input-type-textarea', () => {
  it('matches property `type=textarea` of `Input`', () => {
    expect(check('<Input {...props} type="textarea" />')).toThrowError(/deprecated/);
  });
});

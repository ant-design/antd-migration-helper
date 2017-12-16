'use strict';

const check = createRuleChecker('popover-overlay');

describe('Rule: popver-overlay', () => {
  it('doesn\'t match `overlay` which not in `Popover`', () => {
    expect(check('<UserComponent overlay={overlay} />')).not.toThrow();
  });
  it('matches property `overlay` of `Popover`', () => {
    expect(check('<Popover overlay={overlay} />')).toThrowError(/deprecated/);
  });
});

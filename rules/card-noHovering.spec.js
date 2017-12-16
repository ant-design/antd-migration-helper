'use strict';

const check = createRuleChecker('card-noHovering');

describe('Rule: card-noHovering', () => {
  it('doesn\'t match `noHovering` which not in `Card`', () => {
    expect(check('<UserComponent noHovering />')).not.toThrow();
  });
  it('matches property `noHovering` of `card`', () => {
    expect(check('<Card noHovering />')).toThrowError(/deprecated/);
  });
});

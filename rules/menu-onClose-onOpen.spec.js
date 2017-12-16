'use strict';

const check = createRuleChecker('menu-onClose-onOpen');

describe('Rule: menu-onClose-onOpen', () => {
  it('doesn\'t match `onClose` which not in `Menu`', () => {
    expect(check('<UserComponent onClose={onClose} />')).not.toThrow();
  });
  it('matches property `onClose` of `Menu`', () => {
    expect(check('<Menu onClose={onClose} />')).toThrowError(/deprecated/);
  });

  it('doesn\'t match `onOpen` which not in `Menu`', () => {
    expect(check('<UserComponent onOpen={onOpen} />')).not.toThrow();
  });
  it('matches property `onOpen` of `Menu`', () => {
    expect(check('<Menu onOpen={onOpen} />')).toThrowError(/deprecated/);
  });
});

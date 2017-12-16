'use strict';

const check = createRuleChecker('gregorian-calendar');

describe('Rule: gregorian-calendar', () => {
  it('doesn\'t match `setTime`', () => {
    expect(check('setTime(0)')).not.toThrow();
  });
  it('matches `obj.setTime`', () => {
    expect(check('sth.date.setTime(0)')).toThrowError(/deprecated/);
  });
  it('matches `obj[setTime]`', () => {
    expect(check('sth.date[setTime](0)')).toThrowError(/deprecated/);
  });
});

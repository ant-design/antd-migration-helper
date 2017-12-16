'use strict';

const check = createRuleChecker('time-related-value');

describe('Rule: time-related-value', () => {
  it('doesn\'t match `value: string` which not in time-related components', () => {
    expect(check('<UsersComponent value="2017-01-12" />'))
      .not.toThrow();
  });
  it('matches `value: string` of time-related component', () => {
    expect(check('<DatePicker value="2017-01-12" />')).toThrowError(/deprecated/);
  });

  it('doesn\'t match `defaultValue: string` which not in time-related components', () => {
    expect(check('<UsersComponent defaultValue="2017-01-12" />'))
      .not.toThrow();
  });
  it('matches `defaultValue: string` of time-related component', () => {
    expect(check('<DatePicker defaultValue="2017-01-12" />')).toThrowError(/deprecated/);
  });
});

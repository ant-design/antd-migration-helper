'use strict';

const check = createRuleChecker('time-related-format');

describe('Rule: time-related-format', () => {
  it('doesn\'t match `format` which not in time-related components', () => {
    expect(check('<UsersComponent format="yyyy-MM-dd" />'))
      .not.toThrow();
  });

  it('doesn\'t match `format` which is in valid format', () => {
    expect(check('<DatePicker format="YYYY-MM-DD" />'))
      .not.toThrow();
  });

  it('matches invalid `format` of time-related components', () => {
    expect(check('<DatePicker format="yyyy-MM-dd" />')).toThrowError(/deprecated/);
  });
});

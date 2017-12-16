'use strict';

const check = createRuleChecker('date-picker-toggleOpen');

describe('Rule: date-picker-toggleOpen', () => {
  it('doesn\'t match `toggleOpen` which not in `DatePicker`', () => {
    expect(check('<UsersComponent toggleOpen={this.handler} />'))
      .not.toThrow();
  });
  it('matches property `toggleOpen` of `DatePicker`', () => {
    expect(check('<DatePicker toggleOpen={this.handler} />')).toThrowError(/deprecated/);
  });
});

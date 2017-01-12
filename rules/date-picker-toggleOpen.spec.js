'use strict';

const check = createRuleChecker('date-picker-toggleOpen');

describe('Rule: date-picker-toggleOpen', () => {
  it('matches property `toggleOpen` of `DatePicker`', () => {
    expect(check('<DatePicker toggleOpen={this.handleToggleOpen} />')).toThrow();
  })
});

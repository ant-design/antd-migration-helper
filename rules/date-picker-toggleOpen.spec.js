'use strict';

const check = createRuleChecker('date-picker-toggleOpen');

describe('Rule: form-getFieldProps', () => {
  it('matches property `toggleOpen` of `DatePicker`', () => {
    const warning = check(`
      <DatePicker toggleOpen={this.handleToggleOpen} />
    `)
    expect(warning).toBeTruthy();
  })
});

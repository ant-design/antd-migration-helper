'use strict';

const check = createRuleChecker('date-picker-calendar');

describe('Rule: date-picker-calendar', () => {
  it('matches `DatePicker.Calendar`', () => {
    expect(check(`
      <DatePicker.Calendar />
    `)).toThrowError(/deprecated/);
  })
});

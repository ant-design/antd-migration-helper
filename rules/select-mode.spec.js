'use strict';

const check = createRuleChecker('select-mode');

describe('Rule: select-mode', () => {
  it('matches property `multiple` of `Select`', () => {
    expect(check('<Select multiple />')).toThrow();
  });

  it('matches property `combobox` of `Select`', () => {
    expect(check('<Select combobox />')).toThrow();
  });

  it('matches property `tags` of `Select`', () => {
    expect(check('<Select tags />')).toThrow();
  });
});

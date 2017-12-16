'use strict';

const check = createRuleChecker('select-mode');

describe('Rule: select-mode', () => {
  it('matches property `multiple` of `Select`', () => {
    expect(check('<Select multiple />')).toThrowError(/deprecated/);
  });

  it('matches property `combobox` of `Select`', () => {
    expect(check('<Select combobox />')).toThrowError(/deprecated/);
  });

  it('matches property `tags` of `Select`', () => {
    expect(check('<Select tags />')).toThrowError(/deprecated/);
  });
});

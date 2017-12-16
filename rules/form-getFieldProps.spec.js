'use strict';

const check = createRuleChecker('form-getFieldProps');

describe('Rule: form-getFieldProps', () => {
  it('matches call expression of `getFieldProps`', () => {
    expect(check('<input {...getFieldProps("name")} />')).toThrowError(/deprecated/);
  })
});

'use strict';

const check = createRuleChecker('form-getFieldProps');

describe('Rule: form-getFieldProps', () => {
  it('does not match an empty line', () => {
    const warning = check('')
    expect(warning).toBe(null)
  })

  it('matches call expression of `getFieldProps`', () => {
    const warning = check(`
      <input {...getFieldProps('name')} />
    `)
    expect(warning).toBeTruthy();
  })
});

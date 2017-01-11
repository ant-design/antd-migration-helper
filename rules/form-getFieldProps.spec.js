'use strict';

const check = createRuleChecker('form-getFieldProps');

describe('Rule: form-getFieldProps', () => {
  it('matches call expression of `getFieldProps`', () => {
    const warning = check(`
      <input {...getFieldProps('name')} />
    `)
    expect(warning).toBeTruthy();
  })
});

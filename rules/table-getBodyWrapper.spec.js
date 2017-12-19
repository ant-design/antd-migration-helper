'use strict';

const check = createRuleChecker('table-getBodyWrapper');

describe('Rule: table-getBodyWrapper', () => {
  it('matches property `getBodyWrapper` of `Table`', () => {
    expect(check('<Table getBodyWrapper={this.getBodyWrapper} />')).toThrowError(/deprecated/);
  });
});

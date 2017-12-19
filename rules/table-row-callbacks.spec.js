'use strict';

const check = createRuleChecker('table-row-callbacks');

describe('Rule: table-row-callbacks', () => {
  [
    'onRowClick',
    'onRowDoubleClick',
    'onRowContextMenu',
    'onRowMouseEnter',
    'onRowMouseLeave'
  ].forEach((cb) => {
    it(`matches property \`${cb}\` of \`Table\``, () => {
      expect(check(`<Table ${cb}={this.${cb}} />`)).toThrowError(/deprecated/);
    });
  })
});

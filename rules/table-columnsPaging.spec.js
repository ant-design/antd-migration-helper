'use strict';

const check = createRuleChecker('table-columnsPaging');

describe('Rule: table-columnsPaging', () => {
  it('doesn\'t match `columnsPageRange` which not in `Table`', () => {
    expect(check('<UserComponent columnsPageRange={columnsPageRange} />'))
      .not.toThrow();
  });
  it('matches property `columnsPageRange` of `Table`', () => {
    expect(check('<Table columnsPageRange={columnsPageRange} />')).toThrowError(/deprecated/);
  });

  it('doesn\'t match `columnsPageSize` which not in `Table`', () => {
    expect(check('<UserComponent columnsPageSize={columnsPageSize} />'))
      .not.toThrow();
  });
  it('matches property `columnsPageSize` of `Table`', () => {
    expect(check('<Table columnsPageSize={columnsPageSize} />')).toThrowError(/deprecated/);
  });

  it('doesn\'t match `currentColumnsPage` which not in `Table`', () => {
    expect(check('<UserComponent currentColumnsPage={currentColumnsPage} />'))
      .not.toThrow();
  });
  it('matches property `currentColumnsPage` of `Table`', () => {
    expect(check('<Table currentColumnsPage={currentColumnsPage} />')).toThrowError(/deprecated/);
  });
});

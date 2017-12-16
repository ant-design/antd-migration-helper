'use strict';

const check = createRuleChecker('breadcrumb-linkRender-nameRender');

describe('Rule: breadcrumb-linkRender-nameRender', () => {
  it('doesn\'t match `linkRender` which not in `Breadcrumb`', () => {
    expect(check('<UserComponent linkRender={linkRender} />')).not.toThrow();
  });
  it('matches property `linkRender` of `Breadcrumb`', () => {
    expect(check('<Breadcrumb linkRender={linkRender} />')).toThrowError(/deprecated/);
  });

  it('doesn\'t match `nameRender` which not in `Breadcrumb`', () => {
    expect(check('<UserComponent nameRender={nameRender} />')).not.toThrow();
  });
  it('matches property `nameRender` of `Breadcrumb`', () => {
    expect(check('<Breadcrumb nameRender={nameRender} />')).toThrowError(/deprecated/);
  });
});

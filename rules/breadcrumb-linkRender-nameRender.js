'use strict';

const deprecateProps = require('../lib/deprecate-props');

module.exports = {
  traverser: deprecateProps('Breadcrumb', ['linkRender', 'nameRender']),
  warning: function() {
    return {
      reason: '`Breadcrumb[linkRender|nameRender]` has been removed, please',
      fix: 'Use `Breadcrumb[itemRender]`',
      demo: 'http://u.ant.design/item-render',
    };
  },
}

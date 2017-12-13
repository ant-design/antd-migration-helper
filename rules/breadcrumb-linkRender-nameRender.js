'use strict';

const deprecateProps = require('../lib/deprecate-props');

module.exports = {
  traverser: deprecateProps('Breadcrumb', ['linkRender', 'nameRender']),
  warning: function() {
    return {
      reason: '`Breadcrumb[linkRender|nameRender]` has been removed',
      fix: 'Use `Breadcrumb[itemRender]` instead',
      demo: 'http://u.ant.design/item-render',
    };
  },
}

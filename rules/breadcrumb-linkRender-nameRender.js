'use strict';

const deprecateProps = require('./common/deprecateProps');

module.exports = {
  traverser: deprecateProps('Breadcrumb', ['linkRender', 'nameRender']),
  warning: function() {
    return {
      reason: '`Breadcrumb[linkRender|nameRender]` 在 `antd@2.0` 中已经移除，请使用 `Breadcrumb[itemRender]`',
      demo: 'http://u.ant.design/item-render'
    };
  },
}

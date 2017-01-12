'use strict';

const deprecateProps = require('./common/deprecateProps');

module.exports = {
  traverser: deprecateProps('Menu', ['onClose', 'onOpen']),
  warning: function() {
    return {
      reason: '`Menu[onOpen|onClose]` 在 `antd@2.0` 中已经移除，请使用 `Menu[onOpenChange]`',
      demo: 'http://u.ant.design/menu-on-open-change',
    };
  },
};

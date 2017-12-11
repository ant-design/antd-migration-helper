'use strict';

const deprecateProps = require('../lib/deprecate-props');

module.exports = {
  traverser: deprecateProps('Menu', ['onClose', 'onOpen']),
  warning: function() {
    return {
      reason: '`Menu[onOpen]` and `Menu[onClose]` have been removed',
      fix: 'Use `Menu[onOpenChange] instead`',
      demo: 'http://u.ant.design/menu-on-open-change',
    };
  },
};

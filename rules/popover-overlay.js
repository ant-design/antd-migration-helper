'use strict';

const deprecateProps = require('../lib/deprecate-props');

module.exports = {
  traverser: deprecateProps('Popover', ['overlay']),
  warning: function() {
    return {
      reason: '`Popover[overlay]` has renamed to Popover[content]',
      fix: 'Replace `Popover[content]` with `Popover[overlay]`',
      demo: 'http://u.ant.design/popover-content',
    };
  },
};

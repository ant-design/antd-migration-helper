'use strict';

const deprecateProps = require('../lib/deprecate-props');

module.exports = {
  traverser: deprecateProps('Form', ['inline', 'horizontal', 'vertical']),
  warning: function() {
    return {
      reason: '`Form[inline|horizontal|vertical]` have been removed',
      fix: 'Use `Form[layout]` instead',
    };
  },
}

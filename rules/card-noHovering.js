'use strict';

const deprecateProps = require('../lib/deprecate-props');

module.exports = {
  traverser: deprecateProps('Card', ['noHovering']),
  warning: function() {
    return {
      reason: '`Card[noHovering]` has been renamed to `Card[hoverable]`',
      fix: 'Use `Card[hoverable]` instead',
    };
  },
}

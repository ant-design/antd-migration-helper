'use strict';

const deprecateProps = require('../lib/deprecate-props');

module.exports = {
  traverser: deprecateProps('Select', ['multiple', 'combobox', 'tags']),
  warning: function() {
    return {
      reason: '`Select[multiple|combobox|tags]` have been removed',
      fix: 'Use `Select[mode]` instead',
    };
  },
}

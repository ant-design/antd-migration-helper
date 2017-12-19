'use strict';

const deprecateProps = require('../lib/deprecate-props');

module.exports = {
  traverser: deprecateProps('Table', ['getBodyWrapper']),
  warning: function() {
    return {
      reason: '`Table[getBodyWrapper]` has been deprecated',
      fix: 'Use `Table[components]` instead',
    };
  },
}

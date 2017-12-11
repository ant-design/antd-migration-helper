'use strict';

const deprecateProps = require('../lib/deprecate-props');

module.exports = {
  traverser: deprecateProps('Table', [
    'columnsPageRange',
    'columnsPageSize',
    'currentColumnsPage',
  ]),
  warning: function() {
    return {
      reason: '`Table[columnsPageRange|columnsPageSize|currentColumnsPage]` has been removed',
      fix: 'Use Table\'s fixed column instead',
      demo: 'http://u.ant.design/fixed-columns',
    };
  },
};

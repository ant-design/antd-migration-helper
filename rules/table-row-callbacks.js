'use strict';

const deprecateProps = require('../lib/deprecate-props');

module.exports = {
  traverser: deprecateProps('Table', [
    'onRowClick',
    'onRowDoubleClick',
    'onRowContextMenu',
    'onRowMouseEnter',
    'onRowMouseLeave'
  ]),
  warning: function() {
    return {
      reason: '`Table[onRowClick|onRowDoubleClick|onRowContextMenu|onRowMouseEnter|onRowMouseLeave]` have been deprecated',
      fix: 'Use `Table[onRow]` instead',
    };
  },
}

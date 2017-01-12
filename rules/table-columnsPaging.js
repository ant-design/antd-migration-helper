'use strict';

const deprecateProps = require('./common/deprecateProps');

module.exports = {
  traverser: deprecateProps('Table', [
    'columnsPageRange',
    'columnsPageSize',
    'currentColumnsPage',
  ]),
  warning: function() {
    return {
      reason: '`Table[columnsPageRange|columnsPageSize|currentColumnsPage]` ' +
        '在 `and@2.0` 中已经移除，请使用 Table 固定列功能',
      demo: 'http://u.ant.design/fixed-columns',
    };
  },
};

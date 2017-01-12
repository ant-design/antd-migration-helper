'use strict';

module.exports = {
  traverser: {
    JSXAttribute: function(path) {
      const isToggleOpen = path.node.name.name === 'toggleOpen';
      if (isToggleOpen) {
        const isInDatePicker = path.parent.name.name === 'DatePicker';
        return isInDatePicker;
      }
    },
  },
  warning: function() {
    return {
      reason: '`DatePicker[toggleOpen]` 在 `antd@2.0` 中已经废弃，请使用 `DatePicker[onOpenChange]`',
      tips: '`toggleOpen({ open }): void` 替换为 `onOpenChange(open): void`，新的写法请参考下面的 demo',
      demo: 'http://u.ant.design/date-picker-on-open-change'
    }
  }
}

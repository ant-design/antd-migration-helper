'use strict';

module.exports = {
  pattern: /toggleOpen=/,
  warning: function() {
    return {
      type: 'js',
      reason: '`DatePicker[toggleOpen]` 在 `antd@2.0` 中已经废弃，请使用 `DatePicker[onOpenChange]`',
      tips: '`toggleOpen({ open }): void` 替换为 `onOpenChange(open): void`，新的写法请参考下面的 demo',
      demo: 'http://u.ant.design/date-picker-on-open-change'
    }
  }
}

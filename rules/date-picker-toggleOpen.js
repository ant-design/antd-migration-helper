'use strict';

const deprecateProps = require('../lib/deprecate-props');

module.exports = {
  traverser: deprecateProps('DatePicker', ['toggleOpen']),
  warning: function() {
    return {
      reason: '`DatePicker[toggleOpen]` has been removed',
      fix: 'Replace `DatePicker[toggleOpen]` with `DatePicker[onOpenChange]`',
      demo: 'http://u.ant.design/date-picker-on-open-change'
    }
  }
}

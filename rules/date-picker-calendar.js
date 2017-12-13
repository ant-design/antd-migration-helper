'use strict';

module.exports = {
  traverser: {
    JSXMemberExpression: function(path) {
      if (path.node.object.name === 'DatePicker' && path.node.property.name === 'Calendar') {
        return true;
      }
    }
  },
  warning: function() {
    return {
      reason: '`DatePicker.Calendar` has been removed',
      fix: 'Replace `Calendar` directly',
      demo: 'https://ant.design/components/calendar/',
    };
  }
}

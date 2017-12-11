'use strict';

function isTimeRelatedComponent(component) {
  return ['DatePicker', 'MonthPicker', 'TimePicker', 'Calendar']
    .indexOf(component) > -1;
}

module.exports = {
  traverser: {
    JSXAttribute(path) {
      const isValue = ['value', 'defaultValue'].indexOf(path.node.name.name) > -1;
      if (isValue && isTimeRelatedComponent(path.parent.name.name)) {
        const valueNode = path.node.value;
        return valueNode.type === 'StringLiteral';
      }
    },
  },
  warning: function() {
    return {
      reason: 'GregorianCalendar has been replaced with [moment](http://momentjs.com/)',
      fix: 'Replace GregorianCalendar with moment',
      demo: 'http://u.ant.design/date-picker-value',
    };
  },
};

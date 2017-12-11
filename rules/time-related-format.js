'use strict';

function containsInvalidChar(format) {
  return format.indexOf('y') > -1 ||
    format.indexOf('d') > -1;
}

function isTimeRelatedComponent(component) {
  return ['DatePicker', 'MonthPicker', 'RangePicker', 'Calendar']
    .indexOf(component) > -1;
}

module.exports = {
  traverser: {
    JSXAttribute(path) {
      const isFormat = path.node.name.name === 'format';
      if (isFormat && isTimeRelatedComponent(path.parent.name.name)) {
        const valueNode = path.node.value;
        if (valueNode.type === 'StringLiteral') {
          return containsInvalidChar(valueNode.value);
        }
      }
    },
  },
  warning: function() {
    return {
      reason: 'GregorianCalendar has been replaced with [moment](http://momentjs.com/)',
      tips: 'Replace GregorianCalendar format string to moment [format string](http://momentjs.com/docs/#/displaying/format/)',
      demo: 'http://u.ant.design/date-picker-value',
    };
  },
};

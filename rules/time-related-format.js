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
      reason: '`DatePicker` `MonthPicker` `RangePicker` `Calendar` 等时间类组件的 `format` 属性' +
        '在 `antd@2.0` 之后改为 [moment](http://momentjs.com/) 的格式',
      tips: '可以使用 [antd-codemod](https://github.com/ant-design/antd-codemod) 中的脚本 `time-related-value-to-moment`' +
        '自动修改 `format` 格式为 moment 的格式。',
      demo: 'http://u.ant.design/date-picker-value',
      notice: '由于无法保证 antd-codemod 修改的结果 100% 正确，所以务必 review 并测试修改后的代码。',
    };
  },
};

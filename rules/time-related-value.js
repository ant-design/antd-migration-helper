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
      reason: '`DatePicker` `MonthPicker` `TimePicker` `Calendar` 等时间类组件的 `value|defaultValue` 属性' +
        '在 `antd@2.0` 之后改为 [moment](http://momentjs.com/) 类型',
      tips: '可以使用 [antd-codemod](https://github.com/ant-design/antd-codemod) 中的脚本 `time-related-value-to-moment`' +
        '自动修改 `value|defaultValue` 格式为 moment 类型。',
      demo: 'http://u.ant.design/date-picker-value',
      notice: '由于无法保证 antd-codemod 修改的结果 100% 正确，所以务必 review 并测试修改后的代码。',
    };
  },
};

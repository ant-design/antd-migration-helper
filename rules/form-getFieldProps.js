'use strict';

module.exports = {
  pattern: /getFieldProps\(/,
  warning: function() {
    return {
      type: 'js',
      reason: '`getFieldProps` 在 `antd@2.0` 中已经废弃，请使用 `getFieldDecorator`',
      tips: '可以使用 [antd-codemod](https://github.com/ant-design/antd-codemod) 中的脚本 `getFieldProps-to-getFieldDecorator`' +
        '自动重构 `getFieldProps` 为 `getFieldDecorator`。',
      notice: '由于无法保证 antd-codemod 修改的结果 100% 正确，所以务必 review 并测试修改后的代码。',
      demo: 'http://u.ant.design/get-field-decorator'
    }
  }
}

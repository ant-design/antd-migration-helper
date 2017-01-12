'use strict';

const deprecateProps = require('./common/deprecateProps');

module.exports = {
  traverser: deprecateProps('Popover', ['overlay']),
  warning: function() {
    return {
      reason: '`Popover[overlay]` 在 `antd@2.0` 中已经移除，请使用 `Popover[content]`',
      tips: '可以使用 [antd-codemod](https://github.com/ant-design/antd-codemod) 中的脚本 `Popover-overlay-to-content`' +
        '自动重构 `Popover[overlay]` 为 `Popover[content]`。',
      demo: 'http://u.ant.design/popover-content',
      notice: '由于无法保证 antd-codemod 修改的结果 100% 正确，所以务必 review 并测试修改后的代码。',
    };
  },
};

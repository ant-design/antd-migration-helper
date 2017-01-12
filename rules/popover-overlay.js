'use strict';

module.exports = {
  traverser: {
    JSXAttribute: function(path) {
      const isOverlay = path.node.name.name === 'overlay';
      if (isOverlay) {
        const isInPopover = path.parent.name.name === 'Popover';
        return isInPopover;
      }
    },
  },
  warning: function() {
    return {
      reason: '`Popover[overlay]` 在 `antd@2.0` 中已经移除，请使用 `Popover[content]`',
      tips: '`Popover[content] 与 `Popover[overlay]` 完全等价，直接替换即可',
      demo: 'http://u.ant.design/popover-content',
    };
  },
};

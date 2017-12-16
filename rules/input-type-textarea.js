'use strict';

module.exports = {
  traverser: {
    JSXOpeningElement: function(path) {
      if (path.node.name.name !== 'Input') {
        return;
      }
      for (var i = 0; i < path.node.attributes.length; ++i) {
        const attribute = path.node.attributes[i];
        if (attribute.type === 'JSXAttribute' &&
          attribute.name.name === 'type' &&
          attribute.value.value === 'textarea') {
          return true;
        }
      }
    },
  },
  warning: function() {
    return {
      reason: 'type `textarea` has been removed from `Input`',
      fix: 'Use Input.TextArea instead',
    }
  }
}

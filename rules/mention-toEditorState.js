'use strict';

module.exports = {
  traverser: {
    CallExpression: function(path) {
      return path.node.callee.name === 'toEditorState';
    },
  },
  warning: function() {
    return {
      reason: 'Mention.toEditorState has been removed',
      fix: 'Use Mention.toContentState instead',
    }
  }
}

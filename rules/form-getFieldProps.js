'use strict';

module.exports = {
  traverser: {
    CallExpression: function(path) {
      const callee = path.node.callee;
      if (callee.type === 'Identifier') {
        return callee.name === 'getFieldProps';
      }
    },
  },
  warning: function() {
    return {
      reason: '`getFieldProps` has been deprecated',
      fixed: 'Use `getFieldDecorator` instead of `getFieldProps`',
      demo: 'http://u.ant.design/get-field-decorator',
    }
  }
}

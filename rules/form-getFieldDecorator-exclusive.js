'use strict';

module.exports = {
  traverser: {
    CallExpression: function(path) {
      if (path.node.callee.name !== 'getFieldDecorator') {
        return false;
      }
      const config = path.node.arguments[1];
      if (!config || config.type !== 'ObjectExpression') {
        return false;
      }
      for (var i = 0; i < config.properties.length; ++i) {
        const property = config.properties[i];
        if (property.key && property.key.name === 'exclusive') {
          return true;
        }
      }
    }
  },
  warning: function() {
    return {
      reason: 'getFieldDecorator\'s exclusive option has been removed',
      fix: 'Use RadioGroup, CheckboxGroup instead',
    }
  },
}

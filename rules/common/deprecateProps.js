'use strict';

module.exports = function deprecateProps(component, props) {
  return {
    JSXAttribute: function(path) {
      const isDeprecatedProp = props.indexOf(path.node.name.name) > -1;
      if (isDeprecatedProp) {
        const isInSpecificComponent = path.parent.name.name === component;
        return isInSpecificComponent;
      }
    },
  };
}

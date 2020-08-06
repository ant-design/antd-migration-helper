'use strict'

const traverse = require('@babel/traverse').default;
const parser = require('../../lib/parser');

function generateTestTraverser(rule) {
  const traverser = {};
  Object.keys(rule.traverser).forEach(traverserName => {
    traverser[traverserName] = (path) => {
      const invalid = rule.traverser[traverserName](path);
      if (invalid) {
        throw new Error('Found deprecated usage case.');
      }
    }
  });
  return traverser;
}

global.createRuleChecker = ruleName => {
  const rule = require('../../rules/' + ruleName);

  return (code) => () => {
    const ast = parser(code);
    traverse(ast, generateTestTraverser(rule));
  }
}

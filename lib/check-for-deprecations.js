'use strict'

var recursiveReadSync = require('recursive-readdir-sync')
var path = require('path')
var reportWarning = require('./report-warning')
var parser = require('./parser')
var traverse = require('babel-traverse').default

var rulesPath = path.join(__dirname, '../rules')
var rules = recursiveReadSync(rulesPath)
  .filter(function (file) {
    return (
      file.indexOf('.js') === file.length - 3 &&
      file.indexOf('.spec') === -1
    )
  })
  .map(function (file) {
    var rule = require(file)
    rule.file = file
    return rule
  })

function generateTraverser(file, result) {
  const traversersList = {};
  rules.forEach(rule => {
    Object.keys(rule.traverser).forEach(traverserName => {
      if (!traversersList[traverserName]) {
        traversersList[traverserName] = [];
      }

      traversersList[traverserName].push((path) => {
        const invalid = rule.traverser[traverserName](path);
        if (invalid) {
          result.deprecationsFound = true;
          const warning = rule.warning();
          reportWarning({
            lineNum: path.node.loc.start.line,
            file,
          }, warning, rule);
        }
      });
    });
  });

  const traverser = {};
  Object.keys(traversersList).forEach(listName => {
    traverser[listName] = (path) => {
      traversersList[listName].forEach(fn => fn(path));
    };
  });
  return traverser;
}


module.exports = function (fileDesc, result) {
  const traverser = generateTraverser(fileDesc.file, result);
  var ast = parser(fileDesc.content);
  traverse(ast, traverser);
}

'use strict';

var path = require('path');
var recursiveReadSync = require('recursive-readdir-sync')
var reportWarning = require('./reportWarning')

var rulesPath = path.join(__dirname, '../rules')
var rules = recursiveReadSync(rulesPath)
  .filter(function (file) {
    return (
      file.indexOf('.js') === file.length - 3 &&
        file.indexOf('.spec') === -1 &&
        !path.dirname(file).match(/common$/)
    )
  })
  .map(function (file) {
    var rule = require(file)
    rule.file = file
    return rule
  })

function generateTraverser(file, rules) {
  const traversersList = {};
  rules.forEach(rule => {
    Object.keys(rule.traverser).forEach(traverserName => {
      if (!traversersList[traverserName]) {
        traversersList[traverserName] = [];
      }

      traversersList[traverserName].push((path) => {
        const invalid = rule.traverser[traverserName](path);
        if (invalid) {
          const warning = rule.warning();
          reportWarning({
            lineNum: path.node.loc.start.line,
            file,
          }, warning);
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

module.exports = (file) => generateTraverser(file, rules);

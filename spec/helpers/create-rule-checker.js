'use strict'

global.createRuleChecker = ruleName => {
  const stripAnsi = require('strip-ansi')
  const assertRule = require('../../lib/assert-rule')

  const rule = require('../../rules/' + ruleName)
  return function (line) {
    const warning = assertRule({
      line: line,
      lineNum: 42,
      file: 'file.js'
    }, rule)
    if (warning) {
      warning.tips = stripAnsi(warning.tips)
    }
    return warning
  }
}

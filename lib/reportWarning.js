'use strict'

var chalk = require('chalk')

var warningCount = 0
module.exports = function (fileData, warning) {
  warningCount++

  console.log(chalk.red(warningCount + '. ' + warning.reason))
  console.log(chalk.green('  第 ' + fileData.lineNum + ' 行：' + fileData.file))
  if (warning.tips) {
    console.log(chalk.green('  ' + warning.tips))
  }
  console.log(chalk.green('  新用法示例：' + chalk.underline(warning.demo)))
  if (warning.notice) {
    console.log(chalk.yellow('  注意：' + warning.notice));
  }
  console.log()
}

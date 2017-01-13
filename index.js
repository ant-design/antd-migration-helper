#!/usr/bin/env node

'use strict'

require('./lib/check-if-outdated')(function () {
  var fs = require('graceful-fs')
  var path = require('path')
  var glob = require('glob')
  var chalk =require('chalk')
  var traverse = require('babel-traverse').default
  var parser = require('./lib/parser')
  var getTraverser = require('./lib/getTraverser')

  var args = process.argv.slice(2)
  var filesAndOrFolders = args.length
    ? args.length === 1
      ? args + '{/**/*,}'
      : '{' + args.join(',') + '}{/**/*,}'
    : '**/*'

  glob(filesAndOrFolders, { nodir: true }, function (error, files) {
    if (error) throw error

    var fileChecks = files
          .filter(file => ['.jsx', '.js'].indexOf(path.extname(file)) > -1)
          .map(function (file) {
            return new Promise(function (resolve) {
              fs.readFile(file, (err, fileDesc) => {
                if (err) throw err;

                var ast = parser(fileDesc.toString());
                traverse(ast, getTraverser(file));
                resolve();
              })
            })
          })
    Promise.all(fileChecks)
      .then(() => {
        console.log(chalk.yellow(
          '以上为 antd-migration-helper 在 ' + args.join(',') + ' 内找到的已经废弃的用法。' +
            '对于误报或者有无法扫描出来的情况，本地可以先忽略，然后到 GitHub 上提 issue：' +
            chalk.underline('https://github.com/ant-design/antd-migration-helper/issues')
        ));
        console.log();
        console.log(chalk.green('Tips：'));
        console.log(chalk.green('1. 在升级 antd 的过程中，建议每做完一次合理的修改并 review & 测试之后，就 commit 一次，这样在误操作时能随时回滚到之前的版本'));
        console.log(chalk.green(
          '2. 由于 antd-codemod 在修改代码的过程中，可能会破坏已有的代码风格，所以可以在升级完成之后，使用 `eslint --fix` 功能统一代码风格，详见：' +
            chalk.underline('http://eslint.org/')
        ));
        console.log(chalk.green(
          '3. 完整不兼容改动列表及升级指南：' +
            chalk.underline('https://ant.design/changelog-cn#2.x-不兼容改动')
        ));
      })
      .catch(function (error) {
        throw error
      })
  })
})

#!/usr/bin/env node

'use strict'

require('./lib/check-if-outdated')(function () {
  var fs = require('graceful-fs')
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

    var fileChecks = files.map(function (file) {
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
        console.log();
        console.log(
          '完整不兼容改动列表及升级指南：' +
            chalk.underline('https://ant.design/changelog-cn#2.x-不兼容改动')
        );
      })
      .catch(function (error) {
        throw error
      })
  })
})

#!/usr/bin/env node
'use strict'

require('./lib/check-if-outdated')(function () {
  var fs = require('graceful-fs')
  var glob = require('glob')
  var split = require('split')

  var checkForDeprecations = require('./lib/check-for-deprecations')
  var printSummary = require('./lib/print-summary')

  var args = process.argv.slice(2)
  var filesAndOrFolders = args.length
    ? args.length === 1
      ? args + '{/**/*,}'
      : '{' + args.join(',') + '}{/**/*,}'
    : '**/*'

  glob(filesAndOrFolders, {
    nodir: true,
    ignore: [
      '**/.git/**/*',
      '**/node_modules/**/*',
      '**/dist/**/*',
      '**/*.+(jpeg|jpg|gif|png|svg|woff|woff2|ttf|otf|eot|log|zip|map|tar|gz)'
    ]
  }, function (error, files) {
    if (error) throw error
    var deprecationsFound = false
    var fileChecks = files.map(function (file) {
      return new Promise(function (resolve, reject) {
        var lineNum = 0
        fs.createReadStream(file)
          .pipe(split())
          .on('data', function (line) {
            lineNum++
            var lineHasDeprecation = checkForDeprecations({
              line: line,
              lineNum: lineNum,
              file: file
            })
            if (lineHasDeprecation) {
              deprecationsFound = true
            }
          })
          .on('end', resolve)
      })
    })
    Promise.all(fileChecks)
      .then(function () {
        printSummary(deprecationsFound)
      })
      .catch(function (error) {
        throw error
      })
  })
})

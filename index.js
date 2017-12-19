#!/usr/bin/env node

'use strict'

require('./lib/check-if-outdated')(function () {
  var fs = require('graceful-fs')
  var path = require('path')
  var glob = require('glob')
  var split = require('split')
  var debug = require('debug')('antd-migration-helper')

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
      '**/tmp/**/*',
      '**/vendor/**/*',
      '**/cache/**/*',
      '**/logs/**/*',
      '**/dist/**/*',
      '**/*.+(jpeg|jpg|gif|png|svg|woff|woff2|ttf|otf|eot|log|zip|map|tar|gz|db|sqlite|sqlite3)',
      '**/(G|g)ulpfile.js'
    ],
  }, function (error, files) {
    if (error) throw error
    var result = {
      deprecationsFound: false
    };
    var fileChecks = files
      .filter(file => ['.jsx', '.js'].indexOf(path.extname(file)) > -1)
      .map(function (file) {
        return new Promise(function (resolve, reject) {
          fs.readFile(file, (err, fileDesc) => {
            if (err) throw err;
            debug('Scanning file: %s', file);
            checkForDeprecations({
              file: file,
              content: fileDesc.toString()
            }, result);
            resolve();
          })
        })
      })
    Promise.all(fileChecks)
      .then(function () {
        printSummary(result.deprecationsFound)
      })
      .catch(function (error) {
        throw error
      })
  })
})

# antd-migration-helper

[![](https://img.shields.io/travis/ant-design/antd-migration-helper.svg?style=flat-square)](https://travis-ci.org/ant-design/antd-migration-helper)
[![npm package](https://img.shields.io/npm/v/antd-migration-helper.svg?style=flat-square)](https://www.npmjs.org/package/antd-migration-helper)
[![NPM downloads](http://img.shields.io/npm/dm/antd-migration-helper.svg?style=flat-square)](https://npmjs.org/package/antd-migration-helper)
[![Dependency Status](https://david-dm.org/ant-design/antd-migration-helper.svg?style=flat-square)](https://david-dm.org/ant-design/antd-migration-helper)

> CLI tool to aid in migrate antd from old version to newer version. It scans files for JSX code and provides detailed warnings when deprecated patterns are found. It cannot reliably catch every deprecation, but should get you 80% of the way there.

![Screenshot](https://gw.alipayobjects.com/zos/rmsportal/XLTKkKowtBUyfjaRuker.png)

## Usage

```bash
# install
npm install -g antd-migration-helper

# navigate to an antd@1.x project directory
cd path/to/my-antd-project

# scan all files in the current directory
antd-migration-helper
# scan all files in specific sub-directories
antd-migration-helper src folder-a folder-b
# scan a specific file or files
antd-migration-helper src/app.jsx
```

## License

MIT

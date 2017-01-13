# antd-migration-helper

[![](https://img.shields.io/travis/ant-design/antd-migration-helper.svg?style=flat-square)](https://travis-ci.org/ant-design/antd-migration-helper)
[![npm package](https://img.shields.io/npm/v/antd-migration-helper.svg?style=flat-square)](https://www.npmjs.org/package/antd-migration-helper)
[![NPM downloads](http://img.shields.io/npm/dm/antd-migration-helper.svg?style=flat-square)](https://npmjs.org/package/antd-migration-helper)
[![Dependency Status](https://david-dm.org/ant-design/antd-migration-helper.svg?style=flat-square)](https://david-dm.org/ant-design/antd-migration-helper)

> CLI tool to aid in migrate antd from old version to newer version. It scans files for JSX code and provides detailed warnings when deprecated patterns are found. It cannot reliably catch every deprecation, but should get you 80% of the way there.

```bash
➜  my-antd-project git:(master) antd-migration-helper
...
226. `getFieldProps` 在 `antd@2.0` 中已经废弃，请使用 `getFieldDecorator`
  第 501 行：./src/containers/rulePlatform/RuleSetInput.jsx
  可以使用 [antd-codemod](https://github.com/ant-design/antd-codemod) 中的脚本 `getFieldProps-to-getFieldDecorator`自动重构 `getFieldProps` 为 `getFieldDecorator`。
  新用法示例：http://u.ant.design/get-field-decorator
  注意：由于无法保证 antd-codemod 修改的结果 100% 正确，所以务必 review 并测试修改后的代码。

227. `DatePicker` `MonthPicker` `RangePicker` `Calendar` 等时间类组件的 `format` 属性在 `antd@2.0` 之后改为 [moment](http://momentjs.com/) 的格式
  第 220 行：./src/containers/serviceComponent/NotifyRecord.jsx
  可以使用 [antd-codemod](https://github.com/ant-design/antd-codemod) 中的脚本 `time-related-value-to-moment`自动修改 `format` 格式为 moment 的格式。
  新用法示例：http://u.ant.design/date-picker-value
  注意：由于无法保证 antd-codemod 修改的结果 100% 正确，所以务必 review 并测试修改后的代码。
...
以上为 antd-migration-helper 在 ./src/ 内找到的已经废弃的用法。对于误报或者有无法扫描出来的情况，本地可以先忽略，然后到 GitHub 上提 issue：https://github.com/ant-design/antd-migration-helper/issues

完整不兼容改动列表及升级指南：https://ant.design/changelog-cn#2.x-不兼容改动
```

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

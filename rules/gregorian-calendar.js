'use strict';

function isGregorianCalendarAPI(methodName) {
  return [
    'setTime', 'getTime',
    'setTimezoneOffset', 'getTimezoneOffset',
    'setYear', 'getYear',
    'setMonth', 'rollSetMonth', 'getMonth',
    'setDayOfMonth', 'getDayOfMonth',
    'setHourOfDay', 'getHourOfDay',
    'setMinutes', 'getMinutes',
    'setSeconds', 'getSeconds',
    'setMilliSeconds', 'getMilliSeconds',
    'getWeekOfYear', 'getWeekOfMonth',
    'getDayOfYear', 'getDayOfWeek', 'getDayOfWeekInMonth',
    'addYear', 'addMonth', 'addDayOfMonth', 'addHourOfDay',
    'addMinute', 'addSecond', 'addMilliSecond', 'getWeekYear',
    'setWeekDate', 'getWeeksInWeekYear', 'compareToDay',
  ].indexOf(methodName) > -1;
}

module.exports = {
  traverser: {
    CallExpression(path) {
      if (path.node.callee.type !== 'MemberExpression') return;
      const methodName = path.node.callee.property.name;
      return isGregorianCalendarAPI(methodName);
    },
  },
  warning: function() {
    return {
      reason: '`DatePicker` `TimePicker` `Calendar` 等时间类组件的回调函数中的 GregorianCalendar 类型' +
        '在 `antd@2.0` 之后改为 [moment](http://momentjs.com/) 类型',
      tips: '1. `antd@2.0` 后内置了 moment，所以与时间相关的操作，都建议使用 moment，而非原生的 Date 对象或其它时间库\n' +
        '  2. 可以使用 [antd-codemod](https://github.com/ant-design/antd-codemod) 中的脚本 `GergorianCalendar-to-moment`' +
        '自动修改 GregorianCalendar 的 API 为 moment 的 API。亦可使用（但不建议） [antd-adapter](https://github.com/ant-design/antd-adapter)，' +
        '这样就可以像 `antd@1.x` 中那样使用时间类组件。',
      demo: 'http://u.ant.design/gg2moment',
      notice: '由于无法保证 antd-codemod 修改的结果 100% 正确，所以务必 review 并测试修改后的代码。',
    };
  },
};

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
      reason: 'GregorianCalendar has been replaced with [moment](http://momentjs.com/)',
      fix: 'Replace GregorianCalendar with moment',
      demo: 'http://u.ant.design/gg2moment',
    };
  },
};

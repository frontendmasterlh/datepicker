(function () {
  let datepicker = {};

  // 获取一个月的数据
  datepicker.getMonthData = function (year, month) {
    // 定义一个res数组，用来返回结果
    let res = [];

    // 参数判断，没有传递的情况下
    if (!year || !month) {
      // 使用当前日期
      let today = new Date();
      year = today.getFullYear();
      month = today.getMonth() + 1;
    }

    // 当前月的第一天
    let firstDay = new Date(year, month - 1, 1);
    // 看这个月的第一天是星期几，从而知道第一行的起始日期是哪一天
    let firstDayWeekDay = firstDay.getDay();
    // 简单处理周日的情况
    if (firstDayWeekDay === 0) firstDayWeekDay = 7;

    //  以当月第一天这个日期对象 获取年和月，防止处理越界
    year = firstDay.getFullYear();
    month = firstDay.getMonth() + 1;

    // 获取上月最后一天
    let lastDayOfLastMonth = new Date(year, month - 1, 0);
    let lastDateOfLastMonth = lastDayOfLastMonth.getDate();

    // 日历的第一行显示多少个上月的日期
    let preMonthDayCount = firstDayWeekDay - 1;

    // 当月的最后一天, month没有减1代表下个月
    let lastDay = new Date(year, month, 0);
    let lastDate = lastDay.getDate();

    // 获取一个月的数据
    for (let i = 0; i < 7 * 6; i++) {
      // 当月的日期，有可能是负值(上个月的日期)，有可能越界(下个月的日期)
      // 0代表上个月最后一天，1代表这个月1号
      let date = i + 1 - preMonthDayCount;
      //  显示的正确日期，默认值为date
      let showDate = date;
      let thisMonth = month;

      //  处理上一月和下一月
      if (date <= 0) {
        // 上一月
        thisMonth = month - 1;
        showDate = lastDateOfLastMonth + date;
      } else if (date > lastDate) {
        // 下一月
        thisMonth = month + 1;
        showDate = showDate - lastDate;
      }

      if (thisMonth === 0) thisMonth = 12;
      if (thisMonth === 13) thisMonth = 1;

      res.push({
        date: date,
        showDate: showDate,
        month: thisMonth,
      });
    }
    return {
      year: year,
      month: month,
      days: res,
    };
  };

  window.datepicker = datepicker;
})();

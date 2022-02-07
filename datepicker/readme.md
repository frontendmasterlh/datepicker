# 日期对象
- new Date(year, month - 1, date)
- 月份需要 - 1 月份范围[0,11]
- 越界自动进 （退）位
- getFullYear()/
- getMonth()获取月份是真是月份 减 1
- getDate() 获取哪一天
- getDay() 获取星期几 [1,2,3,4,5,6,0] 星期一到星期日

## 获取当月第一天
new Date(year, month - 1, 1)

## 获取当月最后一天
new Date(year, month, 0) 下个月的第0天，代表上个月最后一天
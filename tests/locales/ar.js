var timeago = require('../../');

module.exports = function(t) {
  var tm = timeago('2016-06-20 12:30:00', 'ar');
  tm.register('ar', require('../../locales/ar'));

  // test second
  t.equal(tm.format('2016-06-20 12:30:00'), 'منذ لحظات');
  t.equal(tm.format('2016-06-20 12:29:50'), 'منذ 10 ثوان');
  t.equal(tm.format('2016-06-20 12:29:39'), 'منذ 21 ثانية');
  t.equal(tm.format('2016-06-20 12:29:38'), 'منذ 22 ثانية');
  t.equal(tm.format('2016-06-20 12:30:01'), 'بعد لحظات');
  t.equal(tm.format('2016-06-20 12:30:10'), 'بعد 10 ثوان');
  t.equal(tm.format('2016-06-20 12:30:21'), 'بعد 21 ثانية');
  t.equal(tm.format('2016-06-20 12:30:22'), 'بعد 22 ثانية');

  // test minute
  t.equal(tm.format('2016-06-20 12:29:00'), 'منذ دقيقة');
  t.equal(tm.format('2016-06-20 12:28:00'), 'منذ دقيقتين');
  t.equal(tm.format('2016-06-20 12:25:00'), 'منذ 5 دقائق');
  t.equal(tm.format('2016-06-20 12:9:00'), 'منذ 21 دقيقة');
  t.equal(tm.format('2016-06-20 12:31:00'), 'بعد دقيقة');
  t.equal(tm.format('2016-06-20 12:32:00'), 'بعد دقيقتين');
  t.equal(tm.format('2016-06-20 12:35:00'), 'بعد 5 دقائق');
  t.equal(tm.format('2016-06-20 12:51:00'), 'بعد 21 دقيقة');
  
  // test hour
  t.equal(tm.format('2016-06-20 11:30:00'), 'منذ ساعة');
  t.equal(tm.format('2016-06-20 10:30:00'), 'منذ ساعتين');
  t.equal(tm.format('2016-06-20 7:30:00'), 'منذ 5 ساعات');
  t.equal(tm.format('2016-06-19 15:30:00'), 'منذ 21 ساعة');
  t.equal(tm.format('2016-06-20 13:30:00'), 'بعد ساعة');
  t.equal(tm.format('2016-06-20 14:30:00'), 'بعد ساعتين');
  t.equal(tm.format('2016-06-20 17:30:00'), 'بعد 5 ساعات');
  t.equal(tm.format('2016-06-21 9:30:00'), 'بعد 21 ساعة');

  // test day
  t.equal(tm.format('2016-06-19 12:30:00'), 'منذ يوم');
  t.equal(tm.format('2016-06-18 12:30:00'), 'منذ يومين');
  t.equal(tm.format('2016-06-15 12:30:00'), 'منذ 5 أيام');
  t.equal(tm.format('2016-06-21 12:30:00'), 'بعد يوم');
  t.equal(tm.format('2016-06-22 12:30:00'), 'بعد يومين');
  t.equal(tm.format('2016-06-25 12:30:00'), 'بعد 5 أيام');

  // test week
  t.equal(tm.format('2016-06-13 12:30:00'), 'منذ أسبوع');
  t.equal(tm.format('2016-06-06 12:30:00'), 'منذ أسبوعين');
  t.equal(tm.format('2016-05-30 12:30:00'), 'منذ 3 أسابيع');
  t.equal(tm.format('2016-06-27 12:30:00'), 'بعد أسبوع');
  t.equal(tm.format('2016-07-04 12:30:00'), 'بعد أسبوعين');
  t.equal(tm.format('2016-07-11 12:30:00'), 'بعد 3 أسابيع');

  // test month
  t.equal(tm.format('2016-05-20 12:30:00'), 'منذ شهر');
  t.equal(tm.format('2016-04-20 12:30:00'), 'منذ شهرين');
  t.equal(tm.format('2016-01-19 12:30:00'), 'منذ 5 أشهر');
  t.equal(tm.format('2015-07-19 12:30:00'), 'منذ 11 شهر');
  t.equal(tm.format('2016-07-21 12:30:00'), 'بعد شهر');
  t.equal(tm.format('2016-08-20 12:30:00'), 'بعد شهرين');
  t.equal(tm.format('2016-11-20 12:30:00'), 'بعد 5 أشهر');
  t.equal(tm.format('2017-05-21 12:30:00'), 'بعد 11 شهر');

  // test year
  t.equal(tm.format('2015-06-20 12:30:00'), 'منذ سنة');
  t.equal(tm.format('2014-06-20 12:30:00'), 'منذ سنتين');
  t.equal(tm.format('2011-06-20 12:30:00'), 'منذ 5 سنين');
  t.equal(tm.format('1995-06-20 12:30:00'), 'منذ 21 سنة');
  t.equal(tm.format('2017-06-20 12:30:00'), 'بعد سنة');
  t.equal(tm.format('2018-06-20 12:30:00'), 'بعد سنتين');
  t.equal(tm.format('2021-06-20 12:30:00'), 'بعد 5 سنين');
  t.equal(tm.format('2037-06-20 12:30:00'), 'بعد 21 سنة');
};
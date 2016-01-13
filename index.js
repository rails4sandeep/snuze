'use strict';

module.exports = {
  snooze: function (millisec, countDown) {
    var start = Date.now();
    var end = Date.now();
    var elapsed = start - end;

    while (elapsed < millisec) {
      end = Date.now();
      elapsed = end - start;
      if (elapsed < millisec) {
        if (countDown) {
          process.stdout.write((elapsed - millisec) + "\r");
        }
      } else {
        break;
      }
    }
  }
}

(function () {

  // `window` in the browser, `exports` on the server.
  var root = this;

  var althyk = {};

  if (typeof exports !== 'undefined') {
    if (typeof module !== 'undefined' && module.exports) {
      exports = module.exports = althyk;
    }
    exports.althyk = althyk;
  } else {
    root.althyk = althyk;
  }

  var DATE_2_ET = 3600 / 175;

  althyk.date2et = function (date) {
    var epochEt = date.getTime() * DATE_2_ET;
    return {
      epoch: epochEt,
      milliseconds: Math.round((epochEt % 1000) / 100),
      seconds: Math.floor(epochEt / 1000) % 60,
      minutes: Math.floor(epochEt / (1000 * 60)) % 60,
      hours: Math.floor(epochEt / (1000 * 60 * 60)) % 24
    };
  };

  althyk.getEt = function () {
    return althyk.date2et(new Date());
  };

  if (typeof define === 'function' && define.amd) {
    define('underscore', [], function() {
      return althyk;
    });
  }

}.call(this));

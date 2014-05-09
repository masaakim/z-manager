
var z_index = require('css-z');
var parse = require('css-parse');

module.exports = Zmanager;

function Zmanager (css, options) {
  if (!(this instanceof Zmanager)) {
    return new Zmanager(css, options);
  }

  options = options || {};

  this.css = css;
  this.ast = parse(css);
};

Zmanager.prototype.create = function () {
  var stats = z_index.stats(this.css);
  var zmanagerc = {};
  var num = 1;

  stats.forEach(function (s) {
    if (s.value !== 'auto') {
      zmanagerc[num++] = s.selector;
    }
  });

  return zmanagerc;
};

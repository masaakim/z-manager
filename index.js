
var z_index = require('css-z');
var parse = require('css-parse');

module.exports = Zmanager;

function Zmanager (css, options) {
  if (!(this instanceof Yacp)) {
    return new Zmanager(css, options);
  }

  options = options || {};

  this.css = css;
  this.ast = parse(css);
};

Zmanager.prototype.create = function () {
  var stats = z_index.stats(this.css);
  var selectors = [];
  stats.forEach(function (s) {
    if (s.value !== 'auto') {
      selectors.push(s.selector);
    }
  });

};

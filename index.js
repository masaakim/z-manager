
var z_index = require('css-z');
var parse = require('css-parse');
var stringify = require('css-stringify');
var inspector = require('obj-inspector');

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

Zmanager.prototype.adapt = function (zmanagerc) {
  var ast = parse(this.css);
  var z_selectors = [];
  var zmanagerc = JSON.parse(zmanagerc);
  var z_num = getPropNum(zmanagerc);

  for (var i = 1; i <= z_num; i++) {
    var key = '' + i;
    z_selectors.push(zmanagerc[key]);
  }

  z_selectors.forEach(function (z_selector) {
    ast.stylesheet.rules.forEach(function visit (rule) {
      if (rule.rules) rule.rules.forEach(visit);

      if (rule.selectors.toString() === z_selector) {
        rule.declarations.forEach(function (declaration) {
          if (declaration.property === 'z-index') {
            if (declaration.value === 'auto') return;

            declaration.value ='' + z_num--;
          }
        });
      }
    });
  });

  return stringify(ast);
};

function getPropNum (obj) {
  var len = 0;
  for (var key in obj) {
    if (obj.hasOwnProperty(key)) ++len;
  }
  return len;
};

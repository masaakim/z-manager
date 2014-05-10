
var fs = require('fs');
var test = require('colored-tape');
var Zmanager = require('../');

function fixture (name) {
  return fs.readFileSync('test/fixtures/' + name + '.css', 'utf-8').trim();
}

test('create', function (t) {
  var z = new Zmanager(fixture('z-index'));

  var result = z.create();
  var expected = {
    "1": ".z1",
    "2": ".z2",
    "3": ".z3",
    "4": ".z4"
  };

  t.same(result, expected);

  t.end();
});

test('manage', function (t) {
  var z = new Zmanager(fixture('z-index'));

  var zmanagerc = {
    "1": ".z4",
    "2": ".z2",
    "3": ".z1",
    "4": ".z3"
  };

  var result = z.manage(zmanagerc);
  var expected = fixture('z-manage-result');

  t.same(result, expected);

  t.end();
});

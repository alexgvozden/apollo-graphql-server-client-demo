'use strict';

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var PORT = 4000;

var server = (0, _express2.default)();

server.get('/', function (req, res) {
  res.send('Hello World!');
});

server.listen(PORT, function () {
  return console.log('GraphQL Server is now running on http://localhost:' + PORT);
});
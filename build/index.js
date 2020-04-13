"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _dotenv = _interopRequireDefault(require("dotenv"));

var _express = _interopRequireDefault(require("express"));

var _bodyParser = _interopRequireDefault(require("body-parser"));

var _ContactRoutes = _interopRequireDefault(require("./server/routes/ContactRoutes"));

_dotenv["default"].config();

var app = (0, _express["default"])();
app.use(_bodyParser["default"].json());
app.use(_bodyParser["default"].urlencoded({
  extended: false
}));
var port = process.env.PORT || 8000;
app.use('/api/v1/contacts', _ContactRoutes["default"]);
app.get('*', function (req, res) {
  return res.status(200).send({
    message: 'Welcome to the New Edge API.'
  });
});
app.listen(port, /*#__PURE__*/(0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee() {
  return _regenerator["default"].wrap(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          console.log("Server is running on PORT ".concat(port, " \uD83C\uDF89"));

        case 1:
        case "end":
          return _context.stop();
      }
    }
  }, _callee);
})));
var _default = app;
exports["default"] = _default;
//# sourceMappingURL=index.js.map
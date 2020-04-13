"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _models = _interopRequireDefault(require("../src/models"));

var ContactService = /*#__PURE__*/function () {
  function ContactService() {
    (0, _classCallCheck2["default"])(this, ContactService);
  }

  (0, _createClass2["default"])(ContactService, null, [{
    key: "getAllContacts",
    value: function () {
      var _getAllContacts = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee() {
        return _regenerator["default"].wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.prev = 0;
                _context.next = 3;
                return _models["default"].Contact.findAll();

              case 3:
                return _context.abrupt("return", _context.sent);

              case 6:
                _context.prev = 6;
                _context.t0 = _context["catch"](0);
                throw _context.t0;

              case 9:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, null, [[0, 6]]);
      }));

      function getAllContacts() {
        return _getAllContacts.apply(this, arguments);
      }

      return getAllContacts;
    }()
  }, {
    key: "addContact",
    value: function () {
      var _addContact = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2(newContact) {
        return _regenerator["default"].wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.prev = 0;
                _context2.next = 3;
                return _models["default"].Contact.create(newContact);

              case 3:
                return _context2.abrupt("return", _context2.sent);

              case 6:
                _context2.prev = 6;
                _context2.t0 = _context2["catch"](0);
                throw _context2.t0;

              case 9:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, null, [[0, 6]]);
      }));

      function addContact(_x) {
        return _addContact.apply(this, arguments);
      }

      return addContact;
    }()
  }, {
    key: "updateContact",
    value: function () {
      var _updateContact2 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee3(id, _updateContact) {
        var contactToUpdate;
        return _regenerator["default"].wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                _context3.prev = 0;
                _context3.next = 3;
                return _models["default"].Contact.findOne({
                  where: {
                    id: Number(id)
                  }
                });

              case 3:
                contactToUpdate = _context3.sent;

                if (!contactToUpdate) {
                  _context3.next = 8;
                  break;
                }

                _context3.next = 7;
                return _models["default"].Contact.update(_updateContact, {
                  where: {
                    id: Number(id)
                  }
                });

              case 7:
                return _context3.abrupt("return", _updateContact);

              case 8:
                return _context3.abrupt("return", null);

              case 11:
                _context3.prev = 11;
                _context3.t0 = _context3["catch"](0);
                throw _context3.t0;

              case 14:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3, null, [[0, 11]]);
      }));

      function updateContact(_x2, _x3) {
        return _updateContact2.apply(this, arguments);
      }

      return updateContact;
    }()
  }, {
    key: "getAContact",
    value: function () {
      var _getAContact = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee4(id) {
        var theContact;
        return _regenerator["default"].wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                _context4.prev = 0;
                _context4.next = 3;
                return _models["default"].Contact.findOne({
                  where: {
                    id: Number(id)
                  }
                });

              case 3:
                theContact = _context4.sent;
                return _context4.abrupt("return", theContact);

              case 7:
                _context4.prev = 7;
                _context4.t0 = _context4["catch"](0);
                throw _context4.t0;

              case 10:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4, null, [[0, 7]]);
      }));

      function getAContact(_x4) {
        return _getAContact.apply(this, arguments);
      }

      return getAContact;
    }()
  }, {
    key: "deleteContact",
    value: function () {
      var _deleteContact = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee5(id) {
        var contactToDelete, deletedContact;
        return _regenerator["default"].wrap(function _callee5$(_context5) {
          while (1) {
            switch (_context5.prev = _context5.next) {
              case 0:
                _context5.prev = 0;
                _context5.next = 3;
                return _models["default"].Contact.findOne({
                  where: {
                    id: Number(id)
                  }
                });

              case 3:
                contactToDelete = _context5.sent;

                if (!contactToDelete) {
                  _context5.next = 9;
                  break;
                }

                _context5.next = 7;
                return _models["default"].Contact.destroy({
                  where: {
                    id: Number(id)
                  }
                });

              case 7:
                deletedContact = _context5.sent;
                return _context5.abrupt("return", deletedContact);

              case 9:
                return _context5.abrupt("return", null);

              case 12:
                _context5.prev = 12;
                _context5.t0 = _context5["catch"](0);
                throw _context5.t0;

              case 15:
              case "end":
                return _context5.stop();
            }
          }
        }, _callee5, null, [[0, 12]]);
      }));

      function deleteContact(_x5) {
        return _deleteContact.apply(this, arguments);
      }

      return deleteContact;
    }()
  }]);
  return ContactService;
}();

var _default = ContactService;
exports["default"] = _default;
//# sourceMappingURL=ContactService.js.map
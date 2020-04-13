"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _ContactService = _interopRequireDefault(require("../services/ContactService"));

var _Util = _interopRequireDefault(require("../utils/Util"));

var util = new _Util["default"]();

var ContactController = /*#__PURE__*/function () {
  function ContactController() {
    (0, _classCallCheck2["default"])(this, ContactController);
  }

  (0, _createClass2["default"])(ContactController, null, [{
    key: "getAllContacts",
    value: function () {
      var _getAllContacts = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(req, res) {
        var allContacts;
        return _regenerator["default"].wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.prev = 0;
                _context.next = 3;
                return _ContactService["default"].getAllContacts();

              case 3:
                allContacts = _context.sent;

                if (allContacts.length > 0) {
                  util.setSuccess(200, 'Contacts retrieved', allContacts);
                } else {
                  util.setSuccess(200, 'No contacts found');
                }

                return _context.abrupt("return", util.send(res));

              case 8:
                _context.prev = 8;
                _context.t0 = _context["catch"](0);
                util.setError(400, _context.t0);
                return _context.abrupt("return", util.send(res));

              case 12:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, null, [[0, 8]]);
      }));

      function getAllContacts(_x, _x2) {
        return _getAllContacts.apply(this, arguments);
      }

      return getAllContacts;
    }()
  }, {
    key: "addContact",
    value: function () {
      var _addContact = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2(req, res) {
        var newContact, createdContact;
        return _regenerator["default"].wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                if (!(!req.body.firstname || !req.body.lastname)) {
                  _context2.next = 3;
                  break;
                }

                util.setError(400, 'Please provide complete details');
                return _context2.abrupt("return", util.send(res));

              case 3:
                newContact = req.body;
                _context2.prev = 4;
                _context2.next = 7;
                return _ContactService["default"].addContact(newContact);

              case 7:
                createdContact = _context2.sent;
                util.setSuccess(201, 'Contact Added!', createdContact);
                return _context2.abrupt("return", util.send(res));

              case 12:
                _context2.prev = 12;
                _context2.t0 = _context2["catch"](4);
                util.setError(400, _context2.t0.message);
                return _context2.abrupt("return", util.send(res));

              case 16:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, null, [[4, 12]]);
      }));

      function addContact(_x3, _x4) {
        return _addContact.apply(this, arguments);
      }

      return addContact;
    }()
  }, {
    key: "updatedContact",
    value: function () {
      var _updatedContact = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee3(req, res) {
        var alteredContact, id, updateContact;
        return _regenerator["default"].wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                alteredContact = req.body;
                id = req.params.id;

                if (Number(id)) {
                  _context3.next = 5;
                  break;
                }

                util.setError(400, 'Please input a valid numeric value');
                return _context3.abrupt("return", util.send(res));

              case 5:
                _context3.prev = 5;
                _context3.next = 8;
                return _ContactService["default"].updateContact(id, alteredContact);

              case 8:
                updateContact = _context3.sent;

                if (!updateContact) {
                  util.setError(404, "Cannot find contact with the id ".concat(id));
                } else {
                  util.setSuccess(200, 'Contact Updated', updateContact);
                }

                return _context3.abrupt("return", util.send(res));

              case 13:
                _context3.prev = 13;
                _context3.t0 = _context3["catch"](5);
                util.setError(404, _context3.t0);
                return _context3.abrupt("return", util.send(res));

              case 17:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3, null, [[5, 13]]);
      }));

      function updatedContact(_x5, _x6) {
        return _updatedContact.apply(this, arguments);
      }

      return updatedContact;
    }()
  }, {
    key: "getAContact",
    value: function () {
      var _getAContact = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee4(req, res) {
        var id, theContact;
        return _regenerator["default"].wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                id = req.params.id;

                if (Number(id)) {
                  _context4.next = 4;
                  break;
                }

                util.setError(400, 'Please input a valid numeric value');
                return _context4.abrupt("return", util.send(res));

              case 4:
                _context4.prev = 4;
                _context4.next = 7;
                return _ContactService["default"].getAContact(id);

              case 7:
                theContact = _context4.sent;

                if (!theContact) {
                  util.setError(404, "Cannot find contact with the id ".concat(id));
                } else {
                  util.setSuccess(200, 'Found Contact', theContact);
                }

                return _context4.abrupt("return", util.send(res));

              case 12:
                _context4.prev = 12;
                _context4.t0 = _context4["catch"](4);
                util.setError(404, _context4.t0);
                return _context4.abrupt("return", util.send(res));

              case 16:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4, null, [[4, 12]]);
      }));

      function getAContact(_x7, _x8) {
        return _getAContact.apply(this, arguments);
      }

      return getAContact;
    }()
  }, {
    key: "deleteContact",
    value: function () {
      var _deleteContact = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee5(req, res) {
        var id, contactToDelete;
        return _regenerator["default"].wrap(function _callee5$(_context5) {
          while (1) {
            switch (_context5.prev = _context5.next) {
              case 0:
                id = req.params.id;

                if (Number(id)) {
                  _context5.next = 4;
                  break;
                }

                util.setError(400, 'Please provide a numeric value');
                return _context5.abrupt("return", util.send(res));

              case 4:
                _context5.prev = 4;
                _context5.next = 7;
                return _ContactService["default"].deleteContact(id);

              case 7:
                contactToDelete = _context5.sent;

                if (contactToDelete) {
                  util.setSuccess(200, 'Contact Deleted');
                } else {
                  util.setError(404, "Contact with the id ".concat(id, " cannot be found"));
                }

                return _context5.abrupt("return", util.send(res));

              case 12:
                _context5.prev = 12;
                _context5.t0 = _context5["catch"](4);
                util.setError(400, _context5.t0);
                return _context5.abrupt("return", util.send(res));

              case 16:
              case "end":
                return _context5.stop();
            }
          }
        }, _callee5, null, [[4, 12]]);
      }));

      function deleteContact(_x9, _x10) {
        return _deleteContact.apply(this, arguments);
      }

      return deleteContact;
    }()
  }]);
  return ContactController;
}();

module.exports = ContactController;
//# sourceMappingURL=ContactController.js.map
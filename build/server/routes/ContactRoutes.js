"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = require("express");

var _ContactController = _interopRequireDefault(require("../controllers/ContactController"));

var router = (0, _express.Router)();
router.get('/', _ContactController["default"].getAllContacts);
router.post('/', _ContactController["default"].addContact);
router.get('/:id', _ContactController["default"].getAContact);
router.put('/:id', _ContactController["default"].updatedContact);
router["delete"]('/:id', _ContactController["default"].deleteContact);
var _default = router;
exports["default"] = _default;
//# sourceMappingURL=ContactRoutes.js.map
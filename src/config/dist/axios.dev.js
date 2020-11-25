"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _axios = _interopRequireDefault(require("axios"));

var _localStorage = _interopRequireDefault(require("../services/localStorage"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

_axios["default"].defaults.baseURL = "http://localhost:5555";

_axios["default"].interceptors.request.use(function (config) {
  if (config.url.includes("/login") || config.url.includes("/register")) {
    return config;
  }

  var token = _localStorage["default"].getToken();

  config.headers["Authorization"] = "Bearer ".concat(token);
  return config;
}, function (err) {
  throw err;
});

var _default = _axios["default"];
exports["default"] = _default;
"use strict";
exports.__esModule = true;
exports.config = void 0;
var fs = require("fs");
var content = fs.readFileSync("./config.json", 'utf8');
exports.config = JSON.parse(content);

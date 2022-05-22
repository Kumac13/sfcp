"use strict";
exports.__esModule = true;
exports.readConfig = void 0;
var fs = require("fs");
var readConfig = function (path) {
    var content = fs.readFileSync(path, "utf8");
    var config = JSON.parse(content);
    return config;
};
exports.readConfig = readConfig;

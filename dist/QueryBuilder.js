"use strict";
exports.__esModule = true;
exports.QueryBuilder = void 0;
var Config_1 = require("./Config");
var QueryBuilder = /** @class */ (function () {
    function QueryBuilder(input) {
        this.input = input;
    }
    QueryBuilder.prototype.call = function () {
        var queryConfig = this.getConfig();
        var selectedQuery = this.querySelect(queryConfig);
        var query = this.creatQuery(selectedQuery, queryConfig.limit);
        return query;
    };
    QueryBuilder.prototype.getConfig = function () {
        var queryConfig = Config_1.readConfig("./queryConfig.json");
        return queryConfig;
    };
    QueryBuilder.prototype.querySelect = function (queryConfig) {
        var queryConditions = queryConfig.queryConditions;
        var queryCondition = { key: "", object: "", condition: "" };
        for (var _i = 0, queryConditions_1 = queryConditions; _i < queryConditions_1.length; _i++) {
            var condition = queryConditions_1[_i];
            if (this.input == condition.key) {
                queryCondition = condition;
                return queryCondition;
            }
        }
        return queryCondition;
    };
    QueryBuilder.prototype.creatQuery = function (queryConidition, limit) {
        var result = "SELECT Id, Name FROM " + queryConidition.object + " " + queryConidition.condition + " Limit " + limit;
        return result;
    };
    return QueryBuilder;
}());
exports.QueryBuilder = QueryBuilder;

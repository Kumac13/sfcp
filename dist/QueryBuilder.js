import { readConfig } from "./Config.js";
export class QueryBuilder {
    constructor(input) {
        this.input = input;
    }
    call() {
        let queryConfig = this.getConfig();
        let selectedQuery = this.querySelect(queryConfig);
        let query = this.creatQuery(selectedQuery, queryConfig.limit);
        return query;
    }
    getConfig() {
        let queryConfig = readConfig("./queryConfig.json");
        return queryConfig;
    }
    querySelect(queryConfig) {
        let queryConditions = queryConfig.queryConditions;
        let queryCondition = { key: "", object: "", condition: "" };
        for (let condition of queryConditions) {
            if (this.input == condition.key) {
                queryCondition = condition;
                return queryCondition;
            }
        }
        return queryCondition;
    }
    creatQuery(queryConidition, limit) {
        let result = `SELECT Id, Name FROM ${queryConidition.object} ${queryConidition.condition} Limit ${limit}`;
        return result;
    }
}

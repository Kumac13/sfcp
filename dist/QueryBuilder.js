import { readConfig } from "./Config.js";
export class QueryBuilder {
    constructor(input) {
        this.input = input;
    }
    call() {
        let queryConfig = this.getConfig();
        let selectedQuery = this.querySelect(queryConfig);
        if (selectedQuery == null) {
            return null;
        }
        return {
            query: this.creatQuery(selectedQuery, queryConfig.limit),
            object: selectedQuery.object
        };
    }
    getConfig() {
        let queryConfig = readConfig("./queryConfig.json");
        return queryConfig;
    }
    querySelect(queryConfig) {
        let result = null;
        let queryConditions = queryConfig.queryConditions;
        for (let condition of queryConditions) {
            if (this.input == condition.key) {
                result = condition;
                return result;
            }
        }
        return result;
    }
    creatQuery(queryConidition, limit) {
        let result = `SELECT Id, Name FROM ${queryConidition.object} ${queryConidition.condition} Limit ${limit}`;
        return result;
    }
}

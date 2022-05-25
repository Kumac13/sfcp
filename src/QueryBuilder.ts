import { readConfig } from "./Config.js";

type QueryCondition = {
  key: string;
  object: string;
  condition: string;
};

type QueryConfig = {
  limit: number;
  queryConditions: Array<QueryCondition>;
};

type Query = {
  isQueryExist: boolean;
  query: string;
  object: string;
};

export class QueryBuilder {
  constructor(private readonly input: string) {}

  public call(): Query {
    let result = {
      isQueryExist: false,
      query: '',
      object: "Account",
    };
    let queryConfig = this.getConfig();
    let selectedQuery = this.querySelect(queryConfig);
    if (selectedQuery !== null) {
      result.query = this.creatQuery(selectedQuery, queryConfig.limit);
      result.isQueryExist = true
    }
    return result;
  }

  private getConfig(): QueryConfig {
    let queryConfig = readConfig("./queryConfig.json");
    return queryConfig;
  }

  private querySelect(queryConfig: QueryConfig): QueryCondition | null {
    let queryConditions: Array<QueryCondition> = queryConfig.queryConditions;
    let queryCondition: QueryCondition = { key: "", object: "", condition: "" };
    for (let condition of queryConditions) {
      if (this.input == condition.key) {
        queryCondition = condition;
        return queryCondition;
      } else {
        return null
      }
    }
    return queryCondition;
  }

  private creatQuery(queryConidition: QueryCondition, limit: number): string {
    let result = `SELECT Id, Name FROM ${queryConidition.object} ${queryConidition.condition} Limit ${limit}`;
    return result;
  }
}

import { readConfig } from "./Config";

type QueryCondition = {
  key: string;
  object: string;
  condition: string;
};

type QueryConfig = {
  limit: number;
  queryConditions: Array<QueryCondition>;
};

export class QueryBuilder {
  constructor(private readonly input: string) {}

  public call(): string {
    let queryConfig = this.getConfig();
    let selectedQuery = this.querySelect(queryConfig);
    let query = this.creatQuery(selectedQuery, queryConfig.limit);
    return query;
  }

  private getConfig(): QueryConfig {
    let queryConfig = readConfig("./queryConfig.json");
    return queryConfig;
  }

  private querySelect(queryConfig: QueryConfig): QueryCondition {
    let queryConditions: Array<QueryCondition> = queryConfig.queryConditions;
    let queryCondition: QueryCondition = { key: "", object: "", condition: "" };
    for (let condition of queryConditions) {
      if (this.input == condition.key) {
        queryCondition = condition;
        return queryCondition;
      }
    }
    return queryCondition;
  }

  private creatQuery(queryConidition: QueryCondition, limit: number): string {
    let result = `SELECT Id, Name FROM ${queryConidition.object} ${queryConidition.condition} Limit ${limit}`;
    return result;
  }
}

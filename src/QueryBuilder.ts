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
  query: string;
  object: string;
};

export class QueryBuilder {
  constructor(private readonly input: string) {}

  public call(): Query | null{
    const queryConfig = this.getConfig();
    const selectedQuery = this.querySelect(queryConfig);
    if(selectedQuery == null){
      return null;
    }
    return {
      query: this.creatQuery(selectedQuery, queryConfig.limit),
      object: selectedQuery.object
    };
  }

  private getConfig(): QueryConfig {
    let queryConfig = readConfig("./queryConfig.json");
    return queryConfig;
  }

  private querySelect(queryConfig: QueryConfig): QueryCondition | null{
    let result: QueryCondition | null = null
    const queryConditions: Array<QueryCondition> = queryConfig.queryConditions;
    for (let condition of queryConditions) {
      if (this.input == condition.key) {
        result = condition;
        return result;
      }
    }
    return result;
  }

  private creatQuery(queryConidition: QueryCondition, limit: number): string {
    const result = `SELECT Id, Name FROM ${queryConidition.object} ${queryConidition.condition} Limit ${limit}`;
    return result;
  }
}

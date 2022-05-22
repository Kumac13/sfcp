import { Salesforce }   from "./Salesforce";
import { QueryBuilder } from "./QueryBuilder";
import alfy from "alfy"

(async () => {
  // Alfredからinputを受け取る

  // inputからQueryを作る
  let queryBuilder = new QueryBuilder("sample");
  let query = queryBuilder.call();

  // SalesforceにQuueryを渡して結果を得る
  let salesforce = new Salesforce();
  await salesforce.set();
  let result = await salesforce.call(query);

  // Alfredに結果を表示
  console.log(result);
})();

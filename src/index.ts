import { Salesforce } from "./Salesforce.js";
import { QueryBuilder } from "./QueryBuilder.js";
import alfy from "alfy";

(async () => {
  if (alfy.input.length > 0) {
    let queryBuilder = new QueryBuilder(alfy.input);
    let query = queryBuilder.call();
    let object = query.object;

    if(!query.isQueryExist){
      alfy.output([{ title: "The key is no exit...", subtitle: "", arg: "" }]);
      return;
    }
    let salesforce = new Salesforce();
    await salesforce.set();
    let result = await salesforce.call(query.query);

    alfy.output(
      result.map((x) => ({
        title: x.Name,
        subtitle: x.Id,
        arg: `https://teamspirit-2987.lightning.force.com/lightning/r/${object}/${x.Id}/view`,
      }))
    );
  } else {
    alfy.output([{ title: "Waiting...", subtitle: "", arg: "" }]);
  }
})();

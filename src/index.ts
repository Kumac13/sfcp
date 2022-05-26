import { Salesforce } from "./Salesforce.js";
import { QueryBuilder } from "./QueryBuilder.js";
import alfy from "alfy";

(async () => {
  if (alfy.input.length > 0) {
    const queryBuilder = new QueryBuilder(alfy.input);
    const query = queryBuilder.call();
    if (query == null) {
      alfy.output([{ title: "The key is no exit...", subtitle: "", arg: "" }]);
      return;
    }
    const object = query.object;

    const salesforce = await Salesforce.initializeAndLogin();
    const result = await salesforce.call(query.query);

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

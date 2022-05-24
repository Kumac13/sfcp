import { Salesforce } from "./Salesforce.js";
import { QueryBuilder } from "./QueryBuilder.js";
import alfy from "alfy";
(async () => {
    // Alfredからinputを受け取る
    if (alfy.input.length > 0) {
        let queryBuilder = new QueryBuilder(alfy.input);
        let query = queryBuilder.call();
        // SalesforceにQueryを渡して結果を得る
        let salesforce = new Salesforce();
        await salesforce.set();
        let result = await salesforce.call(query);
        let object = "Account";
        // Alfredに結果を表示
        alfy.output(result.map((x) => ({
            title: x.Name,
            subtitle: x.Id,
            arg: `https://teamspirit-2987.lightning.force.com/lightning/r/${object}/${x.Id}/view`,
        })));
    }
    else {
        alfy.output([{ title: "Waiting...", subtitle: "", arg: "" }]);
    }
})();

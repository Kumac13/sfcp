import jsforce from "jsforce";
import { readConfig } from "./Config.js";
export class Salesforce {
    constructor() {
        this.conn = new jsforce.Connection({ loginUrl: "https://login.salesforce.com" });
        this.userConfig = readConfig("./config.json");
    }
    async set() {
        await this.login();
    }
    async call(query) {
        const queryResult = await this.conn.query(query);
        let records = queryResult["records"];
        return records;
    }
    async login() {
        await this.conn.login(this.userConfig.username, this.userConfig.password);
    }
}

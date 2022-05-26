import jsforce from "jsforce";
import { readConfig } from "./Config.js";
export class Salesforce {
    constructor() {
        this.conn = new jsforce.Connection({
            loginUrl: "https://login.salesforce.com",
        });
        this.userConfig = readConfig("./config.json");
    }
    static async initializeAndLogin() {
        const salesforce = new Salesforce();
        await salesforce.login();
        return salesforce;
    }
    async call(query) {
        const queryResult = await this.conn.query(query);
        const records = queryResult["records"];
        return records;
    }
    async login() {
        await this.conn.login(this.userConfig.username, this.userConfig.password);
    }
}

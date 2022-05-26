import jsforce from "jsforce";
import { readConfig } from "./Config.js"

type UserConfig = {
  username: string;
  password: string;
};


export class Salesforce {
  private conn: jsforce.Connection;
  private userConfig: UserConfig;

  private constructor() {
    this.conn = new jsforce.Connection({loginUrl: "https://login.salesforce.com"})
    this.userConfig  = readConfig("./config.json")
  }

  public static async initializeAndLogin(): Promise<Salesforce>{
    const salesforce = new Salesforce()
    await salesforce.login()
    return salesforce;
  }

  public async set(){
    await this.login();
  }

  public async call(query: string): Promise<any[]> {
    const queryResult = await this.conn.query(query);
    const records: any[] = queryResult["records"];
    return records;
  }

  private async login() {
    await this.conn.login(this.userConfig.username, this.userConfig.password);
  }


}


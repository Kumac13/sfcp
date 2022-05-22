import { Connection } from "jsforce";
import { readConfig } from "./Config"

type UserConfig = {
  username: string;
  password: string;
};


export class Salesforce {
  private conn: Connection;
  private userConfig: UserConfig;

  constructor() {
    this.conn = new Connection({loginUrl: "https://login.salesforce.com"})
    this.userConfig  = readConfig("./config.json")
  }

  public async set(){
    await this.login();
  }

  public async call(query: string): Promise<any[]> {
    const queryResult = await this.conn.query(query);
    let records: any[] = queryResult["records"];
    return records;
  }

  private async login() {
    await this.conn.login(this.userConfig.username, this.userConfig.password);
  }


}


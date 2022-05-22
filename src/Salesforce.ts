import { config } from "./Config";
import { Connection } from "jsforce";

type UserConfig = {
  username: string;
  password: string;
};


export class Salesforce {
  private conn: Connection;

  constructor(private readonly config: UserConfig) {
    this.conn = new Connection({loginUrl: "https://login.salesforce.com"})
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
    await this.conn.login(this.config.username, this.config.password);
  }


}


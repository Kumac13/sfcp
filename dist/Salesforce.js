var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { Connection } from "jsforce";
import { readConfig } from "./Config";
export class Salesforce {
    constructor() {
        this.conn = new Connection({ loginUrl: "https://login.salesforce.com" });
        this.userConfig = readConfig("./config.json");
    }
    set() {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.login();
        });
    }
    call(query) {
        return __awaiter(this, void 0, void 0, function* () {
            const queryResult = yield this.conn.query(query);
            let records = queryResult["records"];
            return records;
        });
    }
    login() {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.conn.login(this.userConfig.username, this.userConfig.password);
        });
    }
}

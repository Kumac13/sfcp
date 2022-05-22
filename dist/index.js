var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { Salesforce } from "./Salesforce";
import { QueryBuilder } from "./QueryBuilder";
(() => __awaiter(void 0, void 0, void 0, function* () {
    // Alfredからinputを受け取る
    // inputからQueryを作る
    let queryBuilder = new QueryBuilder("sample");
    let query = queryBuilder.call();
    // SalesforceにQuueryを渡して結果を得る
    let salesforce = new Salesforce();
    yield salesforce.set();
    let result = yield salesforce.call(query);
    // Alfredに結果を表示
    console.log(result);
}))();

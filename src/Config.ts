import * as fs from "fs";
var content = fs.readFileSync("./config.json", 'utf8');
export const config = JSON.parse(content);


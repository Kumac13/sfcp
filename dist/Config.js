import * as fs from "fs";
export const readConfig = (path) => {
    const content = fs.readFileSync(path, "utf8");
    const config = JSON.parse(content);
    return config;
};

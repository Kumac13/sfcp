# sfqb

## Install
- clone this repository
- install packages
```fish
npm install
```
- setup alfred workflow
```fish
npx alfy-init
```
- create config file
  - config.json
```json
{
  "username": "your username",
  "password": "your password"
}
```
 - queryConfig.json
```json
{
  "limit": 5,
  "queryConditions": [
    {
      "key": "sample",
      "object": "Account",
      "condition": "ORDER BY CreatedDate DESC"
    }
    ]
}
```




# sfcp
sfcp is workflow for Alfred.
You can retrieve sample Salesforce records using a pre-prepared query list.

## Install

- clone this repository
- install npm packages

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

- queryConfig.json: configuration for query list
  - limit: you can chose query limit
  - queryConditions: object for creating SOQL query
    - key: key for Alfred input (ex: `sfcp sample`)
    - object: SObject for SOQL query
    - condition: condition for SOQL query. You can only use `WHERE` and `ORDER`

```json
{
  "limit": 5,
  "queryConditions": [
    {
      "key": "sample",
      "object": "Account",
      "condition": "ORDER BY CreatedDate DESC"
    },
    {
      "key": "sample2",
      "object": "Contact",
      "condition": "WHERE LastName LIKE 'John' ORDER BY CreatedDate DESC"
    }
  ]
}
```

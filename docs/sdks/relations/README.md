# Relations
(*relations*)

### Available Operations

* [createRelation](#createrelation) - Create a relation
* [deleteRelation](#deleterelation) - Delete a relation
* [getRelation](#getrelation) - Get a relation
* [listRelations](#listrelations) - List relations
* [updateRelation](#updaterelation) - Update a relation

## createRelation

Create a relation

### Example Usage

```typescript
import { ContractifyProduction } from "contractify";

(async() => {
  const sdk = new ContractifyProduction({
    security: {
      oAuth2: "",
      personalAccessToken: "",
    },
  });

  const res = await sdk.relations.createRelation({
    relationWrite: {
      address: {
        addressLine1: "221B Baker Street",
        addressLine2: "Marylebone",
        city: "London",
        country: "United Kingdom",
        postalCode: "NW1 6XE",
      },
      email: "sherlock@example.org",
      fax: "+3211324354",
      mobilePhone: "+23477123456",
      name: "Sherlock Holmes Detective Services",
      phone: "+23477123456",
      reference: "REF123",
      vat: "BE12345678",
      website: "https://www.example.org",
    },
    company: 528070,
  });

  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                            | Type                                                                                 | Required                                                                             | Description                                                                          |
| ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ |
| `request`                                                                            | [operations.CreateRelationRequest](../../models/operations/createrelationrequest.md) | :heavy_check_mark:                                                                   | The request object to use for the request.                                           |
| `config`                                                                             | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                         | :heavy_minus_sign:                                                                   | Available config options for making requests.                                        |


### Response

**Promise<[operations.CreateRelationResponse](../../models/operations/createrelationresponse.md)>**


## deleteRelation

Delete a relation

### Example Usage

```typescript
import { ContractifyProduction } from "contractify";

(async() => {
  const sdk = new ContractifyProduction({
    security: {
      oAuth2: "",
      personalAccessToken: "",
    },
  });

  const res = await sdk.relations.deleteRelation({
    company: 773418,
    relation: 890630,
  });

  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                            | Type                                                                                 | Required                                                                             | Description                                                                          |
| ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ |
| `request`                                                                            | [operations.DeleteRelationRequest](../../models/operations/deleterelationrequest.md) | :heavy_check_mark:                                                                   | The request object to use for the request.                                           |
| `config`                                                                             | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                         | :heavy_minus_sign:                                                                   | Available config options for making requests.                                        |


### Response

**Promise<[operations.DeleteRelationResponse](../../models/operations/deleterelationresponse.md)>**


## getRelation

Get information about a relation

### Example Usage

```typescript
import { ContractifyProduction } from "contractify";

(async() => {
  const sdk = new ContractifyProduction({
    security: {
      oAuth2: "",
      personalAccessToken: "",
    },
  });

  const res = await sdk.relations.getRelation({
    company: 734058,
    relation: 979643,
  });

  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                      | Type                                                                           | Required                                                                       | Description                                                                    |
| ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ |
| `request`                                                                      | [operations.GetRelationRequest](../../models/operations/getrelationrequest.md) | :heavy_check_mark:                                                             | The request object to use for the request.                                     |
| `config`                                                                       | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                   | :heavy_minus_sign:                                                             | Available config options for making requests.                                  |


### Response

**Promise<[operations.GetRelationResponse](../../models/operations/getrelationresponse.md)>**


## listRelations

List all the relations within a company

### Example Usage

```typescript
import { ContractifyProduction } from "contractify";

(async() => {
  const sdk = new ContractifyProduction({
    security: {
      oAuth2: "",
      personalAccessToken: "",
    },
  });

  const res = await sdk.relations.listRelations({
    company: 454135,
  });

  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                          | Type                                                                               | Required                                                                           | Description                                                                        |
| ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- |
| `request`                                                                          | [operations.ListRelationsRequest](../../models/operations/listrelationsrequest.md) | :heavy_check_mark:                                                                 | The request object to use for the request.                                         |
| `config`                                                                           | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                       | :heavy_minus_sign:                                                                 | Available config options for making requests.                                      |


### Response

**Promise<[operations.ListRelationsResponse](../../models/operations/listrelationsresponse.md)>**


## updateRelation

Update a relation

### Example Usage

```typescript
import { ContractifyProduction } from "contractify";

(async() => {
  const sdk = new ContractifyProduction({
    security: {
      oAuth2: "",
      personalAccessToken: "",
    },
  });

  const res = await sdk.relations.updateRelation({
    relationWrite: {
      address: {
        addressLine1: "221B Baker Street",
        addressLine2: "Marylebone",
        city: "London",
        country: "United Kingdom",
        postalCode: "NW1 6XE",
      },
      email: "sherlock@example.org",
      fax: "+3211324354",
      mobilePhone: "+23477123456",
      name: "Sherlock Holmes Detective Services",
      phone: "+23477123456",
      reference: "REF123",
      vat: "BE12345678",
      website: "https://www.example.org",
    },
    company: 573397,
    relation: 281147,
  });

  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                            | Type                                                                                 | Required                                                                             | Description                                                                          |
| ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ |
| `request`                                                                            | [operations.UpdateRelationRequest](../../models/operations/updaterelationrequest.md) | :heavy_check_mark:                                                                   | The request object to use for the request.                                           |
| `config`                                                                             | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                         | :heavy_minus_sign:                                                                   | Available config options for making requests.                                        |


### Response

**Promise<[operations.UpdateRelationResponse](../../models/operations/updaterelationresponse.md)>**


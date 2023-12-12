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

async function run() {
  const sdk = new ContractifyProduction({
    security: {
      oAuth2: "Bearer <YOUR_ACCESS_TOKEN_HERE>",
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
}

run();
```

### Parameters

| Parameter                                                                                | Type                                                                                     | Required                                                                                 | Description                                                                              |
| ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- |
| `request`                                                                                | [operations.CreateRelationRequest](../../sdk/models/operations/createrelationrequest.md) | :heavy_check_mark:                                                                       | The request object to use for the request.                                               |
| `config`                                                                                 | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                             | :heavy_minus_sign:                                                                       | Available config options for making requests.                                            |


### Response

**Promise<[operations.CreateRelationResponse](../../sdk/models/operations/createrelationresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 400-600         | */*             |

## deleteRelation

Delete a relation

### Example Usage

```typescript
import { ContractifyProduction } from "contractify";

async function run() {
  const sdk = new ContractifyProduction({
    security: {
      oAuth2: "Bearer <YOUR_ACCESS_TOKEN_HERE>",
    },
  });

  const res = await sdk.relations.deleteRelation({
    company: 773418,
    relation: 890630,
  });

  if (res.statusCode == 200) {
    // handle response
  }
}

run();
```

### Parameters

| Parameter                                                                                | Type                                                                                     | Required                                                                                 | Description                                                                              |
| ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- |
| `request`                                                                                | [operations.DeleteRelationRequest](../../sdk/models/operations/deleterelationrequest.md) | :heavy_check_mark:                                                                       | The request object to use for the request.                                               |
| `config`                                                                                 | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                             | :heavy_minus_sign:                                                                       | Available config options for making requests.                                            |


### Response

**Promise<[operations.DeleteRelationResponse](../../sdk/models/operations/deleterelationresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 400-600         | */*             |

## getRelation

Get information about a relation

### Example Usage

```typescript
import { ContractifyProduction } from "contractify";

async function run() {
  const sdk = new ContractifyProduction({
    security: {
      oAuth2: "Bearer <YOUR_ACCESS_TOKEN_HERE>",
    },
  });

  const res = await sdk.relations.getRelation({
    company: 734058,
    relation: 979643,
  });

  if (res.statusCode == 200) {
    // handle response
  }
}

run();
```

### Parameters

| Parameter                                                                          | Type                                                                               | Required                                                                           | Description                                                                        |
| ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- |
| `request`                                                                          | [operations.GetRelationRequest](../../sdk/models/operations/getrelationrequest.md) | :heavy_check_mark:                                                                 | The request object to use for the request.                                         |
| `config`                                                                           | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                       | :heavy_minus_sign:                                                                 | Available config options for making requests.                                      |


### Response

**Promise<[operations.GetRelationResponse](../../sdk/models/operations/getrelationresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 400-600         | */*             |

## listRelations

List all the relations within a company

### Example Usage

```typescript
import { ContractifyProduction } from "contractify";

async function run() {
  const sdk = new ContractifyProduction({
    security: {
      oAuth2: "Bearer <YOUR_ACCESS_TOKEN_HERE>",
    },
  });

  const res = await sdk.relations.listRelations({
    company: 454135,
  });

  if (res.statusCode == 200) {
    // handle response
  }
}

run();
```

### Parameters

| Parameter                                                                              | Type                                                                                   | Required                                                                               | Description                                                                            |
| -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- |
| `request`                                                                              | [operations.ListRelationsRequest](../../sdk/models/operations/listrelationsrequest.md) | :heavy_check_mark:                                                                     | The request object to use for the request.                                             |
| `config`                                                                               | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                           | :heavy_minus_sign:                                                                     | Available config options for making requests.                                          |


### Response

**Promise<[operations.ListRelationsResponse](../../sdk/models/operations/listrelationsresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 400-600         | */*             |

## updateRelation

Update a relation

### Example Usage

```typescript
import { ContractifyProduction } from "contractify";

async function run() {
  const sdk = new ContractifyProduction({
    security: {
      oAuth2: "Bearer <YOUR_ACCESS_TOKEN_HERE>",
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
}

run();
```

### Parameters

| Parameter                                                                                | Type                                                                                     | Required                                                                                 | Description                                                                              |
| ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- |
| `request`                                                                                | [operations.UpdateRelationRequest](../../sdk/models/operations/updaterelationrequest.md) | :heavy_check_mark:                                                                       | The request object to use for the request.                                               |
| `config`                                                                                 | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                             | :heavy_minus_sign:                                                                       | Available config options for making requests.                                            |


### Response

**Promise<[operations.UpdateRelationResponse](../../sdk/models/operations/updaterelationresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 400-600         | */*             |

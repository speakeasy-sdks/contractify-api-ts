# relations

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
import { CreateRelationResponse } from "contractify/dist/sdk/models/operations";

const sdk = new ContractifyProduction();

sdk.relations.createRelation({
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
  company: 607831,
}, {
  oAuth2: "",
  personalAccessToken: "",
}).then((res: CreateRelationResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                              | Type                                                                                   | Required                                                                               | Description                                                                            |
| -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- |
| `request`                                                                              | [operations.CreateRelationRequest](../../models/operations/createrelationrequest.md)   | :heavy_check_mark:                                                                     | The request object to use for the request.                                             |
| `security`                                                                             | [operations.CreateRelationSecurity](../../models/operations/createrelationsecurity.md) | :heavy_check_mark:                                                                     | The security requirements to use for the request.                                      |
| `config`                                                                               | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                           | :heavy_minus_sign:                                                                     | Available config options for making requests.                                          |


### Response

**Promise<[operations.CreateRelationResponse](../../models/operations/createrelationresponse.md)>**


## deleteRelation

Delete a relation

### Example Usage

```typescript
import { ContractifyProduction } from "contractify";
import { DeleteRelationResponse } from "contractify/dist/sdk/models/operations";

const sdk = new ContractifyProduction();

sdk.relations.deleteRelation({
  company: 363711,
  relation: 325047,
}, {
  oAuth2: "",
  personalAccessToken: "",
}).then((res: DeleteRelationResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                              | Type                                                                                   | Required                                                                               | Description                                                                            |
| -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- |
| `request`                                                                              | [operations.DeleteRelationRequest](../../models/operations/deleterelationrequest.md)   | :heavy_check_mark:                                                                     | The request object to use for the request.                                             |
| `security`                                                                             | [operations.DeleteRelationSecurity](../../models/operations/deleterelationsecurity.md) | :heavy_check_mark:                                                                     | The security requirements to use for the request.                                      |
| `config`                                                                               | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                           | :heavy_minus_sign:                                                                     | Available config options for making requests.                                          |


### Response

**Promise<[operations.DeleteRelationResponse](../../models/operations/deleterelationresponse.md)>**


## getRelation

Get information about a relation

### Example Usage

```typescript
import { ContractifyProduction } from "contractify";
import { GetRelationResponse } from "contractify/dist/sdk/models/operations";

const sdk = new ContractifyProduction();

sdk.relations.getRelation({
  company: 570197,
  relation: 38425,
}, {
  oAuth2: "",
  personalAccessToken: "",
}).then((res: GetRelationResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                        | Type                                                                             | Required                                                                         | Description                                                                      |
| -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- |
| `request`                                                                        | [operations.GetRelationRequest](../../models/operations/getrelationrequest.md)   | :heavy_check_mark:                                                               | The request object to use for the request.                                       |
| `security`                                                                       | [operations.GetRelationSecurity](../../models/operations/getrelationsecurity.md) | :heavy_check_mark:                                                               | The security requirements to use for the request.                                |
| `config`                                                                         | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                     | :heavy_minus_sign:                                                               | Available config options for making requests.                                    |


### Response

**Promise<[operations.GetRelationResponse](../../models/operations/getrelationresponse.md)>**


## listRelations

List all the relations within a company

### Example Usage

```typescript
import { ContractifyProduction } from "contractify";
import { ListRelationsResponse } from "contractify/dist/sdk/models/operations";

const sdk = new ContractifyProduction();

sdk.relations.listRelations({
  company: 438601,
  page: 634274,
  reference: "doloribus",
}, {
  oAuth2: "",
  personalAccessToken: "",
}).then((res: ListRelationsResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                            | Type                                                                                 | Required                                                                             | Description                                                                          |
| ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ |
| `request`                                                                            | [operations.ListRelationsRequest](../../models/operations/listrelationsrequest.md)   | :heavy_check_mark:                                                                   | The request object to use for the request.                                           |
| `security`                                                                           | [operations.ListRelationsSecurity](../../models/operations/listrelationssecurity.md) | :heavy_check_mark:                                                                   | The security requirements to use for the request.                                    |
| `config`                                                                             | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                         | :heavy_minus_sign:                                                                   | Available config options for making requests.                                        |


### Response

**Promise<[operations.ListRelationsResponse](../../models/operations/listrelationsresponse.md)>**


## updateRelation

Update a relation

### Example Usage

```typescript
import { ContractifyProduction } from "contractify";
import { UpdateRelationResponse } from "contractify/dist/sdk/models/operations";

const sdk = new ContractifyProduction();

sdk.relations.updateRelation({
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
  company: 958950,
  relation: 102044,
}, {
  oAuth2: "",
  personalAccessToken: "",
}).then((res: UpdateRelationResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                              | Type                                                                                   | Required                                                                               | Description                                                                            |
| -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- |
| `request`                                                                              | [operations.UpdateRelationRequest](../../models/operations/updaterelationrequest.md)   | :heavy_check_mark:                                                                     | The request object to use for the request.                                             |
| `security`                                                                             | [operations.UpdateRelationSecurity](../../models/operations/updaterelationsecurity.md) | :heavy_check_mark:                                                                     | The security requirements to use for the request.                                      |
| `config`                                                                               | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                           | :heavy_minus_sign:                                                                     | Available config options for making requests.                                          |


### Response

**Promise<[operations.UpdateRelationResponse](../../models/operations/updaterelationresponse.md)>**


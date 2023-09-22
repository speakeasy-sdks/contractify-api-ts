# Contracts

### Available Operations

* [createContract](#createcontract) - Create a contract
* [deleteContract](#deletecontract) - Delete a contract
* [getContract](#getcontract) - Get a contract
* [listContracts](#listcontracts) - List contracts
* [updateContract](#updatecontract) - Update a contract

## createContract

Create a contract

### Example Usage

```typescript
import { ContractifyProduction } from "contractify";
import { CreateContractResponse } from "contractify/dist/sdk/models/operations";
import { ContractPhase } from "contractify/dist/sdk/models/shared";
import { RFCDate } from "contractify/dist/sdk/types";

const sdk = new ContractifyProduction({
  security: {
    oAuth2: "",
    personalAccessToken: "",
  },
});

sdk.contracts.createContract({
  contractWrite: {
    contractTypes: [
      844266,
    ],
    customFieldValues: [
      {
        customFieldId: 2,
        value: "unde",
      },
    ],
    departments: [
      857946,
    ],
    documents: [
      1,
    ],
    dossierId: 1,
    duration: "P1Y",
    endDate: new RFCDate("2021-12-31"),
    isOpenEnded: false,
    legalEntities: [
      544883,
    ],
    name: "Partnership agreement",
    offices: [
      847252,
    ],
    ownerId: 1,
    phase: ContractPhase.Ongoing,
    relations: [
      423655,
    ],
    renewal: {
      automaticRenewal: {
        numberOfRenewals: 1,
        renewalPeriod: "P3Y",
      },
      isAutomaticallyRenewed: false,
    },
    startDate: new RFCDate("2021-01-01"),
    termination: {
      isTerminableAtAnyTime: false,
      terminationDate: new RFCDate("2021-11-30"),
      terminationDuration: "P1M",
    },
  },
  company: 623564,
}).then((res: CreateContractResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                            | Type                                                                                 | Required                                                                             | Description                                                                          |
| ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ |
| `request`                                                                            | [operations.CreateContractRequest](../../models/operations/createcontractrequest.md) | :heavy_check_mark:                                                                   | The request object to use for the request.                                           |
| `config`                                                                             | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                         | :heavy_minus_sign:                                                                   | Available config options for making requests.                                        |


### Response

**Promise<[operations.CreateContractResponse](../../models/operations/createcontractresponse.md)>**


## deleteContract

Delete a contract

### Example Usage

```typescript
import { ContractifyProduction } from "contractify";
import { DeleteContractResponse } from "contractify/dist/sdk/models/operations";

const sdk = new ContractifyProduction({
  security: {
    oAuth2: "",
    personalAccessToken: "",
  },
});

sdk.contracts.deleteContract({
  company: 645894,
  contract: 384382,
}).then((res: DeleteContractResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                            | Type                                                                                 | Required                                                                             | Description                                                                          |
| ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ |
| `request`                                                                            | [operations.DeleteContractRequest](../../models/operations/deletecontractrequest.md) | :heavy_check_mark:                                                                   | The request object to use for the request.                                           |
| `config`                                                                             | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                         | :heavy_minus_sign:                                                                   | Available config options for making requests.                                        |


### Response

**Promise<[operations.DeleteContractResponse](../../models/operations/deletecontractresponse.md)>**


## getContract

Get information about a contract

### Example Usage

```typescript
import { ContractifyProduction } from "contractify";
import { GetContractResponse } from "contractify/dist/sdk/models/operations";

const sdk = new ContractifyProduction({
  security: {
    oAuth2: "",
    personalAccessToken: "",
  },
});

sdk.contracts.getContract({
  company: 437587,
  contract: 297534,
}).then((res: GetContractResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                      | Type                                                                           | Required                                                                       | Description                                                                    |
| ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ |
| `request`                                                                      | [operations.GetContractRequest](../../models/operations/getcontractrequest.md) | :heavy_check_mark:                                                             | The request object to use for the request.                                     |
| `config`                                                                       | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                   | :heavy_minus_sign:                                                             | Available config options for making requests.                                  |


### Response

**Promise<[operations.GetContractResponse](../../models/operations/getcontractresponse.md)>**


## listContracts

List all the contracts within a company

### Example Usage

```typescript
import { ContractifyProduction } from "contractify";
import { ListContractsResponse } from "contractify/dist/sdk/models/operations";

const sdk = new ContractifyProduction({
  security: {
    oAuth2: "",
    personalAccessToken: "",
  },
});

sdk.contracts.listContracts({
  company: 891773,
  page: 56713,
}).then((res: ListContractsResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                          | Type                                                                               | Required                                                                           | Description                                                                        |
| ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- |
| `request`                                                                          | [operations.ListContractsRequest](../../models/operations/listcontractsrequest.md) | :heavy_check_mark:                                                                 | The request object to use for the request.                                         |
| `config`                                                                           | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                       | :heavy_minus_sign:                                                                 | Available config options for making requests.                                      |


### Response

**Promise<[operations.ListContractsResponse](../../models/operations/listcontractsresponse.md)>**


## updateContract

Update a contract

### Example Usage

```typescript
import { ContractifyProduction } from "contractify";
import { UpdateContractResponse } from "contractify/dist/sdk/models/operations";
import { ContractPhase } from "contractify/dist/sdk/models/shared";
import { RFCDate } from "contractify/dist/sdk/types";

const sdk = new ContractifyProduction({
  security: {
    oAuth2: "",
    personalAccessToken: "",
  },
});

sdk.contracts.updateContract({
  contractWrite: {
    contractTypes: [
      963663,
    ],
    customFieldValues: [
      {
        customFieldId: 2,
        value: "tempora",
      },
    ],
    departments: [
      383441,
    ],
    documents: [
      1,
    ],
    dossierId: 1,
    duration: "P1Y",
    endDate: new RFCDate("2021-12-31"),
    isOpenEnded: false,
    legalEntities: [
      477665,
    ],
    name: "Partnership agreement",
    offices: [
      791725,
    ],
    ownerId: 1,
    phase: ContractPhase.Ongoing,
    relations: [
      812169,
    ],
    renewal: {
      automaticRenewal: {
        numberOfRenewals: 1,
        renewalPeriod: "P3Y",
      },
      isAutomaticallyRenewed: false,
    },
    startDate: new RFCDate("2021-01-01"),
    termination: {
      isTerminableAtAnyTime: false,
      terminationDate: new RFCDate("2021-11-30"),
      terminationDuration: "P1M",
    },
  },
  company: 528895,
  contract: 479977,
}).then((res: UpdateContractResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                            | Type                                                                                 | Required                                                                             | Description                                                                          |
| ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ |
| `request`                                                                            | [operations.UpdateContractRequest](../../models/operations/updatecontractrequest.md) | :heavy_check_mark:                                                                   | The request object to use for the request.                                           |
| `config`                                                                             | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                         | :heavy_minus_sign:                                                                   | Available config options for making requests.                                        |


### Response

**Promise<[operations.UpdateContractResponse](../../models/operations/updatecontractresponse.md)>**


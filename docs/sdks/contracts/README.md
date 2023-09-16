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
import { CreateContractResponse, CreateContractSecurity } from "contractify/dist/sdk/models/operations";
import { ContractPhase } from "contractify/dist/sdk/models/shared";
import { RFCDate } from "contractify/dist/sdk/types";

const sdk = new ContractifyProduction();
const operationSecurity: CreateContractSecurity = {
  oAuth2: "",
  personalAccessToken: "",
};

sdk.contracts.createContract({
  contractWrite: {
    contractTypes: [
      715190,
    ],
    customFieldValues: [
      {
        customFieldId: 2,
        value: "quibusdam",
      },
    ],
    departments: [
      602763,
    ],
    documents: [
      1,
    ],
    dossierId: 1,
    duration: "P1Y",
    endDate: new RFCDate("2021-12-31"),
    isOpenEnded: false,
    legalEntities: [
      857946,
    ],
    name: "Partnership agreement",
    offices: [
      544883,
    ],
    ownerId: 1,
    phase: ContractPhase.Ongoing,
    relations: [
      847252,
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
  company: 423655,
}, operationSecurity).then((res: CreateContractResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                              | Type                                                                                   | Required                                                                               | Description                                                                            |
| -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- |
| `request`                                                                              | [operations.CreateContractRequest](../../models/operations/createcontractrequest.md)   | :heavy_check_mark:                                                                     | The request object to use for the request.                                             |
| `security`                                                                             | [operations.CreateContractSecurity](../../models/operations/createcontractsecurity.md) | :heavy_check_mark:                                                                     | The security requirements to use for the request.                                      |
| `config`                                                                               | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                           | :heavy_minus_sign:                                                                     | Available config options for making requests.                                          |


### Response

**Promise<[operations.CreateContractResponse](../../models/operations/createcontractresponse.md)>**


## deleteContract

Delete a contract

### Example Usage

```typescript
import { ContractifyProduction } from "contractify";
import { DeleteContractResponse, DeleteContractSecurity } from "contractify/dist/sdk/models/operations";

const sdk = new ContractifyProduction();
const operationSecurity: DeleteContractSecurity = {
  oAuth2: "",
  personalAccessToken: "",
};

sdk.contracts.deleteContract({
  company: 623564,
  contract: 645894,
}, operationSecurity).then((res: DeleteContractResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                              | Type                                                                                   | Required                                                                               | Description                                                                            |
| -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- |
| `request`                                                                              | [operations.DeleteContractRequest](../../models/operations/deletecontractrequest.md)   | :heavy_check_mark:                                                                     | The request object to use for the request.                                             |
| `security`                                                                             | [operations.DeleteContractSecurity](../../models/operations/deletecontractsecurity.md) | :heavy_check_mark:                                                                     | The security requirements to use for the request.                                      |
| `config`                                                                               | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                           | :heavy_minus_sign:                                                                     | Available config options for making requests.                                          |


### Response

**Promise<[operations.DeleteContractResponse](../../models/operations/deletecontractresponse.md)>**


## getContract

Get information about a contract

### Example Usage

```typescript
import { ContractifyProduction } from "contractify";
import { GetContractResponse, GetContractSecurity } from "contractify/dist/sdk/models/operations";

const sdk = new ContractifyProduction();
const operationSecurity: GetContractSecurity = {
  oAuth2: "",
  personalAccessToken: "",
};

sdk.contracts.getContract({
  company: 384382,
  contract: 437587,
}, operationSecurity).then((res: GetContractResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                        | Type                                                                             | Required                                                                         | Description                                                                      |
| -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- |
| `request`                                                                        | [operations.GetContractRequest](../../models/operations/getcontractrequest.md)   | :heavy_check_mark:                                                               | The request object to use for the request.                                       |
| `security`                                                                       | [operations.GetContractSecurity](../../models/operations/getcontractsecurity.md) | :heavy_check_mark:                                                               | The security requirements to use for the request.                                |
| `config`                                                                         | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                     | :heavy_minus_sign:                                                               | Available config options for making requests.                                    |


### Response

**Promise<[operations.GetContractResponse](../../models/operations/getcontractresponse.md)>**


## listContracts

List all the contracts within a company

### Example Usage

```typescript
import { ContractifyProduction } from "contractify";
import { ListContractsResponse, ListContractsSecurity } from "contractify/dist/sdk/models/operations";

const sdk = new ContractifyProduction();
const operationSecurity: ListContractsSecurity = {
  oAuth2: "",
  personalAccessToken: "",
};

sdk.contracts.listContracts({
  company: 297534,
  page: 891773,
}, operationSecurity).then((res: ListContractsResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                            | Type                                                                                 | Required                                                                             | Description                                                                          |
| ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ |
| `request`                                                                            | [operations.ListContractsRequest](../../models/operations/listcontractsrequest.md)   | :heavy_check_mark:                                                                   | The request object to use for the request.                                           |
| `security`                                                                           | [operations.ListContractsSecurity](../../models/operations/listcontractssecurity.md) | :heavy_check_mark:                                                                   | The security requirements to use for the request.                                    |
| `config`                                                                             | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                         | :heavy_minus_sign:                                                                   | Available config options for making requests.                                        |


### Response

**Promise<[operations.ListContractsResponse](../../models/operations/listcontractsresponse.md)>**


## updateContract

Update a contract

### Example Usage

```typescript
import { ContractifyProduction } from "contractify";
import { UpdateContractResponse, UpdateContractSecurity } from "contractify/dist/sdk/models/operations";
import { ContractPhase } from "contractify/dist/sdk/models/shared";
import { RFCDate } from "contractify/dist/sdk/types";

const sdk = new ContractifyProduction();
const operationSecurity: UpdateContractSecurity = {
  oAuth2: "",
  personalAccessToken: "",
};

sdk.contracts.updateContract({
  contractWrite: {
    contractTypes: [
      56713,
    ],
    customFieldValues: [
      {
        customFieldId: 2,
        value: "delectus",
      },
    ],
    departments: [
      272656,
    ],
    documents: [
      1,
    ],
    dossierId: 1,
    duration: "P1Y",
    endDate: new RFCDate("2021-12-31"),
    isOpenEnded: false,
    legalEntities: [
      383441,
    ],
    name: "Partnership agreement",
    offices: [
      477665,
    ],
    ownerId: 1,
    phase: ContractPhase.Ongoing,
    relations: [
      791725,
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
  company: 812169,
  contract: 528895,
}, operationSecurity).then((res: UpdateContractResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                              | Type                                                                                   | Required                                                                               | Description                                                                            |
| -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- |
| `request`                                                                              | [operations.UpdateContractRequest](../../models/operations/updatecontractrequest.md)   | :heavy_check_mark:                                                                     | The request object to use for the request.                                             |
| `security`                                                                             | [operations.UpdateContractSecurity](../../models/operations/updatecontractsecurity.md) | :heavy_check_mark:                                                                     | The security requirements to use for the request.                                      |
| `config`                                                                               | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                           | :heavy_minus_sign:                                                                     | Available config options for making requests.                                          |


### Response

**Promise<[operations.UpdateContractResponse](../../models/operations/updatecontractresponse.md)>**


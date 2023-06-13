# contracts

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

const sdk = new ContractifyProduction();

sdk.contracts.createContract({
  contractWrite: {
    contractTypes: [
      844266,
      602763,
      857946,
    ],
    customFieldValues: [
      {
        customFieldId: 2,
        value: "illum",
      },
      {
        customFieldId: 2,
        value: "vel",
      },
      {
        customFieldId: 2,
        value: "error",
      },
    ],
    departments: [
      384382,
      437587,
      297534,
    ],
    documents: [
      1,
      1,
      1,
      1,
    ],
    dossierId: 1,
    duration: "P1Y",
    endDate: new RFCDate("2021-12-31"),
    isOpenEnded: false,
    legalEntities: [
      963663,
    ],
    name: "Partnership agreement",
    offices: [
      383441,
      477665,
    ],
    ownerId: 1,
    phase: ContractPhase.Ongoing,
    relations: [
      812169,
      528895,
      479977,
      568045,
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
  company: 392785,
}, {
  oAuth2: "",
  personalAccessToken: "",
}).then((res: CreateContractResponse) => {
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
import { DeleteContractResponse } from "contractify/dist/sdk/models/operations";

const sdk = new ContractifyProduction();

sdk.contracts.deleteContract({
  company: 925597,
  contract: 836079,
}, {
  oAuth2: "",
  personalAccessToken: "",
}).then((res: DeleteContractResponse) => {
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
import { GetContractResponse } from "contractify/dist/sdk/models/operations";
import { ContractPhase } from "contractify/dist/sdk/models/shared";
import { RFCDate } from "contractify/dist/sdk/types";

const sdk = new ContractifyProduction();

sdk.contracts.getContract({
  company: 71036,
  contract: 337396,
}, {
  oAuth2: "",
  personalAccessToken: "",
}).then((res: GetContractResponse) => {
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
import { ListContractsResponse } from "contractify/dist/sdk/models/operations";
import { ContractPhase } from "contractify/dist/sdk/models/shared";
import { RFCDate } from "contractify/dist/sdk/types";

const sdk = new ContractifyProduction();

sdk.contracts.listContracts({
  company: 87129,
  page: 648172,
}, {
  oAuth2: "",
  personalAccessToken: "",
}).then((res: ListContractsResponse) => {
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
import { UpdateContractResponse } from "contractify/dist/sdk/models/operations";
import { ContractPhase } from "contractify/dist/sdk/models/shared";
import { RFCDate } from "contractify/dist/sdk/types";

const sdk = new ContractifyProduction();

sdk.contracts.updateContract({
  contractWrite: {
    contractTypes: [
      368241,
    ],
    customFieldValues: [
      {
        customFieldId: 2,
        value: "sapiente",
      },
      {
        customFieldId: 2,
        value: "quo",
      },
      {
        customFieldId: 2,
        value: "odit",
      },
      {
        customFieldId: 2,
        value: "at",
      },
    ],
    departments: [
      978619,
      473608,
      799159,
      800911,
    ],
    documents: [
      1,
      1,
    ],
    dossierId: 1,
    duration: "P1Y",
    endDate: new RFCDate("2021-12-31"),
    isOpenEnded: false,
    legalEntities: [
      780529,
      678880,
      118274,
    ],
    name: "Partnership agreement",
    offices: [
      639921,
      582020,
      143353,
    ],
    ownerId: 1,
    phase: ContractPhase.Ongoing,
    relations: [
      944669,
      758616,
      521848,
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
  company: 105907,
  contract: 414662,
}, {
  oAuth2: "",
  personalAccessToken: "",
}).then((res: UpdateContractResponse) => {
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


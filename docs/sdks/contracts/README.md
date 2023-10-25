# Contracts
(*contracts*)

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
import { ContractPhase } from "contractify/dist/sdk/models/shared";
import { RFCDate } from "contractify/dist/sdk/types";

(async() => {
  const sdk = new ContractifyProduction({
    security: {
      oAuth2: "",
      personalAccessToken: "",
    },
  });

  const res = await sdk.contracts.createContract({
    contractWrite: {
      contractTypes: [
        1,
        2,
      ],
      customFieldValues: [
        {
          customFieldId: 2,
          value: "software",
        },
      ],
      departments: [
        1,
        2,
      ],
      documents: [
        1,
      ],
      dossierId: 1,
      duration: "P1Y",
      endDate: new RFCDate("2021-12-31"),
      legalEntities: [
        1,
        2,
      ],
      name: "Partnership agreement",
      offices: [
        1,
        2,
      ],
      ownerId: 1,
      phase: ContractPhase.Ongoing,
      relations: [
        1,
        2,
      ],
      renewal: {
        automaticRenewal: {
          numberOfRenewals: 1,
          renewalPeriod: "P3Y",
        },
      },
      startDate: new RFCDate("2021-01-01"),
      termination: {
        terminationDate: new RFCDate("2021-11-30"),
        terminationDuration: "P1M",
      },
    },
    company: 940947,
  });

  if (res.statusCode == 200) {
    // handle response
  }
})();
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

(async() => {
  const sdk = new ContractifyProduction({
    security: {
      oAuth2: "",
      personalAccessToken: "",
    },
  });

  const res = await sdk.contracts.deleteContract({
    company: 791005,
    contract: 200974,
  });

  if (res.statusCode == 200) {
    // handle response
  }
})();
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

(async() => {
  const sdk = new ContractifyProduction({
    security: {
      oAuth2: "",
      personalAccessToken: "",
    },
  });

  const res = await sdk.contracts.getContract({
    company: 362495,
    contract: 163842,
  });

  if (res.statusCode == 200) {
    // handle response
  }
})();
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

(async() => {
  const sdk = new ContractifyProduction({
    security: {
      oAuth2: "",
      personalAccessToken: "",
    },
  });

  const res = await sdk.contracts.listContracts({
    company: 567515,
  });

  if (res.statusCode == 200) {
    // handle response
  }
})();
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
import { ContractPhase } from "contractify/dist/sdk/models/shared";
import { RFCDate } from "contractify/dist/sdk/types";

(async() => {
  const sdk = new ContractifyProduction({
    security: {
      oAuth2: "",
      personalAccessToken: "",
    },
  });

  const res = await sdk.contracts.updateContract({
    contractWrite: {
      contractTypes: [
        1,
        2,
      ],
      customFieldValues: [
        {
          customFieldId: 2,
          value: "software",
        },
      ],
      departments: [
        1,
        2,
      ],
      documents: [
        1,
      ],
      dossierId: 1,
      duration: "P1Y",
      endDate: new RFCDate("2021-12-31"),
      legalEntities: [
        1,
        2,
      ],
      name: "Partnership agreement",
      offices: [
        1,
        2,
      ],
      ownerId: 1,
      phase: ContractPhase.Ongoing,
      relations: [
        1,
        2,
      ],
      renewal: {
        automaticRenewal: {
          numberOfRenewals: 1,
          renewalPeriod: "P3Y",
        },
      },
      startDate: new RFCDate("2021-01-01"),
      termination: {
        terminationDate: new RFCDate("2021-11-30"),
        terminationDuration: "P1M",
      },
    },
    company: 60280,
    contract: 331790,
  });

  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                            | Type                                                                                 | Required                                                                             | Description                                                                          |
| ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ |
| `request`                                                                            | [operations.UpdateContractRequest](../../models/operations/updatecontractrequest.md) | :heavy_check_mark:                                                                   | The request object to use for the request.                                           |
| `config`                                                                             | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                         | :heavy_minus_sign:                                                                   | Available config options for making requests.                                        |


### Response

**Promise<[operations.UpdateContractResponse](../../models/operations/updatecontractresponse.md)>**


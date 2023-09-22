# ContractTypes

### Available Operations

* [listContractTypes](#listcontracttypes) - List contract types

## listContractTypes

List all the contract types within a company

### Example Usage

```typescript
import { ContractifyProduction } from "contractify";
import { ListContractTypesResponse } from "contractify/dist/sdk/models/operations";

const sdk = new ContractifyProduction({
  security: {
    oAuth2: "",
    personalAccessToken: "",
  },
});

sdk.contractTypes.listContractTypes({
  company: 715190,
}).then((res: ListContractTypesResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                  | Type                                                                                       | Required                                                                                   | Description                                                                                |
| ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ |
| `request`                                                                                  | [operations.ListContractTypesRequest](../../models/operations/listcontracttypesrequest.md) | :heavy_check_mark:                                                                         | The request object to use for the request.                                                 |
| `config`                                                                                   | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                               | :heavy_minus_sign:                                                                         | Available config options for making requests.                                              |


### Response

**Promise<[operations.ListContractTypesResponse](../../models/operations/listcontracttypesresponse.md)>**


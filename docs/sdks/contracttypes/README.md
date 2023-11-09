# ContractTypes
(*contractTypes*)

### Available Operations

* [listContractTypes](#listcontracttypes) - List contract types

## listContractTypes

List all the contract types within a company

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

  const res = await sdk.contractTypes.listContractTypes({
    company: 839467,
  });

  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                                      | Type                                                                                           | Required                                                                                       | Description                                                                                    |
| ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- |
| `request`                                                                                      | [operations.ListContractTypesRequest](../../sdk/models/operations/listcontracttypesrequest.md) | :heavy_check_mark:                                                                             | The request object to use for the request.                                                     |
| `config`                                                                                       | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                   | :heavy_minus_sign:                                                                             | Available config options for making requests.                                                  |


### Response

**Promise<[operations.ListContractTypesResponse](../../sdk/models/operations/listcontracttypesresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 400-600         | */*             |

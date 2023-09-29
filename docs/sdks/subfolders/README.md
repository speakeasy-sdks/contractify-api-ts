# Subfolders
(*subfolders*)

### Available Operations

* [listSubfolders](#listsubfolders) - List subfolders

## listSubfolders

List all the subfolders within a company

### Example Usage

```typescript
import { ContractifyProduction } from "contractify";
import { ListSubfoldersResponse } from "contractify/dist/sdk/models/operations";

const sdk = new ContractifyProduction({
  security: {
    oAuth2: "",
    personalAccessToken: "",
  },
});

sdk.subfolders.listSubfolders({
  company: 749068,
}).then((res: ListSubfoldersResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                            | Type                                                                                 | Required                                                                             | Description                                                                          |
| ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ |
| `request`                                                                            | [operations.ListSubfoldersRequest](../../models/operations/listsubfoldersrequest.md) | :heavy_check_mark:                                                                   | The request object to use for the request.                                           |
| `config`                                                                             | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                         | :heavy_minus_sign:                                                                   | Available config options for making requests.                                        |


### Response

**Promise<[operations.ListSubfoldersResponse](../../models/operations/listsubfoldersresponse.md)>**


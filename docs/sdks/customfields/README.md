# customFields

### Available Operations

* [listCustomFields](#listcustomfields) - List custom fields

## listCustomFields

List all the custom fields within a company

### Example Usage

```typescript
import { ContractifyProduction } from "contractify";
import { ListCustomFieldsResponse } from "contractify/dist/sdk/models/operations";

const sdk = new ContractifyProduction();

sdk.customFields.listCustomFields({
  company: 473600,
}, {
  oAuth2: "",
  personalAccessToken: "",
}).then((res: ListCustomFieldsResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                  | Type                                                                                       | Required                                                                                   | Description                                                                                |
| ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ |
| `request`                                                                                  | [operations.ListCustomFieldsRequest](../../models/operations/listcustomfieldsrequest.md)   | :heavy_check_mark:                                                                         | The request object to use for the request.                                                 |
| `security`                                                                                 | [operations.ListCustomFieldsSecurity](../../models/operations/listcustomfieldssecurity.md) | :heavy_check_mark:                                                                         | The security requirements to use for the request.                                          |
| `config`                                                                                   | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                               | :heavy_minus_sign:                                                                         | Available config options for making requests.                                              |


### Response

**Promise<[operations.ListCustomFieldsResponse](../../models/operations/listcustomfieldsresponse.md)>**


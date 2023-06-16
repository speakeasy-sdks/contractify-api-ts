# GetContractResponse


## Fields

| Field                                                                                     | Type                                                                                      | Required                                                                                  | Description                                                                               |
| ----------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------- |
| `contentType`                                                                             | *string*                                                                                  | :heavy_check_mark:                                                                        | N/A                                                                                       |
| `statusCode`                                                                              | *number*                                                                                  | :heavy_check_mark:                                                                        | N/A                                                                                       |
| `rawResponse`                                                                             | [AxiosResponse>](https://axios-http.com/docs/res_schema)                                  | :heavy_minus_sign:                                                                        | N/A                                                                                       |
| `getContract200ApplicationJSONObject`                                                     | [GetContract200ApplicationJSON](../../models/operations/getcontract200applicationjson.md) | :heavy_minus_sign:                                                                        | OK                                                                                        |
| `getContract401ApplicationJSONObject`                                                     | [GetContract401ApplicationJSON](../../models/operations/getcontract401applicationjson.md) | :heavy_minus_sign:                                                                        | Unauthenticated                                                                           |
| `getContract403ApplicationJSONObject`                                                     | [GetContract403ApplicationJSON](../../models/operations/getcontract403applicationjson.md) | :heavy_minus_sign:                                                                        | Forbidden                                                                                 |
| `getContract404ApplicationJSONObject`                                                     | [GetContract404ApplicationJSON](../../models/operations/getcontract404applicationjson.md) | :heavy_minus_sign:                                                                        | Not Found                                                                                 |
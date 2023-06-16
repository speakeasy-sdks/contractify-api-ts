# CreateContractResponse


## Fields

| Field                                                                                           | Type                                                                                            | Required                                                                                        | Description                                                                                     |
| ----------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------- |
| `contentType`                                                                                   | *string*                                                                                        | :heavy_check_mark:                                                                              | N/A                                                                                             |
| `statusCode`                                                                                    | *number*                                                                                        | :heavy_check_mark:                                                                              | N/A                                                                                             |
| `rawResponse`                                                                                   | [AxiosResponse>](https://axios-http.com/docs/res_schema)                                        | :heavy_minus_sign:                                                                              | N/A                                                                                             |
| `createContract201ApplicationJSONObject`                                                        | [CreateContract201ApplicationJSON](../../models/operations/createcontract201applicationjson.md) | :heavy_minus_sign:                                                                              | Created                                                                                         |
| `createContract401ApplicationJSONObject`                                                        | [CreateContract401ApplicationJSON](../../models/operations/createcontract401applicationjson.md) | :heavy_minus_sign:                                                                              | Unauthenticated                                                                                 |
| `createContract403ApplicationJSONObject`                                                        | [CreateContract403ApplicationJSON](../../models/operations/createcontract403applicationjson.md) | :heavy_minus_sign:                                                                              | Forbidden                                                                                       |
| `createContract422ApplicationJSONObject`                                                        | [CreateContract422ApplicationJSON](../../models/operations/createcontract422applicationjson.md) | :heavy_minus_sign:                                                                              | Invalid data posted                                                                             |
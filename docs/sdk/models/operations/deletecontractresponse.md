# DeleteContractResponse


## Fields

| Field                                                                                                                                         | Type                                                                                                                                          | Required                                                                                                                                      | Description                                                                                                                                   |
| --------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------- |
| `fourHundredApplicationJsonObject`                                                                                                            | [operations.DeleteContractResponseBody](../../../sdk/models/operations/deletecontractresponsebody.md)                                         | :heavy_minus_sign:                                                                                                                            | Precondition failed                                                                                                                           |
| `fourHundredAndOneApplicationJsonObject`                                                                                                      | [operations.DeleteContractContractsResponseBody](../../../sdk/models/operations/deletecontractcontractsresponsebody.md)                       | :heavy_minus_sign:                                                                                                                            | Unauthenticated                                                                                                                               |
| `fourHundredAndThreeApplicationJsonObject`                                                                                                    | [operations.DeleteContractContractsResponseResponseBody](../../../sdk/models/operations/deletecontractcontractsresponseresponsebody.md)       | :heavy_minus_sign:                                                                                                                            | Forbidden                                                                                                                                     |
| `fourHundredAndFourApplicationJsonObject`                                                                                                     | [operations.DeleteContractContractsResponse404ResponseBody](../../../sdk/models/operations/deletecontractcontractsresponse404responsebody.md) | :heavy_minus_sign:                                                                                                                            | Not Found                                                                                                                                     |
| `contentType`                                                                                                                                 | *string*                                                                                                                                      | :heavy_check_mark:                                                                                                                            | HTTP response content type for this operation                                                                                                 |
| `statusCode`                                                                                                                                  | *number*                                                                                                                                      | :heavy_check_mark:                                                                                                                            | HTTP response status code for this operation                                                                                                  |
| `rawResponse`                                                                                                                                 | [AxiosResponse](https://axios-http.com/docs/res_schema)                                                                                       | :heavy_minus_sign:                                                                                                                            | Raw HTTP response; suitable for custom response parsing                                                                                       |
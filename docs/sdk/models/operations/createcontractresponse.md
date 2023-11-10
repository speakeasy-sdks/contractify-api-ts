# CreateContractResponse


## Fields

| Field                                                                                                                                         | Type                                                                                                                                          | Required                                                                                                                                      | Description                                                                                                                                   |
| --------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------- |
| `twoHundredAndOneApplicationJsonObject`                                                                                                       | [operations.CreateContractResponseBody](../../../sdk/models/operations/createcontractresponsebody.md)                                         | :heavy_minus_sign:                                                                                                                            | Created                                                                                                                                       |
| `fourHundredAndOneApplicationJsonObject`                                                                                                      | [operations.CreateContractContractsResponseBody](../../../sdk/models/operations/createcontractcontractsresponsebody.md)                       | :heavy_minus_sign:                                                                                                                            | Unauthenticated                                                                                                                               |
| `fourHundredAndThreeApplicationJsonObject`                                                                                                    | [operations.CreateContractContractsResponseResponseBody](../../../sdk/models/operations/createcontractcontractsresponseresponsebody.md)       | :heavy_minus_sign:                                                                                                                            | Forbidden                                                                                                                                     |
| `fourHundredAndTwentyTwoApplicationJsonObject`                                                                                                | [operations.CreateContractContractsResponse422ResponseBody](../../../sdk/models/operations/createcontractcontractsresponse422responsebody.md) | :heavy_minus_sign:                                                                                                                            | Invalid data posted                                                                                                                           |
| `contentType`                                                                                                                                 | *string*                                                                                                                                      | :heavy_check_mark:                                                                                                                            | HTTP response content type for this operation                                                                                                 |
| `statusCode`                                                                                                                                  | *number*                                                                                                                                      | :heavy_check_mark:                                                                                                                            | HTTP response status code for this operation                                                                                                  |
| `rawResponse`                                                                                                                                 | [AxiosResponse](https://axios-http.com/docs/res_schema)                                                                                       | :heavy_minus_sign:                                                                                                                            | Raw HTTP response; suitable for custom response parsing                                                                                       |
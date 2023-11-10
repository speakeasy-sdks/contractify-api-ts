# DeleteRelationResponse


## Fields

| Field                                                                                                                                         | Type                                                                                                                                          | Required                                                                                                                                      | Description                                                                                                                                   |
| --------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------- |
| `fourHundredApplicationJsonObject`                                                                                                            | [operations.DeleteRelationResponseBody](../../../sdk/models/operations/deleterelationresponsebody.md)                                         | :heavy_minus_sign:                                                                                                                            | Precondition failed                                                                                                                           |
| `fourHundredAndOneApplicationJsonObject`                                                                                                      | [operations.DeleteRelationRelationsResponseBody](../../../sdk/models/operations/deleterelationrelationsresponsebody.md)                       | :heavy_minus_sign:                                                                                                                            | Unauthenticated                                                                                                                               |
| `fourHundredAndThreeApplicationJsonObject`                                                                                                    | [operations.DeleteRelationRelationsResponseResponseBody](../../../sdk/models/operations/deleterelationrelationsresponseresponsebody.md)       | :heavy_minus_sign:                                                                                                                            | Forbidden                                                                                                                                     |
| `fourHundredAndFourApplicationJsonObject`                                                                                                     | [operations.DeleteRelationRelationsResponse404ResponseBody](../../../sdk/models/operations/deleterelationrelationsresponse404responsebody.md) | :heavy_minus_sign:                                                                                                                            | Not Found                                                                                                                                     |
| `contentType`                                                                                                                                 | *string*                                                                                                                                      | :heavy_check_mark:                                                                                                                            | HTTP response content type for this operation                                                                                                 |
| `statusCode`                                                                                                                                  | *number*                                                                                                                                      | :heavy_check_mark:                                                                                                                            | HTTP response status code for this operation                                                                                                  |
| `rawResponse`                                                                                                                                 | [AxiosResponse](https://axios-http.com/docs/res_schema)                                                                                       | :heavy_minus_sign:                                                                                                                            | Raw HTTP response; suitable for custom response parsing                                                                                       |
# UpdateTaskResponse


## Fields

| Field                                                                                                                         | Type                                                                                                                          | Required                                                                                                                      | Description                                                                                                                   |
| ----------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------- |
| `twoHundredApplicationJsonObject`                                                                                             | [operations.UpdateTaskResponseBody](../../../sdk/models/operations/updatetaskresponsebody.md)                                 | :heavy_minus_sign:                                                                                                            | OK                                                                                                                            |
| `fourHundredAndOneApplicationJsonObject`                                                                                      | [operations.UpdateTaskTasksResponseBody](../../../sdk/models/operations/updatetasktasksresponsebody.md)                       | :heavy_minus_sign:                                                                                                            | Unauthenticated                                                                                                               |
| `fourHundredAndThreeApplicationJsonObject`                                                                                    | [operations.UpdateTaskTasksResponseResponseBody](../../../sdk/models/operations/updatetasktasksresponseresponsebody.md)       | :heavy_minus_sign:                                                                                                            | Forbidden                                                                                                                     |
| `fourHundredAndFourApplicationJsonObject`                                                                                     | [operations.UpdateTaskTasksResponse404ResponseBody](../../../sdk/models/operations/updatetasktasksresponse404responsebody.md) | :heavy_minus_sign:                                                                                                            | Not Found                                                                                                                     |
| `fourHundredAndTwentyTwoApplicationJsonObject`                                                                                | [operations.UpdateTaskTasksResponse422ResponseBody](../../../sdk/models/operations/updatetasktasksresponse422responsebody.md) | :heavy_minus_sign:                                                                                                            | Invalid data posted                                                                                                           |
| `contentType`                                                                                                                 | *string*                                                                                                                      | :heavy_check_mark:                                                                                                            | HTTP response content type for this operation                                                                                 |
| `statusCode`                                                                                                                  | *number*                                                                                                                      | :heavy_check_mark:                                                                                                            | HTTP response status code for this operation                                                                                  |
| `rawResponse`                                                                                                                 | [AxiosResponse](https://axios-http.com/docs/res_schema)                                                                       | :heavy_minus_sign:                                                                                                            | Raw HTTP response; suitable for custom response parsing                                                                       |
# ListDocumentsRequest


## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `company`                                                                                     | *number*                                                                                      | :heavy_check_mark:                                                                            | Id of the company                                                                             |
| `esigningStatus`                                                                              | [ListDocumentsEsigningStatus](../../models/operations/listdocumentsesigningstatus.md)         | :heavy_minus_sign:                                                                            | Return documents currently having this status in the eSigning process, can be comma separated |
| `esigningUpdatedAfter`                                                                        | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_minus_sign:                                                                            | Return documents where e-signing was updated after the given date                             |
| `page`                                                                                        | *number*                                                                                      | :heavy_minus_sign:                                                                            | The page to retrieve                                                                          |
| `relationId`                                                                                  | *number*                                                                                      | :heavy_minus_sign:                                                                            | Return documents linked to a relation                                                         |
| `signedAfter`                                                                                 | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_minus_sign:                                                                            | Return documents e-signed after the given date                                                |
# documents

### Available Operations

* [deleteDocument](#deletedocument) - Delete a document
* [getDocument](#getdocument) - Get a document
* [listDocuments](#listdocuments) - List documents
* [updateDocument](#updatedocument) - Update a document

## deleteDocument

Delete a document

### Example Usage

```typescript
import { ContractifyProduction } from "contractify";
import { DeleteDocumentResponse } from "contractify/dist/sdk/models/operations";

const sdk = new ContractifyProduction();

sdk.documents.deleteDocument({
  company: 18789,
  document: 324141,
}, {
  oAuth2: "",
  personalAccessToken: "",
}).then((res: DeleteDocumentResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                              | Type                                                                                   | Required                                                                               | Description                                                                            |
| -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- |
| `request`                                                                              | [operations.DeleteDocumentRequest](../../models/operations/deletedocumentrequest.md)   | :heavy_check_mark:                                                                     | The request object to use for the request.                                             |
| `security`                                                                             | [operations.DeleteDocumentSecurity](../../models/operations/deletedocumentsecurity.md) | :heavy_check_mark:                                                                     | The security requirements to use for the request.                                      |
| `config`                                                                               | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                           | :heavy_minus_sign:                                                                     | Available config options for making requests.                                          |


### Response

**Promise<[operations.DeleteDocumentResponse](../../models/operations/deletedocumentresponse.md)>**


## getDocument

Get information about a document

### Example Usage

```typescript
import { ContractifyProduction } from "contractify";
import { GetDocumentResponse } from "contractify/dist/sdk/models/operations";

const sdk = new ContractifyProduction();

sdk.documents.getDocument({
  company: 617636,
  document: 149675,
}, {
  oAuth2: "",
  personalAccessToken: "",
}).then((res: GetDocumentResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                        | Type                                                                             | Required                                                                         | Description                                                                      |
| -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- |
| `request`                                                                        | [operations.GetDocumentRequest](../../models/operations/getdocumentrequest.md)   | :heavy_check_mark:                                                               | The request object to use for the request.                                       |
| `security`                                                                       | [operations.GetDocumentSecurity](../../models/operations/getdocumentsecurity.md) | :heavy_check_mark:                                                               | The security requirements to use for the request.                                |
| `config`                                                                         | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                     | :heavy_minus_sign:                                                               | Available config options for making requests.                                    |


### Response

**Promise<[operations.GetDocumentResponse](../../models/operations/getdocumentresponse.md)>**


## listDocuments

List all the documents within a company

### Example Usage

```typescript
import { ContractifyProduction } from "contractify";
import { ListDocumentsEsigningStatus, ListDocumentsResponse } from "contractify/dist/sdk/models/operations";

const sdk = new ContractifyProduction();

sdk.documents.listDocuments({
  company: 612096,
  esigningStatus: ListDocumentsEsigningStatus.SentToLegal,
  esigningUpdatedAfter: new Date("2022-03-24T20:42:46.563Z"),
  page: 943749,
  relationId: 902599,
  signedAfter: new Date("2022-02-06T12:52:33.708Z"),
}, {
  oAuth2: "",
  personalAccessToken: "",
}).then((res: ListDocumentsResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                            | Type                                                                                 | Required                                                                             | Description                                                                          |
| ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ |
| `request`                                                                            | [operations.ListDocumentsRequest](../../models/operations/listdocumentsrequest.md)   | :heavy_check_mark:                                                                   | The request object to use for the request.                                           |
| `security`                                                                           | [operations.ListDocumentsSecurity](../../models/operations/listdocumentssecurity.md) | :heavy_check_mark:                                                                   | The security requirements to use for the request.                                    |
| `config`                                                                             | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                         | :heavy_minus_sign:                                                                   | Available config options for making requests.                                        |


### Response

**Promise<[operations.ListDocumentsResponse](../../models/operations/listdocumentsresponse.md)>**


## updateDocument

Update a document

### Example Usage

```typescript
import { ContractifyProduction } from "contractify";
import { UpdateDocumentResponse } from "contractify/dist/sdk/models/operations";

const sdk = new ContractifyProduction();

sdk.documents.updateDocument({
  documentWrite: {
    contracts: [
      1,
      1,
    ],
    customFieldValues: [
      {
        customFieldId: 2,
        value: "iure",
      },
      {
        customFieldId: 2,
        value: "saepe",
      },
      {
        customFieldId: 2,
        value: "quidem",
      },
    ],
    description: "Lorem ipsum dolor sit amet.",
    dossiers: [
      1,
    ],
    name: "filename.pdf",
    ownerId: 1,
  },
  company: 60225,
  document: 969810,
}, {
  oAuth2: "",
  personalAccessToken: "",
}).then((res: UpdateDocumentResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                              | Type                                                                                   | Required                                                                               | Description                                                                            |
| -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- |
| `request`                                                                              | [operations.UpdateDocumentRequest](../../models/operations/updatedocumentrequest.md)   | :heavy_check_mark:                                                                     | The request object to use for the request.                                             |
| `security`                                                                             | [operations.UpdateDocumentSecurity](../../models/operations/updatedocumentsecurity.md) | :heavy_check_mark:                                                                     | The security requirements to use for the request.                                      |
| `config`                                                                               | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                           | :heavy_minus_sign:                                                                     | Available config options for making requests.                                          |


### Response

**Promise<[operations.UpdateDocumentResponse](../../models/operations/updatedocumentresponse.md)>**


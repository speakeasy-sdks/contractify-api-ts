# Documents

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
import { DeleteDocumentResponse, DeleteDocumentSecurity } from "contractify/dist/sdk/models/operations";

const sdk = new ContractifyProduction();
const operationSecurity: DeleteDocumentSecurity = {
  oAuth2: "",
  personalAccessToken: "",
};

sdk.documents.deleteDocument({
  company: 20218,
  document: 368241,
}, operationSecurity).then((res: DeleteDocumentResponse) => {
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
import { GetDocumentResponse, GetDocumentSecurity } from "contractify/dist/sdk/models/operations";

const sdk = new ContractifyProduction();
const operationSecurity: GetDocumentSecurity = {
  oAuth2: "",
  personalAccessToken: "",
};

sdk.documents.getDocument({
  company: 832620,
  document: 957156,
}, operationSecurity).then((res: GetDocumentResponse) => {
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
import { ListDocumentsEsigningStatus, ListDocumentsResponse, ListDocumentsSecurity } from "contractify/dist/sdk/models/operations";

const sdk = new ContractifyProduction();
const operationSecurity: ListDocumentsSecurity = {
  oAuth2: "",
  personalAccessToken: "",
};

sdk.documents.listDocuments({
  company: 778157,
  esigningStatus: ListDocumentsEsigningStatus.SentToLegal,
  esigningUpdatedAfter: new Date("2020-05-23T06:06:25.221Z"),
  page: 978619,
  relationId: 473608,
  signedAfter: new Date("2020-08-07T00:03:55.328Z"),
}, operationSecurity).then((res: ListDocumentsResponse) => {
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
import { UpdateDocumentResponse, UpdateDocumentSecurity } from "contractify/dist/sdk/models/operations";

const sdk = new ContractifyProduction();
const operationSecurity: UpdateDocumentSecurity = {
  oAuth2: "",
  personalAccessToken: "",
};

sdk.documents.updateDocument({
  documentWrite: {
    contracts: [
      1,
    ],
    customFieldValues: [
      {
        customFieldId: 2,
        value: "esse",
      },
    ],
    description: "Lorem ipsum dolor sit amet.",
    dossiers: [
      1,
    ],
    name: "filename.pdf",
    ownerId: 1,
  },
  company: 520478,
  document: 780529,
}, operationSecurity).then((res: UpdateDocumentResponse) => {
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


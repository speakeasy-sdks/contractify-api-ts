# contractify

<!-- Start SDK Installation -->
## SDK Installation

### NPM

```bash
npm add https://github.com/speakeasy-sdks/contractify-api-ts
```

### Yarn

```bash
yarn add https://github.com/speakeasy-sdks/contractify-api-ts
```
<!-- End SDK Installation -->

## SDK Example Usage
<!-- Start SDK Example Usage -->
### Example

```typescript
import { ContractifyProduction } from "contractify";

(async () => {
    const sdk = new ContractifyProduction({
        security: {
            oAuth2: "",
            personalAccessToken: "",
        },
    });

    const res = await sdk.contractTypes.listContractTypes({
        company: 839467,
    });

    if (res.statusCode == 200) {
        // handle response
    }
})();

```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### [contractTypes](docs/sdks/contracttypes/README.md)

* [listContractTypes](docs/sdks/contracttypes/README.md#listcontracttypes) - List contract types

### [contracts](docs/sdks/contracts/README.md)

* [createContract](docs/sdks/contracts/README.md#createcontract) - Create a contract
* [deleteContract](docs/sdks/contracts/README.md#deletecontract) - Delete a contract
* [getContract](docs/sdks/contracts/README.md#getcontract) - Get a contract
* [listContracts](docs/sdks/contracts/README.md#listcontracts) - List contracts
* [updateContract](docs/sdks/contracts/README.md#updatecontract) - Update a contract

### [customFields](docs/sdks/customfields/README.md)

* [listCustomFields](docs/sdks/customfields/README.md#listcustomfields) - List custom fields

### [departments](docs/sdks/departments/README.md)

* [createDepartment](docs/sdks/departments/README.md#createdepartment) - Create a department
* [deleteDepartment](docs/sdks/departments/README.md#deletedepartment) - Delete a department
* [getDepartment](docs/sdks/departments/README.md#getdepartment) - Get a department
* [listDepartments](docs/sdks/departments/README.md#listdepartments) - List departments
* [updateDepartment](docs/sdks/departments/README.md#updatedepartment) - Update a department

### [documents](docs/sdks/documents/README.md)

* [deleteDocument](docs/sdks/documents/README.md#deletedocument) - Delete a document
* [getDocument](docs/sdks/documents/README.md#getdocument) - Get a document
* [listDocuments](docs/sdks/documents/README.md#listdocuments) - List documents
* [updateDocument](docs/sdks/documents/README.md#updatedocument) - Update a document

### [subfolders](docs/sdks/subfolders/README.md)

* [listSubfolders](docs/sdks/subfolders/README.md#listsubfolders) - List subfolders

### [legalEntities](docs/sdks/legalentities/README.md)

* [listLegalEntities](docs/sdks/legalentities/README.md#listlegalentities) - List legal entities

### [offices](docs/sdks/offices/README.md)

* [createOffice](docs/sdks/offices/README.md#createoffice) - Create an office
* [deleteOffice](docs/sdks/offices/README.md#deleteoffice) - Delete an office
* [getOffice](docs/sdks/offices/README.md#getoffice) - Get an office
* [listOffices](docs/sdks/offices/README.md#listoffices) - List offices
* [updateOffice](docs/sdks/offices/README.md#updateoffice) - Update an office

### [relations](docs/sdks/relations/README.md)

* [createRelation](docs/sdks/relations/README.md#createrelation) - Create a relation
* [deleteRelation](docs/sdks/relations/README.md#deleterelation) - Delete a relation
* [getRelation](docs/sdks/relations/README.md#getrelation) - Get a relation
* [listRelations](docs/sdks/relations/README.md#listrelations) - List relations
* [updateRelation](docs/sdks/relations/README.md#updaterelation) - Update a relation

### [tasks](docs/sdks/tasks/README.md)

* [createTask](docs/sdks/tasks/README.md#createtask) - Create a task
* [deleteTask](docs/sdks/tasks/README.md#deletetask) - Delete a task
* [getTask](docs/sdks/tasks/README.md#gettask) - Get a task
* [listTasks](docs/sdks/tasks/README.md#listtasks) - List tasks
* [updateTask](docs/sdks/tasks/README.md#updatetask) - Update a task

### [users](docs/sdks/users/README.md)

* [currentUser](docs/sdks/users/README.md#currentuser) - Current User
* [listUsers](docs/sdks/users/README.md#listusers) - List users
<!-- End SDK Available Operations -->



<!-- Start Dev Containers -->

<!-- End Dev Containers -->



<!-- Start Error Handling -->
## Error Handling

Handling errors in this SDK should largely match your expectations.  All operations return a response object or throw an error.  If Error objects are specified in your OpenAPI Spec, the SDK will throw the appropriate Error type.

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 400-600         | */*             |

Example

```typescript
import { ContractifyProduction } from "contractify";

(async () => {
    const sdk = new ContractifyProduction({
        security: {
            oAuth2: "",
            personalAccessToken: "",
        },
    });

    let res;
    try {
        res = await sdk.contractTypes.listContractTypes({
            company: 839467,
        });
    } catch (e) {}

    if (res.statusCode == 200) {
        // handle response
    }
})();

```
<!-- End Error Handling -->



<!-- Start Server Selection -->
## Server Selection

### Select Server by Index

You can override the default server globally by passing a server index to the `serverIdx: number` optional parameter when initializing the SDK client instance. The selected server will then be used as the default on the operations that use it. This table lists the indexes associated with the available servers:

| # | Server | Variables |
| - | ------ | --------- |
| 0 | `https://app.contractify.be` | None |

#### Example

```typescript
import { ContractifyProduction } from "contractify";

(async () => {
    const sdk = new ContractifyProduction({
        serverIdx: 0,
        security: {
            oAuth2: "",
            personalAccessToken: "",
        },
    });

    const res = await sdk.contractTypes.listContractTypes({
        company: 839467,
    });

    if (res.statusCode == 200) {
        // handle response
    }
})();

```


### Override Server URL Per-Client

The default server can also be overridden globally by passing a URL to the `serverURL: str` optional parameter when initializing the SDK client instance. For example:
```typescript
import { ContractifyProduction } from "contractify";

(async () => {
    const sdk = new ContractifyProduction({
        serverURL: "https://app.contractify.be",
        security: {
            oAuth2: "",
            personalAccessToken: "",
        },
    });

    const res = await sdk.contractTypes.listContractTypes({
        company: 839467,
    });

    if (res.statusCode == 200) {
        // handle response
    }
})();

```
<!-- End Server Selection -->



<!-- Start Custom HTTP Client -->
## Custom HTTP Client

The Typescript SDK makes API calls using the (axios)[https://axios-http.com/docs/intro] HTTP library.  In order to provide a convenient way to configure timeouts, cookies, proxies, custom headers, and other low-level configuration, you can initialize the SDK client with a custom `AxiosInstance` object.

For example, you could specify a header for every request that your sdk makes as follows:

```typescript
from contractify import ContractifyProduction;
import axios;

const httpClient = axios.create({
    headers: {'x-custom-header': 'someValue'}
})

const sdk = new ContractifyProduction({defaultClient: httpClient});
```
<!-- End Custom HTTP Client -->



<!-- Start Authentication -->
## Authentication

### Per-Client Security Schemes

This SDK supports the following security schemes globally:

| Name                  | Type                  | Scheme                |
| --------------------- | --------------------- | --------------------- |
| `oAuth2`              | oauth2                | OAuth2 token          |
| `personalAccessToken` | http                  | HTTP Bearer           |

You can set the security parameters through the `security` optional parameter when initializing the SDK client instance. The selected scheme will be used by default to authenticate with the API for all operations that support it. For example:
```typescript
import { ContractifyProduction } from "contractify";

(async () => {
    const sdk = new ContractifyProduction({
        security: {
            oAuth2: "",
            personalAccessToken: "",
        },
    });

    const res = await sdk.contractTypes.listContractTypes({
        company: 839467,
    });

    if (res.statusCode == 200) {
        // handle response
    }
})();

```
<!-- End Authentication -->

<!-- Placeholder for Future Speakeasy SDK Sections -->



### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)

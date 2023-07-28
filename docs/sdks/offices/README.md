# offices

### Available Operations

* [createOffice](#createoffice) - Create an office
* [deleteOffice](#deleteoffice) - Delete an office
* [getOffice](#getoffice) - Get an office
* [listOffices](#listoffices) - List offices
* [updateOffice](#updateoffice) - Update an office

## createOffice

Create an office

### Example Usage

```typescript
import { ContractifyProduction } from "contractify";
import { CreateOfficeResponse, CreateOfficeSecurity } from "contractify/dist/sdk/models/operations";

const sdk = new ContractifyProduction();
const operationSecurity: CreateOfficeSecurity = {
  oAuth2: "",
  personalAccessToken: "",
};

sdk.offices.createOffice({
  officeWrite: {
    bus: "1",
    city: "Sleidinge",
    contactPerson: "Ada Lovelace",
    country: "Belgium",
    email: "info@contractify.be",
    id: 1,
    name: "Ghent",
    numberIdentity: "OFF-GHENT",
    phone: "+32 9 234 28 97",
    street: "Polenstraat 163",
    zip: "9940",
  },
  company: 653140,
}, operationSecurity).then((res: CreateOfficeResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                          | Type                                                                               | Required                                                                           | Description                                                                        |
| ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- |
| `request`                                                                          | [operations.CreateOfficeRequest](../../models/operations/createofficerequest.md)   | :heavy_check_mark:                                                                 | The request object to use for the request.                                         |
| `security`                                                                         | [operations.CreateOfficeSecurity](../../models/operations/createofficesecurity.md) | :heavy_check_mark:                                                                 | The security requirements to use for the request.                                  |
| `config`                                                                           | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                       | :heavy_minus_sign:                                                                 | Available config options for making requests.                                      |


### Response

**Promise<[operations.CreateOfficeResponse](../../models/operations/createofficeresponse.md)>**


## deleteOffice

Delete an office

### Example Usage

```typescript
import { ContractifyProduction } from "contractify";
import { DeleteOfficeResponse, DeleteOfficeSecurity } from "contractify/dist/sdk/models/operations";

const sdk = new ContractifyProduction();
const operationSecurity: DeleteOfficeSecurity = {
  oAuth2: "",
  personalAccessToken: "",
};

sdk.offices.deleteOffice({
  company: 670638,
  office: 170909,
}, operationSecurity).then((res: DeleteOfficeResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                          | Type                                                                               | Required                                                                           | Description                                                                        |
| ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- |
| `request`                                                                          | [operations.DeleteOfficeRequest](../../models/operations/deleteofficerequest.md)   | :heavy_check_mark:                                                                 | The request object to use for the request.                                         |
| `security`                                                                         | [operations.DeleteOfficeSecurity](../../models/operations/deleteofficesecurity.md) | :heavy_check_mark:                                                                 | The security requirements to use for the request.                                  |
| `config`                                                                           | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                       | :heavy_minus_sign:                                                                 | Available config options for making requests.                                      |


### Response

**Promise<[operations.DeleteOfficeResponse](../../models/operations/deleteofficeresponse.md)>**


## getOffice

Get information about an office

### Example Usage

```typescript
import { ContractifyProduction } from "contractify";
import { GetOfficeResponse, GetOfficeSecurity } from "contractify/dist/sdk/models/operations";

const sdk = new ContractifyProduction();
const operationSecurity: GetOfficeSecurity = {
  oAuth2: "",
  personalAccessToken: "",
};

sdk.offices.getOffice({
  company: 210382,
  office: 358152,
}, operationSecurity).then((res: GetOfficeResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                    | Type                                                                         | Required                                                                     | Description                                                                  |
| ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- |
| `request`                                                                    | [operations.GetOfficeRequest](../../models/operations/getofficerequest.md)   | :heavy_check_mark:                                                           | The request object to use for the request.                                   |
| `security`                                                                   | [operations.GetOfficeSecurity](../../models/operations/getofficesecurity.md) | :heavy_check_mark:                                                           | The security requirements to use for the request.                            |
| `config`                                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                 | :heavy_minus_sign:                                                           | Available config options for making requests.                                |


### Response

**Promise<[operations.GetOfficeResponse](../../models/operations/getofficeresponse.md)>**


## listOffices

List all the offices within a company

### Example Usage

```typescript
import { ContractifyProduction } from "contractify";
import { ListOfficesResponse, ListOfficesSecurity } from "contractify/dist/sdk/models/operations";

const sdk = new ContractifyProduction();
const operationSecurity: ListOfficesSecurity = {
  oAuth2: "",
  personalAccessToken: "",
};

sdk.offices.listOffices({
  company: 128926,
}, operationSecurity).then((res: ListOfficesResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                        | Type                                                                             | Required                                                                         | Description                                                                      |
| -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- |
| `request`                                                                        | [operations.ListOfficesRequest](../../models/operations/listofficesrequest.md)   | :heavy_check_mark:                                                               | The request object to use for the request.                                       |
| `security`                                                                       | [operations.ListOfficesSecurity](../../models/operations/listofficessecurity.md) | :heavy_check_mark:                                                               | The security requirements to use for the request.                                |
| `config`                                                                         | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                     | :heavy_minus_sign:                                                               | Available config options for making requests.                                    |


### Response

**Promise<[operations.ListOfficesResponse](../../models/operations/listofficesresponse.md)>**


## updateOffice

Update an office

### Example Usage

```typescript
import { ContractifyProduction } from "contractify";
import { UpdateOfficeResponse, UpdateOfficeSecurity } from "contractify/dist/sdk/models/operations";

const sdk = new ContractifyProduction();
const operationSecurity: UpdateOfficeSecurity = {
  oAuth2: "",
  personalAccessToken: "",
};

sdk.offices.updateOffice({
  officeWrite: {
    bus: "1",
    city: "Sleidinge",
    contactPerson: "Ada Lovelace",
    country: "Belgium",
    email: "info@contractify.be",
    id: 1,
    name: "Ghent",
    numberIdentity: "OFF-GHENT",
    phone: "+32 9 234 28 97",
    street: "Polenstraat 163",
    zip: "9940",
  },
  company: 750686,
  office: 315428,
}, operationSecurity).then((res: UpdateOfficeResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                          | Type                                                                               | Required                                                                           | Description                                                                        |
| ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- |
| `request`                                                                          | [operations.UpdateOfficeRequest](../../models/operations/updateofficerequest.md)   | :heavy_check_mark:                                                                 | The request object to use for the request.                                         |
| `security`                                                                         | [operations.UpdateOfficeSecurity](../../models/operations/updateofficesecurity.md) | :heavy_check_mark:                                                                 | The security requirements to use for the request.                                  |
| `config`                                                                           | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                       | :heavy_minus_sign:                                                                 | Available config options for making requests.                                      |


### Response

**Promise<[operations.UpdateOfficeResponse](../../models/operations/updateofficeresponse.md)>**


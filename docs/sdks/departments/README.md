# departments

### Available Operations

* [createDepartment](#createdepartment) - Create a department
* [deleteDepartment](#deletedepartment) - Delete a department
* [getDepartment](#getdepartment) - Get a department
* [listDepartments](#listdepartments) - List departments
* [updateDepartment](#updatedepartment) - Update a department

## createDepartment

Create a department

### Example Usage

```typescript
import { ContractifyProduction } from "contractify";
import { CreateDepartmentResponse } from "contractify/dist/sdk/models/operations";

const sdk = new ContractifyProduction();

sdk.departments.createDepartment({
  departmentWrite: {
    name: "Sales",
  },
  company: 264555,
}, {
  oAuth2: "",
  personalAccessToken: "",
}).then((res: CreateDepartmentResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                  | Type                                                                                       | Required                                                                                   | Description                                                                                |
| ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ |
| `request`                                                                                  | [operations.CreateDepartmentRequest](../../models/operations/createdepartmentrequest.md)   | :heavy_check_mark:                                                                         | The request object to use for the request.                                                 |
| `security`                                                                                 | [operations.CreateDepartmentSecurity](../../models/operations/createdepartmentsecurity.md) | :heavy_check_mark:                                                                         | The security requirements to use for the request.                                          |
| `config`                                                                                   | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                               | :heavy_minus_sign:                                                                         | Available config options for making requests.                                              |


### Response

**Promise<[operations.CreateDepartmentResponse](../../models/operations/createdepartmentresponse.md)>**


## deleteDepartment

Delete a department

### Example Usage

```typescript
import { ContractifyProduction } from "contractify";
import { DeleteDepartmentResponse } from "contractify/dist/sdk/models/operations";

const sdk = new ContractifyProduction();

sdk.departments.deleteDepartment({
  company: 186332,
  department: 774234,
}, {
  oAuth2: "",
  personalAccessToken: "",
}).then((res: DeleteDepartmentResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                  | Type                                                                                       | Required                                                                                   | Description                                                                                |
| ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ |
| `request`                                                                                  | [operations.DeleteDepartmentRequest](../../models/operations/deletedepartmentrequest.md)   | :heavy_check_mark:                                                                         | The request object to use for the request.                                                 |
| `security`                                                                                 | [operations.DeleteDepartmentSecurity](../../models/operations/deletedepartmentsecurity.md) | :heavy_check_mark:                                                                         | The security requirements to use for the request.                                          |
| `config`                                                                                   | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                               | :heavy_minus_sign:                                                                         | Available config options for making requests.                                              |


### Response

**Promise<[operations.DeleteDepartmentResponse](../../models/operations/deletedepartmentresponse.md)>**


## getDepartment

Get information about a department

### Example Usage

```typescript
import { ContractifyProduction } from "contractify";
import { GetDepartmentResponse } from "contractify/dist/sdk/models/operations";

const sdk = new ContractifyProduction();

sdk.departments.getDepartment({
  company: 736918,
  department: 456150,
}, {
  oAuth2: "",
  personalAccessToken: "",
}).then((res: GetDepartmentResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                            | Type                                                                                 | Required                                                                             | Description                                                                          |
| ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ |
| `request`                                                                            | [operations.GetDepartmentRequest](../../models/operations/getdepartmentrequest.md)   | :heavy_check_mark:                                                                   | The request object to use for the request.                                           |
| `security`                                                                           | [operations.GetDepartmentSecurity](../../models/operations/getdepartmentsecurity.md) | :heavy_check_mark:                                                                   | The security requirements to use for the request.                                    |
| `config`                                                                             | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                         | :heavy_minus_sign:                                                                   | Available config options for making requests.                                        |


### Response

**Promise<[operations.GetDepartmentResponse](../../models/operations/getdepartmentresponse.md)>**


## listDepartments

List all the departments within a company

### Example Usage

```typescript
import { ContractifyProduction } from "contractify";
import { ListDepartmentsResponse } from "contractify/dist/sdk/models/operations";

const sdk = new ContractifyProduction();

sdk.departments.listDepartments({
  company: 216550,
}, {
  oAuth2: "",
  personalAccessToken: "",
}).then((res: ListDepartmentsResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                | Type                                                                                     | Required                                                                                 | Description                                                                              |
| ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- |
| `request`                                                                                | [operations.ListDepartmentsRequest](../../models/operations/listdepartmentsrequest.md)   | :heavy_check_mark:                                                                       | The request object to use for the request.                                               |
| `security`                                                                               | [operations.ListDepartmentsSecurity](../../models/operations/listdepartmentssecurity.md) | :heavy_check_mark:                                                                       | The security requirements to use for the request.                                        |
| `config`                                                                                 | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                             | :heavy_minus_sign:                                                                       | Available config options for making requests.                                            |


### Response

**Promise<[operations.ListDepartmentsResponse](../../models/operations/listdepartmentsresponse.md)>**


## updateDepartment

Update a department

### Example Usage

```typescript
import { ContractifyProduction } from "contractify";
import { UpdateDepartmentResponse } from "contractify/dist/sdk/models/operations";

const sdk = new ContractifyProduction();

sdk.departments.updateDepartment({
  departmentWrite: {
    name: "Sales",
  },
  company: 568434,
  department: 135218,
}, {
  oAuth2: "",
  personalAccessToken: "",
}).then((res: UpdateDepartmentResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                  | Type                                                                                       | Required                                                                                   | Description                                                                                |
| ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ |
| `request`                                                                                  | [operations.UpdateDepartmentRequest](../../models/operations/updatedepartmentrequest.md)   | :heavy_check_mark:                                                                         | The request object to use for the request.                                                 |
| `security`                                                                                 | [operations.UpdateDepartmentSecurity](../../models/operations/updatedepartmentsecurity.md) | :heavy_check_mark:                                                                         | The security requirements to use for the request.                                          |
| `config`                                                                                   | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                               | :heavy_minus_sign:                                                                         | Available config options for making requests.                                              |


### Response

**Promise<[operations.UpdateDepartmentResponse](../../models/operations/updatedepartmentresponse.md)>**


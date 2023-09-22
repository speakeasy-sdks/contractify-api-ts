# Departments

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

const sdk = new ContractifyProduction({
  security: {
    oAuth2: "",
    personalAccessToken: "",
  },
});

sdk.departments.createDepartment({
  departmentWrite: {
    name: "Sales",
  },
  company: 392785,
}).then((res: CreateDepartmentResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                | Type                                                                                     | Required                                                                                 | Description                                                                              |
| ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- |
| `request`                                                                                | [operations.CreateDepartmentRequest](../../models/operations/createdepartmentrequest.md) | :heavy_check_mark:                                                                       | The request object to use for the request.                                               |
| `config`                                                                                 | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                             | :heavy_minus_sign:                                                                       | Available config options for making requests.                                            |


### Response

**Promise<[operations.CreateDepartmentResponse](../../models/operations/createdepartmentresponse.md)>**


## deleteDepartment

Delete a department

### Example Usage

```typescript
import { ContractifyProduction } from "contractify";
import { DeleteDepartmentResponse } from "contractify/dist/sdk/models/operations";

const sdk = new ContractifyProduction({
  security: {
    oAuth2: "",
    personalAccessToken: "",
  },
});

sdk.departments.deleteDepartment({
  company: 925597,
  department: 836079,
}).then((res: DeleteDepartmentResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                | Type                                                                                     | Required                                                                                 | Description                                                                              |
| ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- |
| `request`                                                                                | [operations.DeleteDepartmentRequest](../../models/operations/deletedepartmentrequest.md) | :heavy_check_mark:                                                                       | The request object to use for the request.                                               |
| `config`                                                                                 | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                             | :heavy_minus_sign:                                                                       | Available config options for making requests.                                            |


### Response

**Promise<[operations.DeleteDepartmentResponse](../../models/operations/deletedepartmentresponse.md)>**


## getDepartment

Get information about a department

### Example Usage

```typescript
import { ContractifyProduction } from "contractify";
import { GetDepartmentResponse } from "contractify/dist/sdk/models/operations";

const sdk = new ContractifyProduction({
  security: {
    oAuth2: "",
    personalAccessToken: "",
  },
});

sdk.departments.getDepartment({
  company: 71036,
  department: 337396,
}).then((res: GetDepartmentResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                          | Type                                                                               | Required                                                                           | Description                                                                        |
| ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- |
| `request`                                                                          | [operations.GetDepartmentRequest](../../models/operations/getdepartmentrequest.md) | :heavy_check_mark:                                                                 | The request object to use for the request.                                         |
| `config`                                                                           | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                       | :heavy_minus_sign:                                                                 | Available config options for making requests.                                      |


### Response

**Promise<[operations.GetDepartmentResponse](../../models/operations/getdepartmentresponse.md)>**


## listDepartments

List all the departments within a company

### Example Usage

```typescript
import { ContractifyProduction } from "contractify";
import { ListDepartmentsResponse } from "contractify/dist/sdk/models/operations";

const sdk = new ContractifyProduction({
  security: {
    oAuth2: "",
    personalAccessToken: "",
  },
});

sdk.departments.listDepartments({
  company: 87129,
}).then((res: ListDepartmentsResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                              | Type                                                                                   | Required                                                                               | Description                                                                            |
| -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- |
| `request`                                                                              | [operations.ListDepartmentsRequest](../../models/operations/listdepartmentsrequest.md) | :heavy_check_mark:                                                                     | The request object to use for the request.                                             |
| `config`                                                                               | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                           | :heavy_minus_sign:                                                                     | Available config options for making requests.                                          |


### Response

**Promise<[operations.ListDepartmentsResponse](../../models/operations/listdepartmentsresponse.md)>**


## updateDepartment

Update a department

### Example Usage

```typescript
import { ContractifyProduction } from "contractify";
import { UpdateDepartmentResponse } from "contractify/dist/sdk/models/operations";

const sdk = new ContractifyProduction({
  security: {
    oAuth2: "",
    personalAccessToken: "",
  },
});

sdk.departments.updateDepartment({
  departmentWrite: {
    name: "Sales",
  },
  company: 648172,
  department: 20218,
}).then((res: UpdateDepartmentResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                | Type                                                                                     | Required                                                                                 | Description                                                                              |
| ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- |
| `request`                                                                                | [operations.UpdateDepartmentRequest](../../models/operations/updatedepartmentrequest.md) | :heavy_check_mark:                                                                       | The request object to use for the request.                                               |
| `config`                                                                                 | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                             | :heavy_minus_sign:                                                                       | Available config options for making requests.                                            |


### Response

**Promise<[operations.UpdateDepartmentResponse](../../models/operations/updatedepartmentresponse.md)>**


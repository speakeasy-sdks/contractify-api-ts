# Departments
(*departments*)

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

async function run() {
  const sdk = new ContractifyProduction({
    security: {
      oAuth2: "Bearer <YOUR_ACCESS_TOKEN_HERE>",
    },
  });

  const res = await sdk.departments.createDepartment({
    departmentWrite: {
      name: "Sales",
    },
    company: 33324,
  });

  if (res.statusCode == 200) {
    // handle response
  }
}

run();
```

### Parameters

| Parameter                                                                                    | Type                                                                                         | Required                                                                                     | Description                                                                                  |
| -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- |
| `request`                                                                                    | [operations.CreateDepartmentRequest](../../sdk/models/operations/createdepartmentrequest.md) | :heavy_check_mark:                                                                           | The request object to use for the request.                                                   |
| `config`                                                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                 | :heavy_minus_sign:                                                                           | Available config options for making requests.                                                |


### Response

**Promise<[operations.CreateDepartmentResponse](../../sdk/models/operations/createdepartmentresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 400-600         | */*             |

## deleteDepartment

Delete a department

### Example Usage

```typescript
import { ContractifyProduction } from "contractify";

async function run() {
  const sdk = new ContractifyProduction({
    security: {
      oAuth2: "Bearer <YOUR_ACCESS_TOKEN_HERE>",
    },
  });

  const res = await sdk.departments.deleteDepartment({
    company: 701942,
    department: 751163,
  });

  if (res.statusCode == 200) {
    // handle response
  }
}

run();
```

### Parameters

| Parameter                                                                                    | Type                                                                                         | Required                                                                                     | Description                                                                                  |
| -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- |
| `request`                                                                                    | [operations.DeleteDepartmentRequest](../../sdk/models/operations/deletedepartmentrequest.md) | :heavy_check_mark:                                                                           | The request object to use for the request.                                                   |
| `config`                                                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                 | :heavy_minus_sign:                                                                           | Available config options for making requests.                                                |


### Response

**Promise<[operations.DeleteDepartmentResponse](../../sdk/models/operations/deletedepartmentresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 400-600         | */*             |

## getDepartment

Get information about a department

### Example Usage

```typescript
import { ContractifyProduction } from "contractify";

async function run() {
  const sdk = new ContractifyProduction({
    security: {
      oAuth2: "Bearer <YOUR_ACCESS_TOKEN_HERE>",
    },
  });

  const res = await sdk.departments.getDepartment({
    company: 255130,
    department: 855529,
  });

  if (res.statusCode == 200) {
    // handle response
  }
}

run();
```

### Parameters

| Parameter                                                                              | Type                                                                                   | Required                                                                               | Description                                                                            |
| -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- |
| `request`                                                                              | [operations.GetDepartmentRequest](../../sdk/models/operations/getdepartmentrequest.md) | :heavy_check_mark:                                                                     | The request object to use for the request.                                             |
| `config`                                                                               | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                           | :heavy_minus_sign:                                                                     | Available config options for making requests.                                          |


### Response

**Promise<[operations.GetDepartmentResponse](../../sdk/models/operations/getdepartmentresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 400-600         | */*             |

## listDepartments

List all the departments within a company

### Example Usage

```typescript
import { ContractifyProduction } from "contractify";

async function run() {
  const sdk = new ContractifyProduction({
    security: {
      oAuth2: "Bearer <YOUR_ACCESS_TOKEN_HERE>",
    },
  });

  const res = await sdk.departments.listDepartments({
    company: 117069,
  });

  if (res.statusCode == 200) {
    // handle response
  }
}

run();
```

### Parameters

| Parameter                                                                                  | Type                                                                                       | Required                                                                                   | Description                                                                                |
| ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ |
| `request`                                                                                  | [operations.ListDepartmentsRequest](../../sdk/models/operations/listdepartmentsrequest.md) | :heavy_check_mark:                                                                         | The request object to use for the request.                                                 |
| `config`                                                                                   | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                               | :heavy_minus_sign:                                                                         | Available config options for making requests.                                              |


### Response

**Promise<[operations.ListDepartmentsResponse](../../sdk/models/operations/listdepartmentsresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 400-600         | */*             |

## updateDepartment

Update a department

### Example Usage

```typescript
import { ContractifyProduction } from "contractify";

async function run() {
  const sdk = new ContractifyProduction({
    security: {
      oAuth2: "Bearer <YOUR_ACCESS_TOKEN_HERE>",
    },
  });

  const res = await sdk.departments.updateDepartment({
    departmentWrite: {
      name: "Sales",
    },
    company: 431122,
    department: 2342,
  });

  if (res.statusCode == 200) {
    // handle response
  }
}

run();
```

### Parameters

| Parameter                                                                                    | Type                                                                                         | Required                                                                                     | Description                                                                                  |
| -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- |
| `request`                                                                                    | [operations.UpdateDepartmentRequest](../../sdk/models/operations/updatedepartmentrequest.md) | :heavy_check_mark:                                                                           | The request object to use for the request.                                                   |
| `config`                                                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                 | :heavy_minus_sign:                                                                           | Available config options for making requests.                                                |


### Response

**Promise<[operations.UpdateDepartmentResponse](../../sdk/models/operations/updatedepartmentresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 400-600         | */*             |

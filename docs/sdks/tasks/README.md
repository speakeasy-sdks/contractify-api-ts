# Tasks
(*tasks*)

### Available Operations

* [createTask](#createtask) - Create a task
* [deleteTask](#deletetask) - Delete a task
* [getTask](#gettask) - Get a task
* [listTasks](#listtasks) - List tasks
* [updateTask](#updatetask) - Update a task

## createTask

Create a task

### Example Usage

```typescript
import { ContractifyProduction } from "contractify";
import { TaskWriteDueDateDependsOn, TaskWriteStatus } from "contractify/dist/sdk/models/shared";
import { RFCDate } from "contractify/dist/sdk/types";

async function run() {
  const sdk = new ContractifyProduction({
    security: {
      oAuth2: "Bearer <YOUR_ACCESS_TOKEN_HERE>",
    },
  });

  const res = await sdk.tasks.createTask({
    taskWrite: {
      contractId: 1,
      description: "Lorem ipsum dolor sit amet.",
      dueDate: new RFCDate("2021-12-31"),
      dueDateDependsOn: TaskWriteDueDateDependsOn.EndDate,
      dueDateInterval: "-P10D",
      ownerId: 1,
      reminderDuration: "P1M",
      repetitionInterval: "P1Y",
      status: TaskWriteStatus.Accomplished,
      title: "My task",
    },
    company: 296904,
  });

  if (res.statusCode == 200) {
    // handle response
  }
}

run();
```

### Parameters

| Parameter                                                                        | Type                                                                             | Required                                                                         | Description                                                                      |
| -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- |
| `request`                                                                        | [operations.CreateTaskRequest](../../sdk/models/operations/createtaskrequest.md) | :heavy_check_mark:                                                               | The request object to use for the request.                                       |
| `config`                                                                         | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                     | :heavy_minus_sign:                                                               | Available config options for making requests.                                    |


### Response

**Promise<[operations.CreateTaskResponse](../../sdk/models/operations/createtaskresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 400-600         | */*             |

## deleteTask

Delete a task

### Example Usage

```typescript
import { ContractifyProduction } from "contractify";

async function run() {
  const sdk = new ContractifyProduction({
    security: {
      oAuth2: "Bearer <YOUR_ACCESS_TOKEN_HERE>",
    },
  });

  const res = await sdk.tasks.deleteTask({
    company: 357574,
    task: 394977,
  });

  if (res.statusCode == 200) {
    // handle response
  }
}

run();
```

### Parameters

| Parameter                                                                        | Type                                                                             | Required                                                                         | Description                                                                      |
| -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- |
| `request`                                                                        | [operations.DeleteTaskRequest](../../sdk/models/operations/deletetaskrequest.md) | :heavy_check_mark:                                                               | The request object to use for the request.                                       |
| `config`                                                                         | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                     | :heavy_minus_sign:                                                               | Available config options for making requests.                                    |


### Response

**Promise<[operations.DeleteTaskResponse](../../sdk/models/operations/deletetaskresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 400-600         | */*             |

## getTask

Get a task

### Example Usage

```typescript
import { ContractifyProduction } from "contractify";

async function run() {
  const sdk = new ContractifyProduction({
    security: {
      oAuth2: "Bearer <YOUR_ACCESS_TOKEN_HERE>",
    },
  });

  const res = await sdk.tasks.getTask({
    company: 717011,
    task: 649018,
  });

  if (res.statusCode == 200) {
    // handle response
  }
}

run();
```

### Parameters

| Parameter                                                                  | Type                                                                       | Required                                                                   | Description                                                                |
| -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- |
| `request`                                                                  | [operations.GetTaskRequest](../../sdk/models/operations/gettaskrequest.md) | :heavy_check_mark:                                                         | The request object to use for the request.                                 |
| `config`                                                                   | [AxiosRequestConfig](https://axios-http.com/docs/req_config)               | :heavy_minus_sign:                                                         | Available config options for making requests.                              |


### Response

**Promise<[operations.GetTaskResponse](../../sdk/models/operations/gettaskresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 400-600         | */*             |

## listTasks

List all tasks within a company

### Example Usage

```typescript
import { ContractifyProduction } from "contractify";

async function run() {
  const sdk = new ContractifyProduction({
    security: {
      oAuth2: "Bearer <YOUR_ACCESS_TOKEN_HERE>",
    },
  });

  const res = await sdk.tasks.listTasks({
    company: 715197,
  });

  if (res.statusCode == 200) {
    // handle response
  }
}

run();
```

### Parameters

| Parameter                                                                      | Type                                                                           | Required                                                                       | Description                                                                    |
| ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ |
| `request`                                                                      | [operations.ListTasksRequest](../../sdk/models/operations/listtasksrequest.md) | :heavy_check_mark:                                                             | The request object to use for the request.                                     |
| `config`                                                                       | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                   | :heavy_minus_sign:                                                             | Available config options for making requests.                                  |


### Response

**Promise<[operations.ListTasksResponse](../../sdk/models/operations/listtasksresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 400-600         | */*             |

## updateTask

Update a task

### Example Usage

```typescript
import { ContractifyProduction } from "contractify";
import { TaskUpdateDueDateDependsOn, TaskUpdateStatus } from "contractify/dist/sdk/models/shared";
import { RFCDate } from "contractify/dist/sdk/types";

async function run() {
  const sdk = new ContractifyProduction({
    security: {
      oAuth2: "Bearer <YOUR_ACCESS_TOKEN_HERE>",
    },
  });

  const res = await sdk.tasks.updateTask({
    taskUpdate: {
      description: "Lorem ipsum dolor sit amet.",
      dueDate: new RFCDate("2021-12-31"),
      dueDateDependsOn: TaskUpdateDueDateDependsOn.EndDate,
      dueDateInterval: "-P10D",
      ownerId: 1,
      reminderDuration: "P1M",
      repetitionInterval: "P1Y",
      status: TaskUpdateStatus.Accomplished,
      title: "My task",
    },
    company: 449699,
    task: 675064,
  });

  if (res.statusCode == 200) {
    // handle response
  }
}

run();
```

### Parameters

| Parameter                                                                        | Type                                                                             | Required                                                                         | Description                                                                      |
| -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- |
| `request`                                                                        | [operations.UpdateTaskRequest](../../sdk/models/operations/updatetaskrequest.md) | :heavy_check_mark:                                                               | The request object to use for the request.                                       |
| `config`                                                                         | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                     | :heavy_minus_sign:                                                               | Available config options for making requests.                                    |


### Response

**Promise<[operations.UpdateTaskResponse](../../sdk/models/operations/updatetaskresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 400-600         | */*             |

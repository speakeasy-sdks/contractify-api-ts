# Tasks

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
import { CreateTaskResponse } from "contractify/dist/sdk/models/operations";
import { TaskWriteDueDateDependsOn, TaskWriteStatus } from "contractify/dist/sdk/models/shared";
import { RFCDate } from "contractify/dist/sdk/types";

const sdk = new ContractifyProduction({
  security: {
    oAuth2: "",
    personalAccessToken: "",
  },
});

sdk.tasks.createTask({
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
  company: 18789,
}).then((res: CreateTaskResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                    | Type                                                                         | Required                                                                     | Description                                                                  |
| ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- |
| `request`                                                                    | [operations.CreateTaskRequest](../../models/operations/createtaskrequest.md) | :heavy_check_mark:                                                           | The request object to use for the request.                                   |
| `config`                                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                 | :heavy_minus_sign:                                                           | Available config options for making requests.                                |


### Response

**Promise<[operations.CreateTaskResponse](../../models/operations/createtaskresponse.md)>**


## deleteTask

Delete a task

### Example Usage

```typescript
import { ContractifyProduction } from "contractify";
import { DeleteTaskResponse } from "contractify/dist/sdk/models/operations";

const sdk = new ContractifyProduction({
  security: {
    oAuth2: "",
    personalAccessToken: "",
  },
});

sdk.tasks.deleteTask({
  company: 324141,
  task: 617636,
}).then((res: DeleteTaskResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                    | Type                                                                         | Required                                                                     | Description                                                                  |
| ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- |
| `request`                                                                    | [operations.DeleteTaskRequest](../../models/operations/deletetaskrequest.md) | :heavy_check_mark:                                                           | The request object to use for the request.                                   |
| `config`                                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                 | :heavy_minus_sign:                                                           | Available config options for making requests.                                |


### Response

**Promise<[operations.DeleteTaskResponse](../../models/operations/deletetaskresponse.md)>**


## getTask

Get a task

### Example Usage

```typescript
import { ContractifyProduction } from "contractify";
import { GetTaskResponse } from "contractify/dist/sdk/models/operations";

const sdk = new ContractifyProduction({
  security: {
    oAuth2: "",
    personalAccessToken: "",
  },
});

sdk.tasks.getTask({
  company: 149675,
  task: 612096,
}).then((res: GetTaskResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                              | Type                                                                   | Required                                                               | Description                                                            |
| ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- |
| `request`                                                              | [operations.GetTaskRequest](../../models/operations/gettaskrequest.md) | :heavy_check_mark:                                                     | The request object to use for the request.                             |
| `config`                                                               | [AxiosRequestConfig](https://axios-http.com/docs/req_config)           | :heavy_minus_sign:                                                     | Available config options for making requests.                          |


### Response

**Promise<[operations.GetTaskResponse](../../models/operations/gettaskresponse.md)>**


## listTasks

List all tasks within a company

### Example Usage

```typescript
import { ContractifyProduction } from "contractify";
import { ListTasksResponse } from "contractify/dist/sdk/models/operations";

const sdk = new ContractifyProduction({
  security: {
    oAuth2: "",
    personalAccessToken: "",
  },
});

sdk.tasks.listTasks({
  company: 222321,
  page: 616934,
}).then((res: ListTasksResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                  | Type                                                                       | Required                                                                   | Description                                                                |
| -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- |
| `request`                                                                  | [operations.ListTasksRequest](../../models/operations/listtasksrequest.md) | :heavy_check_mark:                                                         | The request object to use for the request.                                 |
| `config`                                                                   | [AxiosRequestConfig](https://axios-http.com/docs/req_config)               | :heavy_minus_sign:                                                         | Available config options for making requests.                              |


### Response

**Promise<[operations.ListTasksResponse](../../models/operations/listtasksresponse.md)>**


## updateTask

Update a task

### Example Usage

```typescript
import { ContractifyProduction } from "contractify";
import { UpdateTaskResponse } from "contractify/dist/sdk/models/operations";
import { TaskUpdateDueDateDependsOn, TaskUpdateStatus } from "contractify/dist/sdk/models/shared";
import { RFCDate } from "contractify/dist/sdk/types";

const sdk = new ContractifyProduction({
  security: {
    oAuth2: "",
    personalAccessToken: "",
  },
});

sdk.tasks.updateTask({
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
  company: 386489,
  task: 943749,
}).then((res: UpdateTaskResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                    | Type                                                                         | Required                                                                     | Description                                                                  |
| ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- |
| `request`                                                                    | [operations.UpdateTaskRequest](../../models/operations/updatetaskrequest.md) | :heavy_check_mark:                                                           | The request object to use for the request.                                   |
| `config`                                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                 | :heavy_minus_sign:                                                           | Available config options for making requests.                                |


### Response

**Promise<[operations.UpdateTaskResponse](../../models/operations/updatetaskresponse.md)>**


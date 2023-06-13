# tasks

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
import {
  TaskReadDueDateDependsOn,
  TaskReadStatus,
  TaskWriteDueDateDependsOn,
  TaskWriteStatus,
} from "contractify/dist/sdk/models/shared";
import { RFCDate } from "contractify/dist/sdk/types";

const sdk = new ContractifyProduction();

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
  company: 208876,
}, {
  oAuth2: "",
  personalAccessToken: "",
}).then((res: CreateTaskResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                      | Type                                                                           | Required                                                                       | Description                                                                    |
| ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ |
| `request`                                                                      | [operations.CreateTaskRequest](../../models/operations/createtaskrequest.md)   | :heavy_check_mark:                                                             | The request object to use for the request.                                     |
| `security`                                                                     | [operations.CreateTaskSecurity](../../models/operations/createtasksecurity.md) | :heavy_check_mark:                                                             | The security requirements to use for the request.                              |
| `config`                                                                       | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                   | :heavy_minus_sign:                                                             | Available config options for making requests.                                  |


### Response

**Promise<[operations.CreateTaskResponse](../../models/operations/createtaskresponse.md)>**


## deleteTask

Delete a task

### Example Usage

```typescript
import { ContractifyProduction } from "contractify";
import { DeleteTaskResponse } from "contractify/dist/sdk/models/operations";

const sdk = new ContractifyProduction();

sdk.tasks.deleteTask({
  company: 635059,
  task: 161309,
}, {
  oAuth2: "",
  personalAccessToken: "",
}).then((res: DeleteTaskResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                      | Type                                                                           | Required                                                                       | Description                                                                    |
| ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ |
| `request`                                                                      | [operations.DeleteTaskRequest](../../models/operations/deletetaskrequest.md)   | :heavy_check_mark:                                                             | The request object to use for the request.                                     |
| `security`                                                                     | [operations.DeleteTaskSecurity](../../models/operations/deletetasksecurity.md) | :heavy_check_mark:                                                             | The security requirements to use for the request.                              |
| `config`                                                                       | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                   | :heavy_minus_sign:                                                             | Available config options for making requests.                                  |


### Response

**Promise<[operations.DeleteTaskResponse](../../models/operations/deletetaskresponse.md)>**


## getTask

Get a task

### Example Usage

```typescript
import { ContractifyProduction } from "contractify";
import { GetTaskResponse } from "contractify/dist/sdk/models/operations";
import { TaskReadDueDateDependsOn, TaskReadStatus } from "contractify/dist/sdk/models/shared";
import { RFCDate } from "contractify/dist/sdk/types";

const sdk = new ContractifyProduction();

sdk.tasks.getTask({
  company: 995300,
  task: 653108,
}, {
  oAuth2: "",
  personalAccessToken: "",
}).then((res: GetTaskResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                | Type                                                                     | Required                                                                 | Description                                                              |
| ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ |
| `request`                                                                | [operations.GetTaskRequest](../../models/operations/gettaskrequest.md)   | :heavy_check_mark:                                                       | The request object to use for the request.                               |
| `security`                                                               | [operations.GetTaskSecurity](../../models/operations/gettasksecurity.md) | :heavy_check_mark:                                                       | The security requirements to use for the request.                        |
| `config`                                                                 | [AxiosRequestConfig](https://axios-http.com/docs/req_config)             | :heavy_minus_sign:                                                       | Available config options for making requests.                            |


### Response

**Promise<[operations.GetTaskResponse](../../models/operations/gettaskresponse.md)>**


## listTasks

List all tasks within a company

### Example Usage

```typescript
import { ContractifyProduction } from "contractify";
import { ListTasksResponse } from "contractify/dist/sdk/models/operations";
import { TaskReadDueDateDependsOn, TaskReadStatus } from "contractify/dist/sdk/models/shared";
import { RFCDate } from "contractify/dist/sdk/types";

const sdk = new ContractifyProduction();

sdk.tasks.listTasks({
  company: 581850,
  page: 253291,
}, {
  oAuth2: "",
  personalAccessToken: "",
}).then((res: ListTasksResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                    | Type                                                                         | Required                                                                     | Description                                                                  |
| ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- |
| `request`                                                                    | [operations.ListTasksRequest](../../models/operations/listtasksrequest.md)   | :heavy_check_mark:                                                           | The request object to use for the request.                                   |
| `security`                                                                   | [operations.ListTasksSecurity](../../models/operations/listtaskssecurity.md) | :heavy_check_mark:                                                           | The security requirements to use for the request.                            |
| `config`                                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                 | :heavy_minus_sign:                                                           | Available config options for making requests.                                |


### Response

**Promise<[operations.ListTasksResponse](../../models/operations/listtasksresponse.md)>**


## updateTask

Update a task

### Example Usage

```typescript
import { ContractifyProduction } from "contractify";
import { UpdateTaskResponse } from "contractify/dist/sdk/models/operations";
import {
  TaskReadDueDateDependsOn,
  TaskReadStatus,
  TaskUpdateDueDateDependsOn,
  TaskUpdateStatus,
} from "contractify/dist/sdk/models/shared";
import { RFCDate } from "contractify/dist/sdk/types";

const sdk = new ContractifyProduction();

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
  company: 414369,
  task: 466311,
}, {
  oAuth2: "",
  personalAccessToken: "",
}).then((res: UpdateTaskResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                      | Type                                                                           | Required                                                                       | Description                                                                    |
| ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ |
| `request`                                                                      | [operations.UpdateTaskRequest](../../models/operations/updatetaskrequest.md)   | :heavy_check_mark:                                                             | The request object to use for the request.                                     |
| `security`                                                                     | [operations.UpdateTaskSecurity](../../models/operations/updatetasksecurity.md) | :heavy_check_mark:                                                             | The security requirements to use for the request.                              |
| `config`                                                                       | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                   | :heavy_minus_sign:                                                             | Available config options for making requests.                                  |


### Response

**Promise<[operations.UpdateTaskResponse](../../models/operations/updatetaskresponse.md)>**


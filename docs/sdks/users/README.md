# users

### Available Operations

* [currentUser](#currentuser) - Current User
* [listUsers](#listusers) - List users

## currentUser

Get the current user details

### Example Usage

```typescript
import { ContractifyProduction } from "contractify";
import { CurrentUserResponse, CurrentUserSecurity } from "contractify/dist/sdk/models/operations";

const sdk = new ContractifyProduction();
const operationSecurity: CurrentUserSecurity = {
  oAuth2: "",
  personalAccessToken: "",
};

sdk.users.currentUser(operationSecurity).then((res: CurrentUserResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                        | Type                                                                             | Required                                                                         | Description                                                                      |
| -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- |
| `security`                                                                       | [operations.CurrentUserSecurity](../../models/operations/currentusersecurity.md) | :heavy_check_mark:                                                               | The security requirements to use for the request.                                |
| `config`                                                                         | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                     | :heavy_minus_sign:                                                               | Available config options for making requests.                                    |


### Response

**Promise<[operations.CurrentUserResponse](../../models/operations/currentuserresponse.md)>**


## listUsers

List all the users within a company

### Example Usage

```typescript
import { ContractifyProduction } from "contractify";
import { ListUsersResponse, ListUsersSecurity } from "contractify/dist/sdk/models/operations";

const sdk = new ContractifyProduction();
const operationSecurity: ListUsersSecurity = {
  oAuth2: "",
  personalAccessToken: "",
};

sdk.users.listUsers({
  company: 474697,
  page: 244425,
}, operationSecurity).then((res: ListUsersResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                    | Type                                                                         | Required                                                                     | Description                                                                  |
| ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- |
| `request`                                                                    | [operations.ListUsersRequest](../../models/operations/listusersrequest.md)   | :heavy_check_mark:                                                           | The request object to use for the request.                                   |
| `security`                                                                   | [operations.ListUsersSecurity](../../models/operations/listuserssecurity.md) | :heavy_check_mark:                                                           | The security requirements to use for the request.                            |
| `config`                                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                 | :heavy_minus_sign:                                                           | Available config options for making requests.                                |


### Response

**Promise<[operations.ListUsersResponse](../../models/operations/listusersresponse.md)>**


# LegalEntities
(*legalEntities*)

### Available Operations

* [listLegalEntities](#listlegalentities) - List legal entities

## listLegalEntities

List all the legal entities within a company

### Example Usage

```typescript
import { ContractifyProduction } from "contractify";

(async() => {
  const sdk = new ContractifyProduction({
    security: {
      oAuth2: "",
      personalAccessToken: "",
    },
  });

  const res = await sdk.legalEntities.listLegalEntities({
    company: 730248,
  });


  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                                  | Type                                                                                       | Required                                                                                   | Description                                                                                |
| ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ |
| `request`                                                                                  | [operations.ListLegalEntitiesRequest](../../models/operations/listlegalentitiesrequest.md) | :heavy_check_mark:                                                                         | The request object to use for the request.                                                 |
| `config`                                                                                   | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                               | :heavy_minus_sign:                                                                         | Available config options for making requests.                                              |


### Response

**Promise<[operations.ListLegalEntitiesResponse](../../models/operations/listlegalentitiesresponse.md)>**


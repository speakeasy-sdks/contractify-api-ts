<!-- Start SDK Example Usage -->


```typescript
import { ContractifyProduction } from "contractify";
import { ListContractTypesResponse } from "contractify/dist/sdk/models/operations";

const sdk = new ContractifyProduction({
  security: {
    oAuth2: "",
    personalAccessToken: "",
  },
});

sdk.contractTypes.listContractTypes({
  company: 839467,
}).then((res: ListContractTypesResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```
<!-- End SDK Example Usage -->
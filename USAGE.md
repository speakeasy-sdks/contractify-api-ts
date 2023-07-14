<!-- Start SDK Example Usage -->


```typescript
import { ContractifyProduction } from "contractify";
import { ListContractTypesResponse } from "contractify/dist/sdk/models/operations";

const sdk = new ContractifyProduction();

sdk.contractTypes.listContractTypes({
  company: 548814,
}, {
  oAuth2: "",
  personalAccessToken: "",
}).then((res: ListContractTypesResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```
<!-- End SDK Example Usage -->
<!-- Start SDK Example Usage -->


```typescript
import { ContractifyProduction } from "contractify";
import { ListContractTypesResponse, ListContractTypesSecurity } from "contractify/dist/sdk/models/operations";

const sdk = new ContractifyProduction();
const operationSecurity: ListContractTypesSecurity = {
  oAuth2: "",
  personalAccessToken: "",
};

sdk.contractTypes.listContractTypes({
  company: 548814,
}, operationSecurity).then((res: ListContractTypesResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```
<!-- End SDK Example Usage -->
<!-- Start SDK Example Usage -->


```typescript
import { ContractifyProduction } from "contractify";

(async () => {
    const sdk = new ContractifyProduction({
        security: {
            oAuth2: "",
            personalAccessToken: "",
        },
    });

    const res = await sdk.contractTypes.listContractTypes({
        company: 839467,
    });

    if (res.statusCode == 200) {
        // handle response
    }
})();

```
<!-- End SDK Example Usage -->
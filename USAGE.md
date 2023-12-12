<!-- Start SDK Example Usage [usage] -->
```typescript
import { ContractifyProduction } from "contractify";

async function run() {
    const sdk = new ContractifyProduction({
        security: {
            oAuth2: "Bearer <YOUR_ACCESS_TOKEN_HERE>",
        },
    });

    const res = await sdk.contractTypes.listContractTypes({
        company: 839467,
    });

    if (res.statusCode == 200) {
        // handle response
    }
}

run();

```
<!-- End SDK Example Usage [usage] -->
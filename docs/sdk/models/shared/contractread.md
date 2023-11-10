# ContractRead


## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   | Example                                                                                       |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `contractTypes`                                                                               | [shared.ContractTypeRead](../../../sdk/models/shared/contracttyperead.md)[]                   | :heavy_minus_sign:                                                                            | N/A                                                                                           |                                                                                               |
| `createdAt`                                                                                   | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_minus_sign:                                                                            | N/A                                                                                           |                                                                                               |
| `customFieldValues`                                                                           | [shared.CustomFieldValueRead](../../../sdk/models/shared/customfieldvalueread.md)[]           | :heavy_minus_sign:                                                                            | N/A                                                                                           |                                                                                               |
| `departments`                                                                                 | [shared.DepartmentRead](../../../sdk/models/shared/departmentread.md)[]                       | :heavy_minus_sign:                                                                            | N/A                                                                                           |                                                                                               |
| `documents`                                                                                   | [shared.ContractDocumentRead](../../../sdk/models/shared/contractdocumentread.md)[]           | :heavy_minus_sign:                                                                            | N/A                                                                                           |                                                                                               |
| `dossier`                                                                                     | [shared.DossierRead](../../../sdk/models/shared/dossierread.md)                               | :heavy_minus_sign:                                                                            | N/A                                                                                           |                                                                                               |
| `duration`                                                                                    | *string*                                                                                      | :heavy_minus_sign:                                                                            | N/A                                                                                           | P1Y                                                                                           |
| `endDate`                                                                                     | [RFCDate](../../types/rfcdate.md)                                                             | :heavy_minus_sign:                                                                            | N/A                                                                                           | 2021-12-31                                                                                    |
| `id`                                                                                          | *number*                                                                                      | :heavy_minus_sign:                                                                            | N/A                                                                                           | 1                                                                                             |
| `isOpenEnded`                                                                                 | *boolean*                                                                                     | :heavy_minus_sign:                                                                            | N/A                                                                                           |                                                                                               |
| `legalEntities`                                                                               | [shared.LegalEntityRead](../../../sdk/models/shared/legalentityread.md)[]                     | :heavy_minus_sign:                                                                            | N/A                                                                                           |                                                                                               |
| `name`                                                                                        | *string*                                                                                      | :heavy_minus_sign:                                                                            | N/A                                                                                           | Partnership agreement                                                                         |
| `offices`                                                                                     | [shared.OfficeRead](../../../sdk/models/shared/officeread.md)[]                               | :heavy_minus_sign:                                                                            | N/A                                                                                           |                                                                                               |
| `ownerId`                                                                                     | *number*                                                                                      | :heavy_minus_sign:                                                                            | N/A                                                                                           | 1                                                                                             |
| `permalink`                                                                                   | *string*                                                                                      | :heavy_minus_sign:                                                                            | N/A                                                                                           | https://app.contractify.io/client/company/company-slug/contracts/1                            |
| `phase`                                                                                       | [shared.ContractPhase](../../../sdk/models/shared/contractphase.md)                           | :heavy_minus_sign:                                                                            | N/A                                                                                           | ongoing                                                                                       |
| `relations`                                                                                   | [shared.RelationRead](../../../sdk/models/shared/relationread.md)[]                           | :heavy_minus_sign:                                                                            | N/A                                                                                           |                                                                                               |
| `renewal`                                                                                     | [shared.ContractRenewal](../../../sdk/models/shared/contractrenewal.md)                       | :heavy_minus_sign:                                                                            | N/A                                                                                           |                                                                                               |
| `startDate`                                                                                   | [RFCDate](../../types/rfcdate.md)                                                             | :heavy_minus_sign:                                                                            | N/A                                                                                           | 2021-01-01                                                                                    |
| `termination`                                                                                 | [shared.ContractTermination](../../../sdk/models/shared/contracttermination.md)               | :heavy_minus_sign:                                                                            | N/A                                                                                           |                                                                                               |
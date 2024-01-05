/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { RFCDate } from "../../../sdk/types";
import { ContractDocumentRead } from "./contractdocumentread";
import { ContractPhase } from "./contractphase";
import { ContractRenewal } from "./contractrenewal";
import { ContractTermination } from "./contracttermination";
import { ContractTypeRead } from "./contracttyperead";
import { CustomFieldValueRead } from "./customfieldvalueread";
import { DepartmentRead } from "./departmentread";
import { DossierRead } from "./dossierread";
import { LegalEntityRead } from "./legalentityread";
import { OfficeRead } from "./officeread";
import { RelationRead } from "./relationread";
import { Expose, Transform, Type } from "class-transformer";

export class ContractRead extends SpeakeasyBase {
    @SpeakeasyMetadata({ elemType: ContractTypeRead })
    @Expose({ name: "contract_types" })
    @Type(() => ContractTypeRead)
    contractTypes?: ContractTypeRead[];

    @SpeakeasyMetadata()
    @Expose({ name: "created_at" })
    @Transform(({ value }) => new Date(value), { toClassOnly: true })
    createdAt?: Date;

    @SpeakeasyMetadata({ elemType: CustomFieldValueRead })
    @Expose({ name: "custom_field_values" })
    @Type(() => CustomFieldValueRead)
    customFieldValues?: CustomFieldValueRead[];

    @SpeakeasyMetadata({ elemType: DepartmentRead })
    @Expose({ name: "departments" })
    @Type(() => DepartmentRead)
    departments?: DepartmentRead[];

    @SpeakeasyMetadata({ elemType: ContractDocumentRead })
    @Expose({ name: "documents" })
    @Type(() => ContractDocumentRead)
    documents?: ContractDocumentRead[];

    @SpeakeasyMetadata()
    @Expose({ name: "dossier" })
    @Type(() => DossierRead)
    dossier?: DossierRead;

    @SpeakeasyMetadata()
    @Expose({ name: "duration" })
    duration?: string;

    @SpeakeasyMetadata()
    @Expose({ name: "end_date" })
    @Type(() => String)
    @Transform(({ value }) => new RFCDate(value), { toClassOnly: true })
    endDate?: RFCDate;

    @SpeakeasyMetadata()
    @Expose({ name: "id" })
    id?: number;

    @SpeakeasyMetadata()
    @Expose({ name: "is_open_ended" })
    isOpenEnded?: boolean;

    @SpeakeasyMetadata({ elemType: LegalEntityRead })
    @Expose({ name: "legal_entities" })
    @Type(() => LegalEntityRead)
    legalEntities?: LegalEntityRead[];

    @SpeakeasyMetadata()
    @Expose({ name: "name" })
    name?: string;

    @SpeakeasyMetadata({ elemType: OfficeRead })
    @Expose({ name: "offices" })
    @Type(() => OfficeRead)
    offices?: OfficeRead[];

    @SpeakeasyMetadata()
    @Expose({ name: "owner_id" })
    ownerId?: number;

    @SpeakeasyMetadata()
    @Expose({ name: "permalink" })
    permalink?: string;

    @SpeakeasyMetadata()
    @Expose({ name: "phase" })
    phase?: ContractPhase;

    @SpeakeasyMetadata({ elemType: RelationRead })
    @Expose({ name: "relations" })
    @Type(() => RelationRead)
    relations?: RelationRead[];

    @SpeakeasyMetadata()
    @Expose({ name: "renewal" })
    @Type(() => ContractRenewal)
    renewal?: ContractRenewal;

    @SpeakeasyMetadata()
    @Expose({ name: "start_date" })
    @Type(() => String)
    @Transform(({ value }) => new RFCDate(value), { toClassOnly: true })
    startDate?: RFCDate;

    @SpeakeasyMetadata()
    @Expose({ name: "termination" })
    @Type(() => ContractTermination)
    termination?: ContractTermination;
}

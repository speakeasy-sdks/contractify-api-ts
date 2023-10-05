/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { RFCDate } from "../../types";
import { Expose, Transform, Type } from "class-transformer";

export class ContractTermination extends SpeakeasyBase {
    @SpeakeasyMetadata()
    @Expose({ name: "is_terminable_at_any_time" })
    isTerminableAtAnyTime?: boolean;

    @SpeakeasyMetadata()
    @Expose({ name: "termination_date" })
    @Type(() => String)
    @Transform(({ value }) => new RFCDate(value), { toClassOnly: true })
    terminationDate?: RFCDate;

    @SpeakeasyMetadata()
    @Expose({ name: "termination_duration" })
    terminationDuration?: string;
}

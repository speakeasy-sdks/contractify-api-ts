/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { Expose } from "class-transformer";

export class CustomFieldValueWrite extends SpeakeasyBase {
    @SpeakeasyMetadata()
    @Expose({ name: "custom_field_id" })
    customFieldId?: number;

    @SpeakeasyMetadata()
    @Expose({ name: "value" })
    value?: any;
}

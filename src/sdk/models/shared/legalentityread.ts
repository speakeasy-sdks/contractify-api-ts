/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { Expose } from "class-transformer";

export class LegalEntityRead extends SpeakeasyBase {
    @SpeakeasyMetadata()
    @Expose({ name: "bus" })
    bus?: string;

    @SpeakeasyMetadata()
    @Expose({ name: "city" })
    city?: string;

    @SpeakeasyMetadata()
    @Expose({ name: "country" })
    country?: string;

    @SpeakeasyMetadata()
    @Expose({ name: "id" })
    id?: number;

    @SpeakeasyMetadata()
    @Expose({ name: "name" })
    name?: string;

    @SpeakeasyMetadata()
    @Expose({ name: "street" })
    street?: string;

    @SpeakeasyMetadata()
    @Expose({ name: "vat" })
    vat?: string;

    @SpeakeasyMetadata()
    @Expose({ name: "zip" })
    zip?: string;
}

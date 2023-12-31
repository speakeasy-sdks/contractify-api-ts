/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { Expose } from "class-transformer";

export class OfficeWrite extends SpeakeasyBase {
    @SpeakeasyMetadata()
    @Expose({ name: "bus" })
    bus?: string;

    @SpeakeasyMetadata()
    @Expose({ name: "city" })
    city?: string;

    @SpeakeasyMetadata()
    @Expose({ name: "contact_person" })
    contactPerson?: string;

    @SpeakeasyMetadata()
    @Expose({ name: "country" })
    country?: string;

    @SpeakeasyMetadata()
    @Expose({ name: "email" })
    email?: string;

    @SpeakeasyMetadata()
    @Expose({ name: "id" })
    id?: number;

    @SpeakeasyMetadata()
    @Expose({ name: "name" })
    name?: string;

    @SpeakeasyMetadata()
    @Expose({ name: "number_identity" })
    numberIdentity?: string;

    @SpeakeasyMetadata()
    @Expose({ name: "phone" })
    phone?: string;

    @SpeakeasyMetadata()
    @Expose({ name: "street" })
    street?: string;

    @SpeakeasyMetadata()
    @Expose({ name: "zip" })
    zip?: string;
}

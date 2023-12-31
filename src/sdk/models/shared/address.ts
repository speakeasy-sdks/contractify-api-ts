/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { Expose } from "class-transformer";

export class Address extends SpeakeasyBase {
    @SpeakeasyMetadata()
    @Expose({ name: "address_line_1" })
    addressLine1?: string;

    @SpeakeasyMetadata()
    @Expose({ name: "address_line_2" })
    addressLine2?: string;

    @SpeakeasyMetadata()
    @Expose({ name: "city" })
    city?: string;

    @SpeakeasyMetadata()
    @Expose({ name: "country" })
    country?: string;

    @SpeakeasyMetadata()
    @Expose({ name: "postal_code" })
    postalCode?: string;
}

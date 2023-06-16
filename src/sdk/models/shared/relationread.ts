/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { Address } from "./address";
import { Expose, Transform, Type } from "class-transformer";

export class RelationRead extends SpeakeasyBase {
    @SpeakeasyMetadata()
    @Expose({ name: "address" })
    @Type(() => Address)
    address?: Address;

    @SpeakeasyMetadata()
    @Expose({ name: "created_at" })
    @Transform(({ value }) => new Date(value), { toClassOnly: true })
    createdAt?: Date;

    @SpeakeasyMetadata()
    @Expose({ name: "email" })
    email?: string;

    @SpeakeasyMetadata()
    @Expose({ name: "fax" })
    fax?: string;

    @SpeakeasyMetadata()
    @Expose({ name: "id" })
    id?: number;

    @SpeakeasyMetadata()
    @Expose({ name: "mobile_phone" })
    mobilePhone?: string;

    @SpeakeasyMetadata()
    @Expose({ name: "name" })
    name?: string;

    @SpeakeasyMetadata()
    @Expose({ name: "permalink" })
    permalink?: string;

    @SpeakeasyMetadata()
    @Expose({ name: "phone" })
    phone?: string;

    @SpeakeasyMetadata()
    @Expose({ name: "reference" })
    reference?: string;

    @SpeakeasyMetadata()
    @Expose({ name: "vat" })
    vat?: string;

    @SpeakeasyMetadata()
    @Expose({ name: "website" })
    website?: string;
}
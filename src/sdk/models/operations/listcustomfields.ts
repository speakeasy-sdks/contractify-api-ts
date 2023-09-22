/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
import { Expose } from "class-transformer";

export class ListCustomFieldsRequest extends SpeakeasyBase {
    /**
     * Id of the company
     */
    @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=company" })
    company: number;
}

/**
 * Forbidden
 */
export class ListCustomFields403ApplicationJSON extends SpeakeasyBase {
    @SpeakeasyMetadata()
    @Expose({ name: "message" })
    message?: string;
}

/**
 * Unauthenticated
 */
export class ListCustomFields401ApplicationJSON extends SpeakeasyBase {
    @SpeakeasyMetadata()
    @Expose({ name: "message" })
    message?: string;
}

export class ListCustomFieldsResponse extends SpeakeasyBase {
    @SpeakeasyMetadata()
    contentType: string;

    /**
     * OK
     */
    @SpeakeasyMetadata()
    customFieldCollection?: shared.CustomFieldCollection;

    @SpeakeasyMetadata()
    statusCode: number;

    @SpeakeasyMetadata()
    rawResponse?: AxiosResponse;

    /**
     * Unauthenticated
     */
    @SpeakeasyMetadata()
    listCustomFields401ApplicationJSONObject?: ListCustomFields401ApplicationJSON;

    /**
     * Forbidden
     */
    @SpeakeasyMetadata()
    listCustomFields403ApplicationJSONObject?: ListCustomFields403ApplicationJSON;
}

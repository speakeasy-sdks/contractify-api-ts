/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
import { Expose, Type } from "class-transformer";

export class GetDocumentSecurity extends SpeakeasyBase {
    @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2;name=Authorization" })
    oAuth2: string;

    @SpeakeasyMetadata({
        data: "security, scheme=true;type=http;subtype=bearer;name=Authorization",
    })
    personalAccessToken: string;
}

export class GetDocumentRequest extends SpeakeasyBase {
    /**
     * Id of the company
     */
    @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=company" })
    company: number;

    /**
     * Id of the document
     */
    @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=document" })
    document: number;
}

/**
 * Not Found
 */
export class GetDocument404ApplicationJSON extends SpeakeasyBase {
    @SpeakeasyMetadata()
    @Expose({ name: "message" })
    message?: string;
}

/**
 * Forbidden
 */
export class GetDocument403ApplicationJSON extends SpeakeasyBase {
    @SpeakeasyMetadata()
    @Expose({ name: "message" })
    message?: string;
}

/**
 * Unauthenticated
 */
export class GetDocument401ApplicationJSON extends SpeakeasyBase {
    @SpeakeasyMetadata()
    @Expose({ name: "message" })
    message?: string;
}

/**
 * OK
 */
export class GetDocument200ApplicationJSON extends SpeakeasyBase {
    @SpeakeasyMetadata()
    @Expose({ name: "data" })
    @Type(() => shared.DocumentRead)
    data?: shared.DocumentRead;
}

export class GetDocumentResponse extends SpeakeasyBase {
    @SpeakeasyMetadata()
    contentType: string;

    @SpeakeasyMetadata()
    statusCode: number;

    @SpeakeasyMetadata()
    rawResponse?: AxiosResponse;

    /**
     * OK
     */
    @SpeakeasyMetadata()
    getDocument200ApplicationJSONObject?: GetDocument200ApplicationJSON;

    /**
     * Unauthenticated
     */
    @SpeakeasyMetadata()
    getDocument401ApplicationJSONObject?: GetDocument401ApplicationJSON;

    /**
     * Forbidden
     */
    @SpeakeasyMetadata()
    getDocument403ApplicationJSONObject?: GetDocument403ApplicationJSON;

    /**
     * Not Found
     */
    @SpeakeasyMetadata()
    getDocument404ApplicationJSONObject?: GetDocument404ApplicationJSON;
}

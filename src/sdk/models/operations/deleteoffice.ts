/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { AxiosResponse } from "axios";
import { Expose } from "class-transformer";

export class DeleteOfficeRequest extends SpeakeasyBase {
    /**
     * Id of the company
     */
    @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=company" })
    company: number;

    /**
     * Id of the office
     */
    @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=office" })
    office: number;
}

/**
 * Not Found
 */
export class DeleteOffice404ApplicationJSON extends SpeakeasyBase {
    @SpeakeasyMetadata()
    @Expose({ name: "message" })
    message?: string;
}

/**
 * Forbidden
 */
export class DeleteOffice403ApplicationJSON extends SpeakeasyBase {
    @SpeakeasyMetadata()
    @Expose({ name: "message" })
    message?: string;
}

/**
 * Unauthenticated
 */
export class DeleteOffice401ApplicationJSON extends SpeakeasyBase {
    @SpeakeasyMetadata()
    @Expose({ name: "message" })
    message?: string;
}

/**
 * Precondition failed
 */
export class DeleteOffice400ApplicationJSON extends SpeakeasyBase {
    @SpeakeasyMetadata()
    @Expose({ name: "message" })
    message?: string;
}

export class DeleteOfficeResponse extends SpeakeasyBase {
    @SpeakeasyMetadata()
    contentType: string;

    @SpeakeasyMetadata()
    statusCode: number;

    @SpeakeasyMetadata()
    rawResponse?: AxiosResponse;

    /**
     * Precondition failed
     */
    @SpeakeasyMetadata()
    deleteOffice400ApplicationJSONObject?: DeleteOffice400ApplicationJSON;

    /**
     * Unauthenticated
     */
    @SpeakeasyMetadata()
    deleteOffice401ApplicationJSONObject?: DeleteOffice401ApplicationJSON;

    /**
     * Forbidden
     */
    @SpeakeasyMetadata()
    deleteOffice403ApplicationJSONObject?: DeleteOffice403ApplicationJSON;

    /**
     * Not Found
     */
    @SpeakeasyMetadata()
    deleteOffice404ApplicationJSONObject?: DeleteOffice404ApplicationJSON;
}

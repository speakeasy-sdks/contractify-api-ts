/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { AxiosResponse } from "axios";
import { Expose } from "class-transformer";

export class DeleteContractRequest extends SpeakeasyBase {
    /**
     * Id of the company
     */
    @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=company" })
    company: number;

    /**
     * Id of the contract
     */
    @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=contract" })
    contract: number;
}

/**
 * Not Found
 */
export class DeleteContract404ApplicationJSON extends SpeakeasyBase {
    @SpeakeasyMetadata()
    @Expose({ name: "message" })
    message?: string;
}

/**
 * Forbidden
 */
export class DeleteContract403ApplicationJSON extends SpeakeasyBase {
    @SpeakeasyMetadata()
    @Expose({ name: "message" })
    message?: string;
}

/**
 * Unauthenticated
 */
export class DeleteContract401ApplicationJSON extends SpeakeasyBase {
    @SpeakeasyMetadata()
    @Expose({ name: "message" })
    message?: string;
}

/**
 * Precondition failed
 */
export class DeleteContract400ApplicationJSON extends SpeakeasyBase {
    @SpeakeasyMetadata()
    @Expose({ name: "message" })
    message?: string;
}

export class DeleteContractResponse extends SpeakeasyBase {
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
    deleteContract400ApplicationJSONObject?: DeleteContract400ApplicationJSON;

    /**
     * Unauthenticated
     */
    @SpeakeasyMetadata()
    deleteContract401ApplicationJSONObject?: DeleteContract401ApplicationJSON;

    /**
     * Forbidden
     */
    @SpeakeasyMetadata()
    deleteContract403ApplicationJSONObject?: DeleteContract403ApplicationJSON;

    /**
     * Not Found
     */
    @SpeakeasyMetadata()
    deleteContract404ApplicationJSONObject?: DeleteContract404ApplicationJSON;
}

/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
import { Expose, Type } from "class-transformer";

export class GetContractRequest extends SpeakeasyBase {
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
export class GetContract404ApplicationJSON extends SpeakeasyBase {
    @SpeakeasyMetadata()
    @Expose({ name: "message" })
    message?: string;
}

/**
 * Forbidden
 */
export class GetContract403ApplicationJSON extends SpeakeasyBase {
    @SpeakeasyMetadata()
    @Expose({ name: "message" })
    message?: string;
}

/**
 * Unauthenticated
 */
export class GetContract401ApplicationJSON extends SpeakeasyBase {
    @SpeakeasyMetadata()
    @Expose({ name: "message" })
    message?: string;
}

/**
 * OK
 */
export class GetContract200ApplicationJSON extends SpeakeasyBase {
    @SpeakeasyMetadata()
    @Expose({ name: "data" })
    @Type(() => shared.ContractRead)
    data?: shared.ContractRead;
}

export class GetContractResponse extends SpeakeasyBase {
    /**
     * HTTP response content type for this operation
     */
    @SpeakeasyMetadata()
    contentType: string;

    /**
     * HTTP response status code for this operation
     */
    @SpeakeasyMetadata()
    statusCode: number;

    /**
     * Raw HTTP response; suitable for custom response parsing
     */
    @SpeakeasyMetadata()
    rawResponse?: AxiosResponse;

    /**
     * OK
     */
    @SpeakeasyMetadata()
    getContract200ApplicationJSONObject?: GetContract200ApplicationJSON;

    /**
     * Unauthenticated
     */
    @SpeakeasyMetadata()
    getContract401ApplicationJSONObject?: GetContract401ApplicationJSON;

    /**
     * Forbidden
     */
    @SpeakeasyMetadata()
    getContract403ApplicationJSONObject?: GetContract403ApplicationJSON;

    /**
     * Not Found
     */
    @SpeakeasyMetadata()
    getContract404ApplicationJSONObject?: GetContract404ApplicationJSON;
}

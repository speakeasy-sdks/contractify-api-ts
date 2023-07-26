/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
import { Expose, Type } from "class-transformer";

export class UpdateContractSecurity extends SpeakeasyBase {
    @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2;name=Authorization" })
    oAuth2: string;

    @SpeakeasyMetadata({
        data: "security, scheme=true;type=http;subtype=bearer;name=Authorization",
    })
    personalAccessToken: string;
}

export class UpdateContractRequest extends SpeakeasyBase {
    @SpeakeasyMetadata({ data: "request, media_type=application/json" })
    contractWrite?: shared.ContractWrite;

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

export class UpdateContract422ApplicationJSONErrors extends SpeakeasyBase {
    @SpeakeasyMetadata()
    @Expose({ name: "errors" })
    errors?: string[];

    @SpeakeasyMetadata()
    @Expose({ name: "field" })
    field?: string;
}

/**
 * Invalid data posted
 */
export class UpdateContract422ApplicationJSON extends SpeakeasyBase {
    @SpeakeasyMetadata({ elemType: UpdateContract422ApplicationJSONErrors })
    @Expose({ name: "errors" })
    @Type(() => UpdateContract422ApplicationJSONErrors)
    errors?: UpdateContract422ApplicationJSONErrors[];

    @SpeakeasyMetadata()
    @Expose({ name: "message" })
    message?: string;
}

/**
 * Not Found
 */
export class UpdateContract404ApplicationJSON extends SpeakeasyBase {
    @SpeakeasyMetadata()
    @Expose({ name: "message" })
    message?: string;
}

/**
 * Forbidden
 */
export class UpdateContract403ApplicationJSON extends SpeakeasyBase {
    @SpeakeasyMetadata()
    @Expose({ name: "message" })
    message?: string;
}

/**
 * Unauthenticated
 */
export class UpdateContract401ApplicationJSON extends SpeakeasyBase {
    @SpeakeasyMetadata()
    @Expose({ name: "message" })
    message?: string;
}

/**
 * OK
 */
export class UpdateContract200ApplicationJSON extends SpeakeasyBase {
    @SpeakeasyMetadata()
    @Expose({ name: "data" })
    @Type(() => shared.ContractRead)
    data?: shared.ContractRead;
}

export class UpdateContractResponse extends SpeakeasyBase {
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
    updateContract200ApplicationJSONObject?: UpdateContract200ApplicationJSON;

    /**
     * Unauthenticated
     */
    @SpeakeasyMetadata()
    updateContract401ApplicationJSONObject?: UpdateContract401ApplicationJSON;

    /**
     * Forbidden
     */
    @SpeakeasyMetadata()
    updateContract403ApplicationJSONObject?: UpdateContract403ApplicationJSON;

    /**
     * Not Found
     */
    @SpeakeasyMetadata()
    updateContract404ApplicationJSONObject?: UpdateContract404ApplicationJSON;

    /**
     * Invalid data posted
     */
    @SpeakeasyMetadata()
    updateContract422ApplicationJSONObject?: UpdateContract422ApplicationJSON;
}

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
export class DeleteContractContractsResponse404ResponseBody extends SpeakeasyBase {
    @SpeakeasyMetadata()
    @Expose({ name: "message" })
    message?: string;
}

/**
 * Forbidden
 */
export class DeleteContractContractsResponseResponseBody extends SpeakeasyBase {
    @SpeakeasyMetadata()
    @Expose({ name: "message" })
    message?: string;
}

/**
 * Unauthenticated
 */
export class DeleteContractContractsResponseBody extends SpeakeasyBase {
    @SpeakeasyMetadata()
    @Expose({ name: "message" })
    message?: string;
}

/**
 * Precondition failed
 */
export class DeleteContractResponseBody extends SpeakeasyBase {
    @SpeakeasyMetadata()
    @Expose({ name: "message" })
    message?: string;
}

export class DeleteContractResponse extends SpeakeasyBase {
    /**
     * Precondition failed
     */
    @SpeakeasyMetadata()
    fourHundredApplicationJsonObject?: DeleteContractResponseBody;

    /**
     * Unauthenticated
     */
    @SpeakeasyMetadata()
    fourHundredAndOneApplicationJsonObject?: DeleteContractContractsResponseBody;

    /**
     * Forbidden
     */
    @SpeakeasyMetadata()
    fourHundredAndThreeApplicationJsonObject?: DeleteContractContractsResponseResponseBody;

    /**
     * Not Found
     */
    @SpeakeasyMetadata()
    fourHundredAndFourApplicationJsonObject?: DeleteContractContractsResponse404ResponseBody;

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
    rawResponse: AxiosResponse;
}

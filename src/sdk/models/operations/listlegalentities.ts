/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
import { Expose } from "class-transformer";

export class ListLegalEntitiesRequest extends SpeakeasyBase {
    /**
     * Id of the company
     */
    @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=company" })
    company: number;
}

/**
 * Forbidden
 */
export class ListLegalEntities403ApplicationJSON extends SpeakeasyBase {
    @SpeakeasyMetadata()
    @Expose({ name: "message" })
    message?: string;
}

/**
 * Unauthenticated
 */
export class ListLegalEntities401ApplicationJSON extends SpeakeasyBase {
    @SpeakeasyMetadata()
    @Expose({ name: "message" })
    message?: string;
}

export class ListLegalEntitiesResponse extends SpeakeasyBase {
    /**
     * HTTP response content type for this operation
     */
    @SpeakeasyMetadata()
    contentType: string;

    /**
     * OK
     */
    @SpeakeasyMetadata()
    legalEntityCollection?: shared.LegalEntityCollection;

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
     * Unauthenticated
     */
    @SpeakeasyMetadata()
    listLegalEntities401ApplicationJSONObject?: ListLegalEntities401ApplicationJSON;

    /**
     * Forbidden
     */
    @SpeakeasyMetadata()
    listLegalEntities403ApplicationJSONObject?: ListLegalEntities403ApplicationJSON;
}

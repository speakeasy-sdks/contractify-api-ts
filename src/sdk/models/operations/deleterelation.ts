/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { AxiosResponse } from "axios";
import { Expose } from "class-transformer";

export class DeleteRelationRequest extends SpeakeasyBase {
    /**
     * Id of the company
     */
    @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=company" })
    company: number;

    /**
     * Id of the relation
     */
    @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=relation" })
    relation: number;
}

/**
 * Not Found
 */
export class DeleteRelation404ApplicationJSON extends SpeakeasyBase {
    @SpeakeasyMetadata()
    @Expose({ name: "message" })
    message?: string;
}

/**
 * Forbidden
 */
export class DeleteRelation403ApplicationJSON extends SpeakeasyBase {
    @SpeakeasyMetadata()
    @Expose({ name: "message" })
    message?: string;
}

/**
 * Unauthenticated
 */
export class DeleteRelation401ApplicationJSON extends SpeakeasyBase {
    @SpeakeasyMetadata()
    @Expose({ name: "message" })
    message?: string;
}

/**
 * Precondition failed
 */
export class DeleteRelation400ApplicationJSON extends SpeakeasyBase {
    @SpeakeasyMetadata()
    @Expose({ name: "message" })
    message?: string;
}

export class DeleteRelationResponse extends SpeakeasyBase {
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
     * Precondition failed
     */
    @SpeakeasyMetadata()
    deleteRelation400ApplicationJSONObject?: DeleteRelation400ApplicationJSON;

    /**
     * Unauthenticated
     */
    @SpeakeasyMetadata()
    deleteRelation401ApplicationJSONObject?: DeleteRelation401ApplicationJSON;

    /**
     * Forbidden
     */
    @SpeakeasyMetadata()
    deleteRelation403ApplicationJSONObject?: DeleteRelation403ApplicationJSON;

    /**
     * Not Found
     */
    @SpeakeasyMetadata()
    deleteRelation404ApplicationJSONObject?: DeleteRelation404ApplicationJSON;
}

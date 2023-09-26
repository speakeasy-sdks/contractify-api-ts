/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
import { Expose } from "class-transformer";

export class ListRelationsRequest extends SpeakeasyBase {
    /**
     * Id of the company
     */
    @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=company" })
    company: number;

    /**
     * The page to retrieve
     */
    @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=page" })
    page?: number;

    /**
     * Return relations with a certain reference
     */
    @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=reference" })
    reference?: string;
}

/**
 * Forbidden
 */
export class ListRelations403ApplicationJSON extends SpeakeasyBase {
    @SpeakeasyMetadata()
    @Expose({ name: "message" })
    message?: string;
}

/**
 * Unauthenticated
 */
export class ListRelations401ApplicationJSON extends SpeakeasyBase {
    @SpeakeasyMetadata()
    @Expose({ name: "message" })
    message?: string;
}

export class ListRelationsResponse extends SpeakeasyBase {
    /**
     * HTTP response content type for this operation
     */
    @SpeakeasyMetadata()
    contentType: string;

    /**
     * OK
     */
    @SpeakeasyMetadata()
    relationCollection?: shared.RelationCollection;

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
    listRelations401ApplicationJSONObject?: ListRelations401ApplicationJSON;

    /**
     * Forbidden
     */
    @SpeakeasyMetadata()
    listRelations403ApplicationJSONObject?: ListRelations403ApplicationJSON;
}

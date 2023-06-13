/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
import { Expose, Type } from "class-transformer";

export class GetRelationSecurity extends SpeakeasyBase {
    @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2;name=Authorization" })
    oAuth2: string;

    @SpeakeasyMetadata({
        data: "security, scheme=true;type=http;subtype=bearer;name=Authorization",
    })
    personalAccessToken: string;
}

export class GetRelationRequest extends SpeakeasyBase {
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
export class GetRelation404ApplicationJSON extends SpeakeasyBase {
    @SpeakeasyMetadata()
    @Expose({ name: "message" })
    message?: string;
}

/**
 * Forbidden
 */
export class GetRelation403ApplicationJSON extends SpeakeasyBase {
    @SpeakeasyMetadata()
    @Expose({ name: "message" })
    message?: string;
}

/**
 * Unauthenticated
 */
export class GetRelation401ApplicationJSON extends SpeakeasyBase {
    @SpeakeasyMetadata()
    @Expose({ name: "message" })
    message?: string;
}

/**
 * OK
 */
export class GetRelation200ApplicationJSON extends SpeakeasyBase {
    @SpeakeasyMetadata()
    @Expose({ name: "data" })
    @Type(() => shared.RelationRead)
    data?: shared.RelationRead;
}

export class GetRelationResponse extends SpeakeasyBase {
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
    getRelation200ApplicationJSONObject?: GetRelation200ApplicationJSON;

    /**
     * Unauthenticated
     */
    @SpeakeasyMetadata()
    getRelation401ApplicationJSONObject?: GetRelation401ApplicationJSON;

    /**
     * Forbidden
     */
    @SpeakeasyMetadata()
    getRelation403ApplicationJSONObject?: GetRelation403ApplicationJSON;

    /**
     * Not Found
     */
    @SpeakeasyMetadata()
    getRelation404ApplicationJSONObject?: GetRelation404ApplicationJSON;
}

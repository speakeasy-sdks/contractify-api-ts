/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import * as shared from "../../../sdk/models/shared";
import { AxiosResponse } from "axios";
import { Expose, Type } from "class-transformer";

export class UpdateRelationRequest extends SpeakeasyBase {
    @SpeakeasyMetadata({ data: "request, media_type=application/json" })
    relationWrite?: shared.RelationWrite;

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

export class UpdateRelationErrors extends SpeakeasyBase {
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
export class UpdateRelationRelationsResponse422ResponseBody extends SpeakeasyBase {
    @SpeakeasyMetadata({ elemType: UpdateRelationErrors })
    @Expose({ name: "errors" })
    @Type(() => UpdateRelationErrors)
    errors?: UpdateRelationErrors[];

    @SpeakeasyMetadata()
    @Expose({ name: "message" })
    message?: string;
}

/**
 * Not Found
 */
export class UpdateRelationRelationsResponse404ResponseBody extends SpeakeasyBase {
    @SpeakeasyMetadata()
    @Expose({ name: "message" })
    message?: string;
}

/**
 * Forbidden
 */
export class UpdateRelationRelationsResponseResponseBody extends SpeakeasyBase {
    @SpeakeasyMetadata()
    @Expose({ name: "message" })
    message?: string;
}

/**
 * Unauthenticated
 */
export class UpdateRelationRelationsResponseBody extends SpeakeasyBase {
    @SpeakeasyMetadata()
    @Expose({ name: "message" })
    message?: string;
}

/**
 * OK
 */
export class UpdateRelationResponseBody extends SpeakeasyBase {
    @SpeakeasyMetadata()
    @Expose({ name: "data" })
    @Type(() => shared.RelationRead)
    data?: shared.RelationRead;
}

export class UpdateRelationResponse extends SpeakeasyBase {
    /**
     * OK
     */
    @SpeakeasyMetadata()
    twoHundredApplicationJsonObject?: UpdateRelationResponseBody;

    /**
     * Unauthenticated
     */
    @SpeakeasyMetadata()
    fourHundredAndOneApplicationJsonObject?: UpdateRelationRelationsResponseBody;

    /**
     * Forbidden
     */
    @SpeakeasyMetadata()
    fourHundredAndThreeApplicationJsonObject?: UpdateRelationRelationsResponseResponseBody;

    /**
     * Not Found
     */
    @SpeakeasyMetadata()
    fourHundredAndFourApplicationJsonObject?: UpdateRelationRelationsResponse404ResponseBody;

    /**
     * Invalid data posted
     */
    @SpeakeasyMetadata()
    fourHundredAndTwentyTwoApplicationJsonObject?: UpdateRelationRelationsResponse422ResponseBody;

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

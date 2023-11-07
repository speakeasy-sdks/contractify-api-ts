/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import * as shared from "../../../sdk/models/shared";
import { AxiosResponse } from "axios";
import { Expose, Type } from "class-transformer";

export class CreateTaskRequest extends SpeakeasyBase {
    @SpeakeasyMetadata({ data: "request, media_type=application/json" })
    taskWrite?: shared.TaskWrite;

    /**
     * Id of the company
     */
    @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=company" })
    company: number;
}

export class CreateTaskErrors extends SpeakeasyBase {
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
export class CreateTaskTasksResponse422ResponseBody extends SpeakeasyBase {
    @SpeakeasyMetadata({ elemType: CreateTaskErrors })
    @Expose({ name: "errors" })
    @Type(() => CreateTaskErrors)
    errors?: CreateTaskErrors[];

    @SpeakeasyMetadata()
    @Expose({ name: "message" })
    message?: string;
}

/**
 * Forbidden
 */
export class CreateTaskTasksResponseResponseBody extends SpeakeasyBase {
    @SpeakeasyMetadata()
    @Expose({ name: "message" })
    message?: string;
}

/**
 * Unauthenticated
 */
export class CreateTaskTasksResponseBody extends SpeakeasyBase {
    @SpeakeasyMetadata()
    @Expose({ name: "message" })
    message?: string;
}

/**
 * OK
 */
export class CreateTaskResponseBody extends SpeakeasyBase {
    @SpeakeasyMetadata()
    @Expose({ name: "data" })
    @Type(() => shared.TaskRead)
    data?: shared.TaskRead;
}

export class CreateTaskResponse extends SpeakeasyBase {
    /**
     * OK
     */
    @SpeakeasyMetadata()
    twoHundredApplicationJsonObject?: CreateTaskResponseBody;

    /**
     * Unauthenticated
     */
    @SpeakeasyMetadata()
    fourHundredAndOneApplicationJsonObject?: CreateTaskTasksResponseBody;

    /**
     * Forbidden
     */
    @SpeakeasyMetadata()
    fourHundredAndThreeApplicationJsonObject?: CreateTaskTasksResponseResponseBody;

    /**
     * Invalid data posted
     */
    @SpeakeasyMetadata()
    fourHundredAndTwentyTwoApplicationJsonObject?: CreateTaskTasksResponse422ResponseBody;

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
}

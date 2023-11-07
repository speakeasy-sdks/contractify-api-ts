/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { AxiosResponse } from "axios";
import { Expose } from "class-transformer";

export class DeleteTaskRequest extends SpeakeasyBase {
    /**
     * Id of the company
     */
    @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=company" })
    company: number;

    /**
     * Id of the task
     */
    @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=task" })
    task: number;
}

/**
 * Not Found
 */
export class DeleteTaskTasksResponseResponseBody extends SpeakeasyBase {
    @SpeakeasyMetadata()
    @Expose({ name: "message" })
    message?: string;
}

/**
 * Forbidden
 */
export class DeleteTaskTasksResponseBody extends SpeakeasyBase {
    @SpeakeasyMetadata()
    @Expose({ name: "message" })
    message?: string;
}

/**
 * Unauthenticated
 */
export class DeleteTaskResponseBody extends SpeakeasyBase {
    @SpeakeasyMetadata()
    @Expose({ name: "message" })
    message?: string;
}

export class DeleteTaskResponse extends SpeakeasyBase {
    /**
     * Unauthenticated
     */
    @SpeakeasyMetadata()
    fourHundredAndOneApplicationJsonObject?: DeleteTaskResponseBody;

    /**
     * Forbidden
     */
    @SpeakeasyMetadata()
    fourHundredAndThreeApplicationJsonObject?: DeleteTaskTasksResponseBody;

    /**
     * Not Found
     */
    @SpeakeasyMetadata()
    fourHundredAndFourApplicationJsonObject?: DeleteTaskTasksResponseResponseBody;

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

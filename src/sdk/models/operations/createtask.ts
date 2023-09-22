/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import * as shared from "../shared";
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

export class CreateTask422ApplicationJSONErrors extends SpeakeasyBase {
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
export class CreateTask422ApplicationJSON extends SpeakeasyBase {
    @SpeakeasyMetadata({ elemType: CreateTask422ApplicationJSONErrors })
    @Expose({ name: "errors" })
    @Type(() => CreateTask422ApplicationJSONErrors)
    errors?: CreateTask422ApplicationJSONErrors[];

    @SpeakeasyMetadata()
    @Expose({ name: "message" })
    message?: string;
}

/**
 * Forbidden
 */
export class CreateTask403ApplicationJSON extends SpeakeasyBase {
    @SpeakeasyMetadata()
    @Expose({ name: "message" })
    message?: string;
}

/**
 * Unauthenticated
 */
export class CreateTask401ApplicationJSON extends SpeakeasyBase {
    @SpeakeasyMetadata()
    @Expose({ name: "message" })
    message?: string;
}

/**
 * OK
 */
export class CreateTask200ApplicationJSON extends SpeakeasyBase {
    @SpeakeasyMetadata()
    @Expose({ name: "data" })
    @Type(() => shared.TaskRead)
    data?: shared.TaskRead;
}

export class CreateTaskResponse extends SpeakeasyBase {
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
    createTask200ApplicationJSONObject?: CreateTask200ApplicationJSON;

    /**
     * Unauthenticated
     */
    @SpeakeasyMetadata()
    createTask401ApplicationJSONObject?: CreateTask401ApplicationJSON;

    /**
     * Forbidden
     */
    @SpeakeasyMetadata()
    createTask403ApplicationJSONObject?: CreateTask403ApplicationJSON;

    /**
     * Invalid data posted
     */
    @SpeakeasyMetadata()
    createTask422ApplicationJSONObject?: CreateTask422ApplicationJSON;
}

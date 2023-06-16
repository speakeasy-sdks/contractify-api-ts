/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { Pagination } from "./pagination";
import { TaskRead } from "./taskread";
import { Expose, Type } from "class-transformer";

/**
 * OK
 */
export class TaskCollection extends SpeakeasyBase {
    @SpeakeasyMetadata({ elemType: TaskRead })
    @Expose({ name: "data" })
    @Type(() => TaskRead)
    data?: TaskRead[];

    @SpeakeasyMetadata()
    @Expose({ name: "meta" })
    @Type(() => Pagination)
    meta?: Pagination;
}
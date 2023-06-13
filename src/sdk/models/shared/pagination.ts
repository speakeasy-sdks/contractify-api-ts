/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { Expose } from "class-transformer";

export class Pagination extends SpeakeasyBase {
    @SpeakeasyMetadata()
    @Expose({ name: "current_page" })
    currentPage?: number;

    @SpeakeasyMetadata()
    @Expose({ name: "from" })
    from?: number;

    @SpeakeasyMetadata()
    @Expose({ name: "last_page" })
    lastPage?: number;

    @SpeakeasyMetadata()
    @Expose({ name: "path" })
    path?: string;

    @SpeakeasyMetadata()
    @Expose({ name: "per_page" })
    perPage?: number;

    @SpeakeasyMetadata()
    @Expose({ name: "to" })
    to?: number;

    @SpeakeasyMetadata()
    @Expose({ name: "total" })
    total?: number;
}

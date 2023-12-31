/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { DossierRead } from "./dossierread";
import { Pagination } from "./pagination";
import { Expose, Type } from "class-transformer";

/**
 * OK
 */
export class DossierCollection extends SpeakeasyBase {
    @SpeakeasyMetadata({ elemType: DossierRead })
    @Expose({ name: "data" })
    @Type(() => DossierRead)
    data?: DossierRead[];

    @SpeakeasyMetadata()
    @Expose({ name: "meta" })
    @Type(() => Pagination)
    meta?: Pagination;
}

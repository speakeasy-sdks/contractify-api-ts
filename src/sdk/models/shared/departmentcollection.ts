/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { DepartmentRead } from "./departmentread";
import { Expose, Type } from "class-transformer";

export class DepartmentCollection extends SpeakeasyBase {
    @SpeakeasyMetadata({ elemType: DepartmentRead })
    @Expose({ name: "data" })
    @Type(() => DepartmentRead)
    data?: DepartmentRead[];
}

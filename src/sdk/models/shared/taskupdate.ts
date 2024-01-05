/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { RFCDate } from "../../../sdk/types";
import { Expose, Transform, Type } from "class-transformer";

/**
 * Will only be accepted if you pass a `contract_id`
 */
export enum TaskUpdateDueDateDependsOn {
    TerminationDate = "termination_date",
    EndDate = "end_date",
    StartDate = "start_date",
}

export enum TaskUpdateStatus {
    Accomplished = "accomplished",
    NotAccomplished = "not_accomplished",
    InProgress = "in_progress",
}

export class TaskUpdate extends SpeakeasyBase {
    @SpeakeasyMetadata()
    @Expose({ name: "description" })
    description?: string;

    /**
     * Will be overwritten if `due_date_depends_on` and `due_date_interval` are passed
     */
    @SpeakeasyMetadata()
    @Expose({ name: "due_date" })
    @Type(() => String)
    @Transform(({ value }) => new RFCDate(value), { toClassOnly: true })
    dueDate?: RFCDate;

    /**
     * Will only be accepted if you pass a `contract_id`
     */
    @SpeakeasyMetadata()
    @Expose({ name: "due_date_depends_on" })
    dueDateDependsOn?: TaskUpdateDueDateDependsOn;

    /**
     * Will only be accepted if you pass a `contract_id`
     */
    @SpeakeasyMetadata()
    @Expose({ name: "due_date_interval" })
    dueDateInterval?: string;

    @SpeakeasyMetadata()
    @Expose({ name: "owner_id" })
    ownerId?: number;

    @SpeakeasyMetadata()
    @Expose({ name: "reminder_duration" })
    reminderDuration?: string;

    @SpeakeasyMetadata()
    @Expose({ name: "repetition_interval" })
    repetitionInterval?: string;

    @SpeakeasyMetadata()
    @Expose({ name: "status" })
    status?: TaskUpdateStatus;

    @SpeakeasyMetadata()
    @Expose({ name: "title" })
    title?: string;
}

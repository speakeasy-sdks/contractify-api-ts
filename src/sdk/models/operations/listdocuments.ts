/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
import { Expose } from "class-transformer";

export class ListDocumentsSecurity extends SpeakeasyBase {
    @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2;name=Authorization" })
    oAuth2: string;

    @SpeakeasyMetadata({
        data: "security, scheme=true;type=http;subtype=bearer;name=Authorization",
    })
    personalAccessToken: string;
}

/**
 * Return documents currently having this status in the eSigning process, can be comma separated
 */
export enum ListDocumentsEsigningStatus {
    NotSent = "not_sent",
    SentToLegal = "sent_to_legal",
    LegalDeclined = "legal_declined",
    Sent = "sent",
    Signed = "signed",
    RejectedBySigner = "rejected_by_signer",
    FinishedButPartiallySigned = "finished_but_partially_signed",
    Revoked = "revoked",
}

export class ListDocumentsRequest extends SpeakeasyBase {
    /**
     * Id of the company
     */
    @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=company" })
    company: number;

    /**
     * Return documents currently having this status in the eSigning process, can be comma separated
     */
    @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=esigning_status" })
    esigningStatus?: ListDocumentsEsigningStatus;

    /**
     * Return documents where e-signing was updated after the given date
     */
    @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=esigning_updated_after" })
    esigningUpdatedAfter?: Date;

    /**
     * The page to retrieve
     */
    @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=page" })
    page?: number;

    /**
     * Return documents linked to a relation
     */
    @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=relation_id" })
    relationId?: number;

    /**
     * Return documents e-signed after the given date
     */
    @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=signed_after" })
    signedAfter?: Date;
}

/**
 * Forbidden
 */
export class ListDocuments403ApplicationJSON extends SpeakeasyBase {
    @SpeakeasyMetadata()
    @Expose({ name: "message" })
    message?: string;
}

/**
 * Unauthenticated
 */
export class ListDocuments401ApplicationJSON extends SpeakeasyBase {
    @SpeakeasyMetadata()
    @Expose({ name: "message" })
    message?: string;
}

export class ListDocumentsResponse extends SpeakeasyBase {
    @SpeakeasyMetadata()
    contentType: string;

    /**
     * OK
     */
    @SpeakeasyMetadata()
    documentCollection?: shared.DocumentCollection;

    @SpeakeasyMetadata()
    statusCode: number;

    @SpeakeasyMetadata()
    rawResponse?: AxiosResponse;

    /**
     * Unauthenticated
     */
    @SpeakeasyMetadata()
    listDocuments401ApplicationJSONObject?: ListDocuments401ApplicationJSON;

    /**
     * Forbidden
     */
    @SpeakeasyMetadata()
    listDocuments403ApplicationJSONObject?: ListDocuments403ApplicationJSON;
}

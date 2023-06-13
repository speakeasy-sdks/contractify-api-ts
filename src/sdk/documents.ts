/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import * as utils from "../internal/utils";
import * as operations from "./models/operations";
import * as shared from "./models/shared";
import { SDKConfiguration } from "./sdk";
import { AxiosInstance, AxiosRequestConfig, AxiosResponse } from "axios";

export class Documents {
    private sdkConfiguration: SDKConfiguration;

    constructor(sdkConfig: SDKConfiguration) {
        this.sdkConfiguration = sdkConfig;
    }

    /**
     * Delete a document
     *
     * @remarks
     * Delete a document
     */
    async deleteDocument(
        req: operations.DeleteDocumentRequest,
        security: operations.DeleteDocumentSecurity,
        config?: AxiosRequestConfig
    ): Promise<operations.DeleteDocumentResponse> {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.DeleteDocumentRequest(req);
        }

        const baseURL: string = utils.templateUrl(
            this.sdkConfiguration.serverURL,
            this.sdkConfiguration.serverDefaults
        );
        const url: string = utils.generateURL(
            baseURL,
            "/api/companies/{company}/documents/{document}",
            req
        );

        if (!(security instanceof utils.SpeakeasyBase)) {
            security = new operations.DeleteDocumentSecurity(security);
        }
        const client: AxiosInstance = utils.createSecurityClient(
            this.sdkConfiguration.defaultClient,
            security
        );

        const headers = { ...config?.headers };
        headers["Accept"] =
            "application/json;q=1, application/json;q=0.8, application/json;q=0.5, application/json;q=0";
        headers[
            "user-agent"
        ] = `speakeasy-sdk/${this.sdkConfiguration.language} ${this.sdkConfiguration.sdkVersion} ${this.sdkConfiguration.genVersion} ${this.sdkConfiguration.openapiDocVersion}`;

        const httpRes: AxiosResponse = await client.request({
            validateStatus: () => true,
            url: url,
            method: "delete",
            headers: headers,
            responseType: "arraybuffer",
            ...config,
        });

        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) {
            throw new Error(`status code not found in response: ${httpRes}`);
        }

        const res: operations.DeleteDocumentResponse = new operations.DeleteDocumentResponse({
            statusCode: httpRes.status,
            contentType: contentType,
            rawResponse: httpRes,
        });
        const decodedRes = new TextDecoder().decode(httpRes?.data);
        switch (true) {
            case httpRes?.status == 204:
                break;
            case httpRes?.status == 401:
                if (utils.matchContentType(contentType, `application/json`)) {
                    res.deleteDocument401ApplicationJSONObject = utils.objectToClass(
                        JSON.parse(decodedRes),
                        operations.DeleteDocument401ApplicationJSON
                    );
                }
                break;
            case httpRes?.status == 403:
                if (utils.matchContentType(contentType, `application/json`)) {
                    res.deleteDocument403ApplicationJSONObject = utils.objectToClass(
                        JSON.parse(decodedRes),
                        operations.DeleteDocument403ApplicationJSON
                    );
                }
                break;
            case httpRes?.status == 404:
                if (utils.matchContentType(contentType, `application/json`)) {
                    res.deleteDocument404ApplicationJSONObject = utils.objectToClass(
                        JSON.parse(decodedRes),
                        operations.DeleteDocument404ApplicationJSON
                    );
                }
                break;
            case httpRes?.status == 422:
                if (utils.matchContentType(contentType, `application/json`)) {
                    res.deleteDocument422ApplicationJSONObject = utils.objectToClass(
                        JSON.parse(decodedRes),
                        operations.DeleteDocument422ApplicationJSON
                    );
                }
                break;
        }

        return res;
    }

    /**
     * Get a document
     *
     * @remarks
     * Get information about a document
     */
    async getDocument(
        req: operations.GetDocumentRequest,
        security: operations.GetDocumentSecurity,
        config?: AxiosRequestConfig
    ): Promise<operations.GetDocumentResponse> {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.GetDocumentRequest(req);
        }

        const baseURL: string = utils.templateUrl(
            this.sdkConfiguration.serverURL,
            this.sdkConfiguration.serverDefaults
        );
        const url: string = utils.generateURL(
            baseURL,
            "/api/companies/{company}/documents/{document}",
            req
        );

        if (!(security instanceof utils.SpeakeasyBase)) {
            security = new operations.GetDocumentSecurity(security);
        }
        const client: AxiosInstance = utils.createSecurityClient(
            this.sdkConfiguration.defaultClient,
            security
        );

        const headers = { ...config?.headers };
        headers["Accept"] =
            "application/json;q=1, application/json;q=0.8, application/json;q=0.5, application/json;q=0";
        headers[
            "user-agent"
        ] = `speakeasy-sdk/${this.sdkConfiguration.language} ${this.sdkConfiguration.sdkVersion} ${this.sdkConfiguration.genVersion} ${this.sdkConfiguration.openapiDocVersion}`;

        const httpRes: AxiosResponse = await client.request({
            validateStatus: () => true,
            url: url,
            method: "get",
            headers: headers,
            responseType: "arraybuffer",
            ...config,
        });

        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) {
            throw new Error(`status code not found in response: ${httpRes}`);
        }

        const res: operations.GetDocumentResponse = new operations.GetDocumentResponse({
            statusCode: httpRes.status,
            contentType: contentType,
            rawResponse: httpRes,
        });
        const decodedRes = new TextDecoder().decode(httpRes?.data);
        switch (true) {
            case httpRes?.status == 200:
                if (utils.matchContentType(contentType, `application/json`)) {
                    res.getDocument200ApplicationJSONObject = utils.objectToClass(
                        JSON.parse(decodedRes),
                        operations.GetDocument200ApplicationJSON
                    );
                }
                break;
            case httpRes?.status == 401:
                if (utils.matchContentType(contentType, `application/json`)) {
                    res.getDocument401ApplicationJSONObject = utils.objectToClass(
                        JSON.parse(decodedRes),
                        operations.GetDocument401ApplicationJSON
                    );
                }
                break;
            case httpRes?.status == 403:
                if (utils.matchContentType(contentType, `application/json`)) {
                    res.getDocument403ApplicationJSONObject = utils.objectToClass(
                        JSON.parse(decodedRes),
                        operations.GetDocument403ApplicationJSON
                    );
                }
                break;
            case httpRes?.status == 404:
                if (utils.matchContentType(contentType, `application/json`)) {
                    res.getDocument404ApplicationJSONObject = utils.objectToClass(
                        JSON.parse(decodedRes),
                        operations.GetDocument404ApplicationJSON
                    );
                }
                break;
        }

        return res;
    }

    /**
     * List documents
     *
     * @remarks
     * List all the documents within a company
     */
    async listDocuments(
        req: operations.ListDocumentsRequest,
        security: operations.ListDocumentsSecurity,
        config?: AxiosRequestConfig
    ): Promise<operations.ListDocumentsResponse> {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.ListDocumentsRequest(req);
        }

        const baseURL: string = utils.templateUrl(
            this.sdkConfiguration.serverURL,
            this.sdkConfiguration.serverDefaults
        );
        const url: string = utils.generateURL(baseURL, "/api/companies/{company}/documents", req);

        if (!(security instanceof utils.SpeakeasyBase)) {
            security = new operations.ListDocumentsSecurity(security);
        }
        const client: AxiosInstance = utils.createSecurityClient(
            this.sdkConfiguration.defaultClient,
            security
        );

        const headers = { ...config?.headers };
        const queryParams: string = utils.serializeQueryParams(req);
        headers["Accept"] = "application/json;q=1, application/json;q=0.7, application/json;q=0";
        headers[
            "user-agent"
        ] = `speakeasy-sdk/${this.sdkConfiguration.language} ${this.sdkConfiguration.sdkVersion} ${this.sdkConfiguration.genVersion} ${this.sdkConfiguration.openapiDocVersion}`;

        const httpRes: AxiosResponse = await client.request({
            validateStatus: () => true,
            url: url + queryParams,
            method: "get",
            headers: headers,
            responseType: "arraybuffer",
            ...config,
        });

        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) {
            throw new Error(`status code not found in response: ${httpRes}`);
        }

        const res: operations.ListDocumentsResponse = new operations.ListDocumentsResponse({
            statusCode: httpRes.status,
            contentType: contentType,
            rawResponse: httpRes,
        });
        const decodedRes = new TextDecoder().decode(httpRes?.data);
        switch (true) {
            case httpRes?.status == 200:
                if (utils.matchContentType(contentType, `application/json`)) {
                    res.documentCollection = utils.objectToClass(
                        JSON.parse(decodedRes),
                        shared.DocumentCollection
                    );
                }
                break;
            case httpRes?.status == 401:
                if (utils.matchContentType(contentType, `application/json`)) {
                    res.listDocuments401ApplicationJSONObject = utils.objectToClass(
                        JSON.parse(decodedRes),
                        operations.ListDocuments401ApplicationJSON
                    );
                }
                break;
            case httpRes?.status == 403:
                if (utils.matchContentType(contentType, `application/json`)) {
                    res.listDocuments403ApplicationJSONObject = utils.objectToClass(
                        JSON.parse(decodedRes),
                        operations.ListDocuments403ApplicationJSON
                    );
                }
                break;
        }

        return res;
    }

    /**
     * Update a document
     *
     * @remarks
     * Update a document
     */
    async updateDocument(
        req: operations.UpdateDocumentRequest,
        security: operations.UpdateDocumentSecurity,
        config?: AxiosRequestConfig
    ): Promise<operations.UpdateDocumentResponse> {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.UpdateDocumentRequest(req);
        }

        const baseURL: string = utils.templateUrl(
            this.sdkConfiguration.serverURL,
            this.sdkConfiguration.serverDefaults
        );
        const url: string = utils.generateURL(
            baseURL,
            "/api/companies/{company}/documents/{document}",
            req
        );

        let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

        try {
            [reqBodyHeaders, reqBody] = utils.serializeRequestBody(req, "documentWrite", "json");
        } catch (e: unknown) {
            if (e instanceof Error) {
                throw new Error(`Error serializing request body, cause: ${e.message}`);
            }
        }

        if (!(security instanceof utils.SpeakeasyBase)) {
            security = new operations.UpdateDocumentSecurity(security);
        }
        const client: AxiosInstance = utils.createSecurityClient(
            this.sdkConfiguration.defaultClient,
            security
        );

        const headers = { ...reqBodyHeaders, ...config?.headers };
        headers["Accept"] =
            "application/json;q=1, application/json;q=0.8, application/json;q=0.5, application/json;q=0";
        headers[
            "user-agent"
        ] = `speakeasy-sdk/${this.sdkConfiguration.language} ${this.sdkConfiguration.sdkVersion} ${this.sdkConfiguration.genVersion} ${this.sdkConfiguration.openapiDocVersion}`;

        const httpRes: AxiosResponse = await client.request({
            validateStatus: () => true,
            url: url,
            method: "put",
            headers: headers,
            responseType: "arraybuffer",
            data: reqBody,
            ...config,
        });

        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) {
            throw new Error(`status code not found in response: ${httpRes}`);
        }

        const res: operations.UpdateDocumentResponse = new operations.UpdateDocumentResponse({
            statusCode: httpRes.status,
            contentType: contentType,
            rawResponse: httpRes,
        });
        const decodedRes = new TextDecoder().decode(httpRes?.data);
        switch (true) {
            case httpRes?.status == 200:
                if (utils.matchContentType(contentType, `application/json`)) {
                    res.updateDocument200ApplicationJSONObject = utils.objectToClass(
                        JSON.parse(decodedRes),
                        operations.UpdateDocument200ApplicationJSON
                    );
                }
                break;
            case httpRes?.status == 401:
                if (utils.matchContentType(contentType, `application/json`)) {
                    res.updateDocument401ApplicationJSONObject = utils.objectToClass(
                        JSON.parse(decodedRes),
                        operations.UpdateDocument401ApplicationJSON
                    );
                }
                break;
            case httpRes?.status == 403:
                if (utils.matchContentType(contentType, `application/json`)) {
                    res.updateDocument403ApplicationJSONObject = utils.objectToClass(
                        JSON.parse(decodedRes),
                        operations.UpdateDocument403ApplicationJSON
                    );
                }
                break;
            case httpRes?.status == 404:
                if (utils.matchContentType(contentType, `application/json`)) {
                    res.updateDocument404ApplicationJSONObject = utils.objectToClass(
                        JSON.parse(decodedRes),
                        operations.UpdateDocument404ApplicationJSON
                    );
                }
                break;
        }

        return res;
    }
}

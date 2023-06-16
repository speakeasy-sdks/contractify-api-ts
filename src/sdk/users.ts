/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import * as utils from "../internal/utils";
import * as operations from "./models/operations";
import * as shared from "./models/shared";
import { SDKConfiguration } from "./sdk";
import { AxiosInstance, AxiosRequestConfig, AxiosResponse } from "axios";

export class Users {
    private sdkConfiguration: SDKConfiguration;

    constructor(sdkConfig: SDKConfiguration) {
        this.sdkConfiguration = sdkConfig;
    }

    /**
     * Current User
     *
     * @remarks
     * Get the current user details
     */
    async currentUser(
        security: operations.CurrentUserSecurity,
        config?: AxiosRequestConfig
    ): Promise<operations.CurrentUserResponse> {
        const baseURL: string = utils.templateUrl(
            this.sdkConfiguration.serverURL,
            this.sdkConfiguration.serverDefaults
        );
        const url: string = baseURL.replace(/\/$/, "") + "/api/user";

        if (!(security instanceof utils.SpeakeasyBase)) {
            security = new operations.CurrentUserSecurity(security);
        }
        const client: AxiosInstance = utils.createSecurityClient(
            this.sdkConfiguration.defaultClient,
            security
        );

        const headers = { ...config?.headers };
        headers["Accept"] = "application/json;q=1, application/json;q=0.7, application/json;q=0";
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

        const res: operations.CurrentUserResponse = new operations.CurrentUserResponse({
            statusCode: httpRes.status,
            contentType: contentType,
            rawResponse: httpRes,
        });
        const decodedRes = new TextDecoder().decode(httpRes?.data);
        switch (true) {
            case httpRes?.status == 200:
                if (utils.matchContentType(contentType, `application/json`)) {
                    res.currentUser200ApplicationJSONObject = utils.objectToClass(
                        JSON.parse(decodedRes),
                        operations.CurrentUser200ApplicationJSON
                    );
                }
                break;
            case httpRes?.status == 401:
                if (utils.matchContentType(contentType, `application/json`)) {
                    res.currentUser401ApplicationJSONObject = utils.objectToClass(
                        JSON.parse(decodedRes),
                        operations.CurrentUser401ApplicationJSON
                    );
                }
                break;
            case httpRes?.status == 403:
                if (utils.matchContentType(contentType, `application/json`)) {
                    res.currentUser403ApplicationJSONObject = utils.objectToClass(
                        JSON.parse(decodedRes),
                        operations.CurrentUser403ApplicationJSON
                    );
                }
                break;
        }

        return res;
    }

    /**
     * List users
     *
     * @remarks
     * List all the users within a company
     */
    async listUsers(
        req: operations.ListUsersRequest,
        security: operations.ListUsersSecurity,
        config?: AxiosRequestConfig
    ): Promise<operations.ListUsersResponse> {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.ListUsersRequest(req);
        }

        const baseURL: string = utils.templateUrl(
            this.sdkConfiguration.serverURL,
            this.sdkConfiguration.serverDefaults
        );
        const url: string = utils.generateURL(baseURL, "/api/companies/{company}/users", req);

        if (!(security instanceof utils.SpeakeasyBase)) {
            security = new operations.ListUsersSecurity(security);
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

        const res: operations.ListUsersResponse = new operations.ListUsersResponse({
            statusCode: httpRes.status,
            contentType: contentType,
            rawResponse: httpRes,
        });
        const decodedRes = new TextDecoder().decode(httpRes?.data);
        switch (true) {
            case httpRes?.status == 200:
                if (utils.matchContentType(contentType, `application/json`)) {
                    res.userCollection = utils.objectToClass(
                        JSON.parse(decodedRes),
                        shared.UserCollection
                    );
                }
                break;
            case httpRes?.status == 401:
                if (utils.matchContentType(contentType, `application/json`)) {
                    res.listUsers401ApplicationJSONObject = utils.objectToClass(
                        JSON.parse(decodedRes),
                        operations.ListUsers401ApplicationJSON
                    );
                }
                break;
            case httpRes?.status == 403:
                if (utils.matchContentType(contentType, `application/json`)) {
                    res.listUsers403ApplicationJSONObject = utils.objectToClass(
                        JSON.parse(decodedRes),
                        operations.ListUsers403ApplicationJSON
                    );
                }
                break;
        }

        return res;
    }
}
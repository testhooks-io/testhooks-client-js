/* tslint:disable */
/* eslint-disable */
/**
 * Devhooks API
 *  ## About Create stateful HTTP endpoints that can dynamically respond to inbound requests based on request matching, invocation count, and response rules.   Requests are stored in sequence for application debugging and analysis.  ## Use cases - Test webhook integrations with mockable responses, delays, and exceptions. - If your application sends data to other services (via Webhooks) mock external server behaviour and verify you application\'s behaviour.  ## Alternatives One can mock HTTP calls in unit tests but testing external URLs in smoketests or integration suites is difficult. There are existing mock server projects that can be deployed in containers but project setup and DNS routing is a barrier.  ## Future support - Additional protocols such as MQTT (IOT), SMS, Email, FTP, SMTP, and more. - Scripting for serverless lambdas without AWS or bundling. - Market place for common actions such as \"Notify slack\", \"Send me an SMS\", \"Send me an email\" - Tracking applications using the request history         
 *
 * The version of the OpenAPI document: 0.0.1-ALPHA
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


import * as runtime from '../runtime';
import {
    CreateEndpointDto,
    CreateEndpointDtoFromJSON,
    CreateEndpointDtoToJSON,
    CreateRulesetOptions,
    CreateRulesetOptionsFromJSON,
    CreateRulesetOptionsToJSON,
    EndpointDto,
    EndpointDtoFromJSON,
    EndpointDtoToJSON,
    EndpointHistory,
    EndpointHistoryFromJSON,
    EndpointHistoryToJSON,
    EndpointRulesetDto,
    EndpointRulesetDtoFromJSON,
    EndpointRulesetDtoToJSON,
} from '../models';

export interface AddEndpointRulesetRequest {
    endpointId: string;
    createRulesetOptions: CreateRulesetOptions;
}

export interface CreateEndpointRequest {
    createEndpointDto?: CreateEndpointDto;
}

export interface GetEndpointRequest {
    endpointId: string;
}

export interface GetEndpointHistoryRequest {
    endpointId: string;
    expectedLength?: number;
    timeout?: number;
}

/**
 * 
 */
export class EndpointControllerApi extends runtime.BaseAPI {

    /**
     */
    async addEndpointRulesetRaw(requestParameters: AddEndpointRulesetRequest): Promise<runtime.ApiResponse<EndpointRulesetDto>> {
        if (requestParameters.endpointId === null || requestParameters.endpointId === undefined) {
            throw new runtime.RequiredError('endpointId','Required parameter requestParameters.endpointId was null or undefined when calling addEndpointRuleset.');
        }

        if (requestParameters.createRulesetOptions === null || requestParameters.createRulesetOptions === undefined) {
            throw new runtime.RequiredError('createRulesetOptions','Required parameter requestParameters.createRulesetOptions was null or undefined when calling addEndpointRuleset.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        const response = await this.request({
            path: `/endpoints/{endpointId}/ruleset`.replace(`{${"endpointId"}}`, encodeURIComponent(String(requestParameters.endpointId))),
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: CreateRulesetOptionsToJSON(requestParameters.createRulesetOptions),
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => EndpointRulesetDtoFromJSON(jsonValue));
    }

    /**
     */
    async addEndpointRuleset(requestParameters: AddEndpointRulesetRequest): Promise<EndpointRulesetDto> {
        const response = await this.addEndpointRulesetRaw(requestParameters);
        return await response.value();
    }

    /**
     *          Create an endpoint with a randomly assigned and publicly accessible URL. Endpoints record every request and response as endpoint actions. These can be retrieved with the getEndpointHistory operation. By default endpoints return 200       
     * Create endpoint
     */
    async createEndpointRaw(requestParameters: CreateEndpointRequest): Promise<runtime.ApiResponse<EndpointDto>> {
        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        const response = await this.request({
            path: `/endpoints`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: CreateEndpointDtoToJSON(requestParameters.createEndpointDto),
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => EndpointDtoFromJSON(jsonValue));
    }

    /**
     *          Create an endpoint with a randomly assigned and publicly accessible URL. Endpoints record every request and response as endpoint actions. These can be retrieved with the getEndpointHistory operation. By default endpoints return 200       
     * Create endpoint
     */
    async createEndpoint(requestParameters: CreateEndpointRequest): Promise<EndpointDto> {
        const response = await this.createEndpointRaw(requestParameters);
        return await response.value();
    }

    /**
     * Get endpoint
     * Get an endpoint overview
     */
    async getEndpointRaw(requestParameters: GetEndpointRequest): Promise<runtime.ApiResponse<EndpointDto>> {
        if (requestParameters.endpointId === null || requestParameters.endpointId === undefined) {
            throw new runtime.RequiredError('endpointId','Required parameter requestParameters.endpointId was null or undefined when calling getEndpoint.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/endpoints/{endpointId}`.replace(`{${"endpointId"}}`, encodeURIComponent(String(requestParameters.endpointId))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => EndpointDtoFromJSON(jsonValue));
    }

    /**
     * Get endpoint
     * Get an endpoint overview
     */
    async getEndpoint(requestParameters: GetEndpointRequest): Promise<EndpointDto> {
        const response = await this.getEndpointRaw(requestParameters);
        return await response.value();
    }

    /**
     * Get endpoint history
     * Return an history of requests and responses handled by the endpoint
     */
    async getEndpointHistoryRaw(requestParameters: GetEndpointHistoryRequest): Promise<runtime.ApiResponse<EndpointHistory>> {
        if (requestParameters.endpointId === null || requestParameters.endpointId === undefined) {
            throw new runtime.RequiredError('endpointId','Required parameter requestParameters.endpointId was null or undefined when calling getEndpointHistory.');
        }

        const queryParameters: any = {};

        if (requestParameters.expectedLength !== undefined) {
            queryParameters['expectedLength'] = requestParameters.expectedLength;
        }

        if (requestParameters.timeout !== undefined) {
            queryParameters['timeout'] = requestParameters.timeout;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/endpoints/{endpointId}/history`.replace(`{${"endpointId"}}`, encodeURIComponent(String(requestParameters.endpointId))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => EndpointHistoryFromJSON(jsonValue));
    }

    /**
     * Get endpoint history
     * Return an history of requests and responses handled by the endpoint
     */
    async getEndpointHistory(requestParameters: GetEndpointHistoryRequest): Promise<EndpointHistory> {
        const response = await this.getEndpointHistoryRaw(requestParameters);
        return await response.value();
    }

    /**
     */
    async healthRaw(): Promise<runtime.ApiResponse<string>> {
        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/health`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        });

        return new runtime.TextApiResponse(response) as any;
    }

    /**
     */
    async health(): Promise<string> {
        const response = await this.healthRaw();
        return await response.value();
    }

    /**
     */
    async indexRaw(): Promise<runtime.ApiResponse<string>> {
        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        });

        return new runtime.TextApiResponse(response) as any;
    }

    /**
     */
    async index(): Promise<string> {
        const response = await this.indexRaw();
        return await response.value();
    }

    /**
     */
    async robotsRaw(): Promise<runtime.ApiResponse<void>> {
        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/robots.txt`,
            method: 'HEAD',
            headers: headerParameters,
            query: queryParameters,
        });

        return new runtime.VoidApiResponse(response);
    }

    /**
     */
    async robots(): Promise<void> {
        await this.robotsRaw();
    }

    /**
     */
    async robots1Raw(): Promise<runtime.ApiResponse<void>> {
        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/robots.txt`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
        });

        return new runtime.VoidApiResponse(response);
    }

    /**
     */
    async robots1(): Promise<void> {
        await this.robots1Raw();
    }

    /**
     */
    async robots2Raw(): Promise<runtime.ApiResponse<void>> {
        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/robots.txt`,
            method: 'DELETE',
            headers: headerParameters,
            query: queryParameters,
        });

        return new runtime.VoidApiResponse(response);
    }

    /**
     */
    async robots2(): Promise<void> {
        await this.robots2Raw();
    }

    /**
     */
    async robots3Raw(): Promise<runtime.ApiResponse<void>> {
        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/robots.txt`,
            method: 'PUT',
            headers: headerParameters,
            query: queryParameters,
        });

        return new runtime.VoidApiResponse(response);
    }

    /**
     */
    async robots3(): Promise<void> {
        await this.robots3Raw();
    }

    /**
     */
    async robots4Raw(): Promise<runtime.ApiResponse<void>> {
        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/robots.txt`,
            method: 'PATCH',
            headers: headerParameters,
            query: queryParameters,
        });

        return new runtime.VoidApiResponse(response);
    }

    /**
     */
    async robots4(): Promise<void> {
        await this.robots4Raw();
    }

    /**
     */
    async robots5Raw(): Promise<runtime.ApiResponse<void>> {
        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/robots.txt`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        });

        return new runtime.VoidApiResponse(response);
    }

    /**
     */
    async robots5(): Promise<void> {
        await this.robots5Raw();
    }

    /**
     */
    async robots6Raw(): Promise<runtime.ApiResponse<void>> {
        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/robots.txt`,
            method: 'OPTIONS',
            headers: headerParameters,
            query: queryParameters,
        });

        return new runtime.VoidApiResponse(response);
    }

    /**
     */
    async robots6(): Promise<void> {
        await this.robots6Raw();
    }

}

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

import { exists, mapValues } from '../runtime';
import {
    LinkedMultiValueMapStringString,
    LinkedMultiValueMapStringStringFromJSON,
    LinkedMultiValueMapStringStringFromJSONTyped,
    LinkedMultiValueMapStringStringToJSON,
} from './';

/**
 * 
 * @export
 * @interface EndpointResponse
 */
export interface EndpointResponse {
    /**
     * 
     * @type {number}
     * @memberof EndpointResponse
     */
    createdAt?: number;
    /**
     * 
     * @type {string}
     * @memberof EndpointResponse
     */
    id?: string;
    /**
     * 
     * @type {string}
     * @memberof EndpointResponse
     */
    endpointId?: string;
    /**
     * 
     * @type {number}
     * @memberof EndpointResponse
     */
    statusCode?: number;
    /**
     * 
     * @type {LinkedMultiValueMapStringString}
     * @memberof EndpointResponse
     */
    headers?: LinkedMultiValueMapStringString;
    /**
     * 
     * @type {string}
     * @memberof EndpointResponse
     */
    body?: string;
    /**
     * 
     * @type {string}
     * @memberof EndpointResponse
     */
    requestId?: string;
}

export function EndpointResponseFromJSON(json: any): EndpointResponse {
    return EndpointResponseFromJSONTyped(json, false);
}

export function EndpointResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): EndpointResponse {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'createdAt': !exists(json, 'createdAt') ? undefined : json['createdAt'],
        'id': !exists(json, 'id') ? undefined : json['id'],
        'endpointId': !exists(json, 'endpointId') ? undefined : json['endpointId'],
        'statusCode': !exists(json, 'statusCode') ? undefined : json['statusCode'],
        'headers': !exists(json, 'headers') ? undefined : LinkedMultiValueMapStringStringFromJSON(json['headers']),
        'body': !exists(json, 'body') ? undefined : json['body'],
        'requestId': !exists(json, 'requestId') ? undefined : json['requestId'],
    };
}

export function EndpointResponseToJSON(value?: EndpointResponse | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'createdAt': value.createdAt,
        'id': value.id,
        'endpointId': value.endpointId,
        'statusCode': value.statusCode,
        'headers': LinkedMultiValueMapStringStringToJSON(value.headers),
        'body': value.body,
        'requestId': value.requestId,
    };
}



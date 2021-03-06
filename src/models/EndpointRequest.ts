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
 * @interface EndpointRequest
 */
export interface EndpointRequest {
    /**
     * 
     * @type {string}
     * @memberof EndpointRequest
     */
    id?: string;
    /**
     * 
     * @type {string}
     * @memberof EndpointRequest
     */
    endpointId?: string;
    /**
     * 
     * @type {string}
     * @memberof EndpointRequest
     */
    method?: EndpointRequestMethodEnum;
    /**
     * 
     * @type {string}
     * @memberof EndpointRequest
     */
    rawUrl?: string;
    /**
     * 
     * @type {string}
     * @memberof EndpointRequest
     */
    pathPart?: string;
    /**
     * 
     * @type {{ [key: string]: Array<string>; }}
     * @memberof EndpointRequest
     */
    params?: { [key: string]: Array<string>; };
    /**
     * 
     * @type {LinkedMultiValueMapStringString}
     * @memberof EndpointRequest
     */
    headers?: LinkedMultiValueMapStringString;
    /**
     * 
     * @type {string}
     * @memberof EndpointRequest
     */
    body?: string;
    /**
     * 
     * @type {Date}
     * @memberof EndpointRequest
     */
    createdAt?: Date;
}

/**
* @export
* @enum {string}
*/
export enum EndpointRequestMethodEnum {
    GET = 'GET',
    HEAD = 'HEAD',
    POST = 'POST',
    PUT = 'PUT',
    PATCH = 'PATCH',
    DELETE = 'DELETE',
    OPTIONS = 'OPTIONS',
    TRACE = 'TRACE'
}

export function EndpointRequestFromJSON(json: any): EndpointRequest {
    return EndpointRequestFromJSONTyped(json, false);
}

export function EndpointRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): EndpointRequest {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'id': !exists(json, 'id') ? undefined : json['id'],
        'endpointId': !exists(json, 'endpointId') ? undefined : json['endpointId'],
        'method': !exists(json, 'method') ? undefined : json['method'],
        'rawUrl': !exists(json, 'rawUrl') ? undefined : json['rawUrl'],
        'pathPart': !exists(json, 'pathPart') ? undefined : json['pathPart'],
        'params': !exists(json, 'params') ? undefined : json['params'],
        'headers': !exists(json, 'headers') ? undefined : LinkedMultiValueMapStringStringFromJSON(json['headers']),
        'body': !exists(json, 'body') ? undefined : json['body'],
        'createdAt': !exists(json, 'createdAt') ? undefined : (new Date(json['createdAt'])),
    };
}

export function EndpointRequestToJSON(value?: EndpointRequest | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'id': value.id,
        'endpointId': value.endpointId,
        'method': value.method,
        'rawUrl': value.rawUrl,
        'pathPart': value.pathPart,
        'params': value.params,
        'headers': LinkedMultiValueMapStringStringToJSON(value.headers),
        'body': value.body,
        'createdAt': value.createdAt === undefined ? undefined : (value.createdAt.toISOString()),
    };
}



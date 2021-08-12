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
    EndpointRequest,
    EndpointRequestFromJSON,
    EndpointRequestFromJSONTyped,
    EndpointRequestToJSON,
    EndpointResponse,
    EndpointResponseFromJSON,
    EndpointResponseFromJSONTyped,
    EndpointResponseToJSON,
} from './';

/**
 * 
 * @export
 * @interface EndpointAction
 */
export interface EndpointAction {
    /**
     * 
     * @type {number}
     * @memberof EndpointAction
     */
    startTime?: number;
    /**
     * 
     * @type {number}
     * @memberof EndpointAction
     */
    endTime?: number;
    /**
     * 
     * @type {EndpointRequest}
     * @memberof EndpointAction
     */
    request?: EndpointRequest;
    /**
     * 
     * @type {EndpointResponse}
     * @memberof EndpointAction
     */
    response?: EndpointResponse;
}

export function EndpointActionFromJSON(json: any): EndpointAction {
    return EndpointActionFromJSONTyped(json, false);
}

export function EndpointActionFromJSONTyped(json: any, ignoreDiscriminator: boolean): EndpointAction {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'startTime': !exists(json, 'startTime') ? undefined : json['startTime'],
        'endTime': !exists(json, 'endTime') ? undefined : json['endTime'],
        'request': !exists(json, 'request') ? undefined : EndpointRequestFromJSON(json['request']),
        'response': !exists(json, 'response') ? undefined : EndpointResponseFromJSON(json['response']),
    };
}

export function EndpointActionToJSON(value?: EndpointAction | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'startTime': value.startTime,
        'endTime': value.endTime,
        'request': EndpointRequestToJSON(value.request),
        'response': EndpointResponseToJSON(value.response),
    };
}



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
    RequestPattern,
    RequestPatternFromJSON,
    RequestPatternFromJSONTyped,
    RequestPatternToJSON,
    ResponseRule,
    ResponseRuleFromJSON,
    ResponseRuleFromJSONTyped,
    ResponseRuleToJSON,
} from './';

/**
 * 
 * @export
 * @interface EndpointRulesetDto
 */
export interface EndpointRulesetDto {
    /**
     * 
     * @type {string}
     * @memberof EndpointRulesetDto
     */
    id?: string;
    /**
     * 
     * @type {string}
     * @memberof EndpointRulesetDto
     */
    endpointId?: string;
    /**
     * 
     * @type {string}
     * @memberof EndpointRulesetDto
     */
    name?: string;
    /**
     * 
     * @type {string}
     * @memberof EndpointRulesetDto
     */
    description?: string;
    /**
     * 
     * @type {string}
     * @memberof EndpointRulesetDto
     */
    strategy?: EndpointRulesetDtoStrategyEnum;
    /**
     * 
     * @type {Array<ResponseRule>}
     * @memberof EndpointRulesetDto
     */
    responses?: Array<ResponseRule>;
    /**
     * 
     * @type {Array<RequestPattern>}
     * @memberof EndpointRulesetDto
     */
    requestPatterns?: Array<RequestPattern>;
    /**
     * 
     * @type {Date}
     * @memberof EndpointRulesetDto
     */
    createdAt?: Date;
}

/**
* @export
* @enum {string}
*/
export enum EndpointRulesetDtoStrategyEnum {
    SINGULAR = 'SINGULAR',
    SEQUENTIAL_LOOP = 'SEQUENTIAL_LOOP',
    SEQUENTIAL_ONCE = 'SEQUENTIAL_ONCE',
    RANDOM_SELECTION = 'RANDOM_SELECTION'
}

export function EndpointRulesetDtoFromJSON(json: any): EndpointRulesetDto {
    return EndpointRulesetDtoFromJSONTyped(json, false);
}

export function EndpointRulesetDtoFromJSONTyped(json: any, ignoreDiscriminator: boolean): EndpointRulesetDto {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'id': !exists(json, 'id') ? undefined : json['id'],
        'endpointId': !exists(json, 'endpointId') ? undefined : json['endpointId'],
        'name': !exists(json, 'name') ? undefined : json['name'],
        'description': !exists(json, 'description') ? undefined : json['description'],
        'strategy': !exists(json, 'strategy') ? undefined : json['strategy'],
        'responses': !exists(json, 'responses') ? undefined : ((json['responses'] as Array<any>).map(ResponseRuleFromJSON)),
        'requestPatterns': !exists(json, 'requestPatterns') ? undefined : ((json['requestPatterns'] as Array<any>).map(RequestPatternFromJSON)),
        'createdAt': !exists(json, 'createdAt') ? undefined : (new Date(json['createdAt'])),
    };
}

export function EndpointRulesetDtoToJSON(value?: EndpointRulesetDto | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'id': value.id,
        'endpointId': value.endpointId,
        'name': value.name,
        'description': value.description,
        'strategy': value.strategy,
        'responses': value.responses === undefined ? undefined : ((value.responses as Array<any>).map(ResponseRuleToJSON)),
        'requestPatterns': value.requestPatterns === undefined ? undefined : ((value.requestPatterns as Array<any>).map(RequestPatternToJSON)),
        'createdAt': value.createdAt === undefined ? undefined : (value.createdAt.toISOString()),
    };
}



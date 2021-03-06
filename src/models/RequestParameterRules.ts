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
    RequestParameterRule,
    RequestParameterRuleFromJSON,
    RequestParameterRuleFromJSONTyped,
    RequestParameterRuleToJSON,
} from './';

/**
 * 
 * @export
 * @interface RequestParameterRules
 */
export interface RequestParameterRules {
    /**
     * 
     * @type {string}
     * @memberof RequestParameterRules
     */
    match?: RequestParameterRulesMatchEnum;
    /**
     * 
     * @type {Array<RequestParameterRule>}
     * @memberof RequestParameterRules
     */
    rules?: Array<RequestParameterRule>;
}

/**
* @export
* @enum {string}
*/
export enum RequestParameterRulesMatchEnum {
    ANY = 'ANY',
    ALL = 'ALL',
    ONLY = 'ONLY',
    NONE = 'NONE'
}

export function RequestParameterRulesFromJSON(json: any): RequestParameterRules {
    return RequestParameterRulesFromJSONTyped(json, false);
}

export function RequestParameterRulesFromJSONTyped(json: any, ignoreDiscriminator: boolean): RequestParameterRules {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'match': !exists(json, 'match') ? undefined : json['match'],
        'rules': !exists(json, 'rules') ? undefined : ((json['rules'] as Array<any>).map(RequestParameterRuleFromJSON)),
    };
}

export function RequestParameterRulesToJSON(value?: RequestParameterRules | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'match': value.match,
        'rules': value.rules === undefined ? undefined : ((value.rules as Array<any>).map(RequestParameterRuleToJSON)),
    };
}



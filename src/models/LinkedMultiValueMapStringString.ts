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
/**
 * 
 * @export
 * @interface LinkedMultiValueMapStringString
 */
export interface LinkedMultiValueMapStringString {
    [key: string]: Array<string> | any;
    /**
     * 
     * @type {boolean}
     * @memberof LinkedMultiValueMapStringString
     */
    empty?: boolean;
    /**
     * 
     * @type {{ [key: string]: string; }}
     * @memberof LinkedMultiValueMapStringString
     */
    all?: { [key: string]: string; };
}

export function LinkedMultiValueMapStringStringFromJSON(json: any): LinkedMultiValueMapStringString {
    return LinkedMultiValueMapStringStringFromJSONTyped(json, false);
}

export function LinkedMultiValueMapStringStringFromJSONTyped(json: any, ignoreDiscriminator: boolean): LinkedMultiValueMapStringString {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
            ...json,
        'empty': !exists(json, 'empty') ? undefined : json['empty'],
        'all': !exists(json, 'all') ? undefined : json['all'],
    };
}

export function LinkedMultiValueMapStringStringToJSON(value?: LinkedMultiValueMapStringString | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
            ...value,
        'empty': value.empty,
        'all': value.all,
    };
}



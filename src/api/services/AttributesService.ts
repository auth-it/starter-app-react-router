/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { KeyedRealmAttributeRepresentation } from '../models/KeyedRealmAttributeRepresentation';
import type { RealmAttributeRepresentation } from '../models/RealmAttributeRepresentation';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class AttributesService {
    /**
     * Get realm attributes
     * Get a list of attributes for this realm
     * @param realm realm name (not id!)
     * @returns KeyedRealmAttributeRepresentation success
     * @throws ApiError
     */
    public static getRealmAttributes(
        realm: string,
    ): CancelablePromise<Array<KeyedRealmAttributeRepresentation>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/{realm}/attributes',
            path: {
                'realm': realm,
            },
        });
    }
    /**
     * Create a new realm attribute
     * @param realm realm name (not id!)
     * @param requestBody JSON body
     * @returns any Attribute created
     * @throws ApiError
     */
    public static createRealmAttribute(
        realm: string,
        requestBody: RealmAttributeRepresentation,
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/{realm}/attributes',
            path: {
                'realm': realm,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                400: `Malformed attribute`,
            },
        });
    }
    /**
     * Get realm attribute by key
     * @param realm realm name (not id!)
     * @param attributeKey attribute key
     * @returns RealmAttributeRepresentation success
     * @throws ApiError
     */
    public static getRealmAttributeByKey(
        realm: string,
        attributeKey: string,
    ): CancelablePromise<RealmAttributeRepresentation> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/{realm}/attributes/{attributeKey}',
            path: {
                'realm': realm,
                'attributeKey': attributeKey,
            },
            errors: {
                404: `Realm attribute doesn't exist`,
            },
        });
    }
    /**
     * Update realm attribute by key
     * @param realm realm name (not id!)
     * @param attributeKey attribute key
     * @param requestBody
     * @returns void
     * @throws ApiError
     */
    public static updateRealmAttributeByKey(
        realm: string,
        attributeKey: string,
        requestBody: RealmAttributeRepresentation,
    ): CancelablePromise<void> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/{realm}/attributes/{attributeKey}',
            path: {
                'realm': realm,
                'attributeKey': attributeKey,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                404: `Realm attribute doesn't exist`,
            },
        });
    }
    /**
     * Delete the realm attribute
     * @param realm realm name (not id!)
     * @param attributeKey attribute key
     * @returns void
     * @throws ApiError
     */
    public static deleteRealmAttribute(
        realm: string,
        attributeKey: string,
    ): CancelablePromise<void> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/{realm}/attributes/{attributeKey}',
            path: {
                'realm': realm,
                'attributeKey': attributeKey,
            },
            errors: {
                404: `Realm attribute doesn't exist`,
            },
        });
    }
}

/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { IdentityProviderMapperRepresentation } from '../models/IdentityProviderMapperRepresentation';
import type { IdentityProviderRepresentation } from '../models/IdentityProviderRepresentation';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class IdentityProvidersService {
    /**
     * Import identity provider from uploaded JSON file
     * @param realm realm name (not id!)
     * @param orgId organization id
     * @returns any success
     * @throws ApiError
     */
    public static importIdpJson(
        realm: string,
        orgId: string,
    ): CancelablePromise<Record<string, any>> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/{realm}/orgs/{orgId}/idps/import-config',
            path: {
                'realm': realm,
                'orgId': orgId,
            },
        });
    }
    /**
     * Get identity providers for this organization
     * @param realm realm name (not id!)
     * @param orgId organization id
     * @returns IdentityProviderRepresentation success
     * @throws ApiError
     */
    public static getIdps(
        realm: string,
        orgId: string,
    ): CancelablePromise<Array<IdentityProviderRepresentation>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/{realm}/orgs/{orgId}/idps',
            path: {
                'realm': realm,
                'orgId': orgId,
            },
        });
    }
    /**
     * Create a new identity provider for this organization
     * @param realm realm name (not id!)
     * @param orgId organization id
     * @param requestBody JSON body
     * @returns any success
     * @throws ApiError
     */
    public static createIdp(
        realm: string,
        orgId: string,
        requestBody: IdentityProviderRepresentation,
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/{realm}/orgs/{orgId}/idps',
            path: {
                'realm': realm,
                'orgId': orgId,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * Get identity provider for this organization by alias
     * @param realm realm name (not id!)
     * @param orgId organization id
     * @param alias Identity Provider alias
     * @returns IdentityProviderRepresentation success
     * @throws ApiError
     */
    public static getIdp(
        realm: string,
        orgId: string,
        alias: string,
    ): CancelablePromise<IdentityProviderRepresentation> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/{realm}/orgs/{orgId}/idps/{alias}',
            path: {
                'realm': realm,
                'orgId': orgId,
                'alias': alias,
            },
        });
    }
    /**
     * Update identity provider for this organization by alias
     * @param realm realm name (not id!)
     * @param orgId organization id
     * @param alias Identity Provider alias
     * @param requestBody
     * @returns any success
     * @throws ApiError
     */
    public static updateIdp(
        realm: string,
        orgId: string,
        alias: string,
        requestBody: IdentityProviderRepresentation,
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/{realm}/orgs/{orgId}/idps/{alias}',
            path: {
                'realm': realm,
                'orgId': orgId,
                'alias': alias,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * Delete the identity provider
     * @param realm realm name (not id!)
     * @param orgId organization id
     * @param alias Identity Provider alias
     * @returns void
     * @throws ApiError
     */
    public static deleteIdp(
        realm: string,
        orgId: string,
        alias: string,
    ): CancelablePromise<void> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/{realm}/orgs/{orgId}/idps/{alias}',
            path: {
                'realm': realm,
                'orgId': orgId,
                'alias': alias,
            },
        });
    }
    /**
     * Get mappers for identity provider
     * @param realm realm name (not id!)
     * @param orgId organization id
     * @param alias
     * @returns IdentityProviderMapperRepresentation success
     * @throws ApiError
     */
    public static getIdpMappers(
        realm: string,
        orgId: string,
        alias: string,
    ): CancelablePromise<Array<IdentityProviderMapperRepresentation>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/{realm}/orgs/{orgId}/idps/{alias}/mappers',
            path: {
                'realm': realm,
                'orgId': orgId,
                'alias': alias,
            },
        });
    }
    /**
     * Add a mapper to identity provider
     * @param realm realm name (not id!)
     * @param orgId organization id
     * @param alias
     * @param requestBody
     * @returns any success
     * @throws ApiError
     */
    public static addIdpMapper(
        realm: string,
        orgId: string,
        alias: string,
        requestBody: IdentityProviderMapperRepresentation,
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/{realm}/orgs/{orgId}/idps/{alias}/mappers',
            path: {
                'realm': realm,
                'orgId': orgId,
                'alias': alias,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * Get mapper by id for the identity provider
     * @param realm realm name (not id!)
     * @param orgId organization id
     * @param alias
     * @param id Mapper id
     * @returns IdentityProviderMapperRepresentation success
     * @throws ApiError
     */
    public static getIdpMapper(
        realm: string,
        orgId: string,
        alias: string,
        id: string,
    ): CancelablePromise<IdentityProviderMapperRepresentation> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/{realm}/orgs/{orgId}/idps/{alias}/mappers/{id}',
            path: {
                'realm': realm,
                'orgId': orgId,
                'alias': alias,
                'id': id,
            },
        });
    }
    /**
     * Update a mapper for the identity provider
     * @param realm realm name (not id!)
     * @param orgId organization id
     * @param alias
     * @param id Mapper id
     * @param requestBody
     * @returns any success
     * @throws ApiError
     */
    public static updateIdpMapper(
        realm: string,
        orgId: string,
        alias: string,
        id: string,
        requestBody: IdentityProviderMapperRepresentation,
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/{realm}/orgs/{orgId}/idps/{alias}/mappers/{id}',
            path: {
                'realm': realm,
                'orgId': orgId,
                'alias': alias,
                'id': id,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * Delete a mapper for the identity provider
     * @param realm realm name (not id!)
     * @param orgId organization id
     * @param alias
     * @param id Mapper id
     * @returns void
     * @throws ApiError
     */
    public static deleteIdpMapper(
        realm: string,
        orgId: string,
        alias: string,
        id: string,
    ): CancelablePromise<void> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/{realm}/orgs/{orgId}/idps/{alias}/mappers/{id}',
            path: {
                'realm': realm,
                'orgId': orgId,
                'alias': alias,
                'id': id,
            },
        });
    }
}

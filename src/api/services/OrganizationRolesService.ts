/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { OrganizationRoleRepresentation } from '../models/OrganizationRoleRepresentation';
import type { UserRepresentation } from '../models/UserRepresentation';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class OrganizationRolesService {
    /**
     * Get roles for this organization
     * @param realm realm name (not id!)
     * @param orgId organization id
     * @returns OrganizationRoleRepresentation success
     * @throws ApiError
     */
    public static getOrganizationRoles(
        realm: string,
        orgId: string,
    ): CancelablePromise<Array<OrganizationRoleRepresentation>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/{realm}/orgs/{orgId}/roles',
            path: {
                'realm': realm,
                'orgId': orgId,
            },
        });
    }
    /**
     * Create a new role for this organization
     * @param realm realm name (not id!)
     * @param orgId organization id
     * @param requestBody
     * @returns any success
     * @throws ApiError
     */
    public static createOrganizationRole(
        realm: string,
        orgId: string,
        requestBody: OrganizationRoleRepresentation,
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/{realm}/orgs/{orgId}/roles',
            path: {
                'realm': realm,
                'orgId': orgId,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * Get role for this organization by name
     * @param realm realm name (not id!)
     * @param orgId organization id
     * @param name organization role name
     * @returns OrganizationRoleRepresentation success
     * @throws ApiError
     */
    public static getOrganizationRole(
        realm: string,
        orgId: string,
        name: string,
    ): CancelablePromise<OrganizationRoleRepresentation> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/{realm}/orgs/{orgId}/roles/{name}',
            path: {
                'realm': realm,
                'orgId': orgId,
                'name': name,
            },
        });
    }
    /**
     * Update role for this organization
     * @param realm realm name (not id!)
     * @param orgId organization id
     * @param name organization role name
     * @param requestBody
     * @returns void
     * @throws ApiError
     */
    public static updateOrganizationRole(
        realm: string,
        orgId: string,
        name: string,
        requestBody: OrganizationRoleRepresentation,
    ): CancelablePromise<void> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/{realm}/orgs/{orgId}/roles/{name}',
            path: {
                'realm': realm,
                'orgId': orgId,
                'name': name,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * Delete this organization role
     * @param realm realm name (not id!)
     * @param orgId organization id
     * @param name organization role name
     * @returns void
     * @throws ApiError
     */
    public static deleteOrganizationRole(
        realm: string,
        orgId: string,
        name: string,
    ): CancelablePromise<void> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/{realm}/orgs/{orgId}/roles/{name}',
            path: {
                'realm': realm,
                'orgId': orgId,
                'name': name,
            },
        });
    }
    /**
     * Get users with this organization role
     * @param realm realm name (not id!)
     * @param orgId organization id
     * @param name organization role name
     * @returns UserRepresentation success
     * @throws ApiError
     */
    public static getUserOrganizationRoles(
        realm: string,
        orgId: string,
        name: string,
    ): CancelablePromise<Array<UserRepresentation>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/{realm}/orgs/{orgId}/roles/{name}/users',
            path: {
                'realm': realm,
                'orgId': orgId,
                'name': name,
            },
        });
    }
    /**
     * Check if a user has an organization role
     * @param realm realm name (not id!)
     * @param orgId organization id
     * @param name organization role name
     * @param userId user id
     * @returns void
     * @throws ApiError
     */
    public static checkUserOrganizationRole(
        realm: string,
        orgId: string,
        name: string,
        userId: string,
    ): CancelablePromise<void> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/{realm}/orgs/{orgId}/roles/{name}/users/{userId}',
            path: {
                'realm': realm,
                'orgId': orgId,
                'name': name,
                'userId': userId,
            },
        });
    }
    /**
     * Grant a user an organization role
     * Grant the specified user to the specified organization role
     * @param realm realm name (not id!)
     * @param orgId organization id
     * @param name organization role name
     * @param userId user id
     * @returns any success
     * @throws ApiError
     */
    public static grantUserOrganizationRole(
        realm: string,
        orgId: string,
        name: string,
        userId: string,
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/{realm}/orgs/{orgId}/roles/{name}/users/{userId}',
            path: {
                'realm': realm,
                'orgId': orgId,
                'name': name,
                'userId': userId,
            },
        });
    }
    /**
     * Revoke an organization role from a user
     * Revoke the specified organization role from the specified user
     * @param realm realm name (not id!)
     * @param orgId organization id
     * @param name organization role name
     * @param userId user id
     * @returns void
     * @throws ApiError
     */
    public static revokeUserOrganizationRole(
        realm: string,
        orgId: string,
        name: string,
        userId: string,
    ): CancelablePromise<void> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/{realm}/orgs/{orgId}/roles/{name}/users/{userId}',
            path: {
                'realm': realm,
                'orgId': orgId,
                'name': name,
                'userId': userId,
            },
        });
    }
}

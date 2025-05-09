/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { UserRepresentation } from '../models/UserRepresentation';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class OrganizationMembershipsService {
    /**
     * Get organization memberships
     * Get a paginated list of users who are a member of the specified organization.
     * @param realm realm name (not id!)
     * @param orgId organization id
     * @param search
     * @param first
     * @param max
     * @returns UserRepresentation success
     * @throws ApiError
     */
    public static getOrganizationMemberships(
        realm: string,
        orgId: string,
        search?: string,
        first?: number,
        max?: number,
    ): CancelablePromise<Array<UserRepresentation>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/{realm}/orgs/{orgId}/members',
            path: {
                'realm': realm,
                'orgId': orgId,
            },
            query: {
                'search': search,
                'first': first,
                'max': max,
            },
        });
    }
    /**
     * Get organization members count
     * Get total number of members of a given organization
     * @param realm realm name (not id!)
     * @param orgId organization id
     * @returns number success
     * @throws ApiError
     */
    public static getOrganizationMembershipsCount(
        realm: string,
        orgId: string,
    ): CancelablePromise<number> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/{realm}/orgs/{orgId}/members/count',
            path: {
                'realm': realm,
                'orgId': orgId,
            },
        });
    }
    /**
     * Check if a user is a member of an organization
     * @param realm realm name (not id!)
     * @param orgId organization id
     * @param userId user id
     * @returns void
     * @throws ApiError
     */
    public static checkOrganizationMembership(
        realm: string,
        orgId: string,
        userId: string,
    ): CancelablePromise<void> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/{realm}/orgs/{orgId}/members/{userId}',
            path: {
                'realm': realm,
                'orgId': orgId,
                'userId': userId,
            },
        });
    }
    /**
     * Add an organization member
     * Add the specified user to the specified organization as a member
     * @param realm realm name (not id!)
     * @param orgId organization id
     * @param userId user id
     * @returns any success
     * @throws ApiError
     */
    public static addOrganizationMember(
        realm: string,
        orgId: string,
        userId: string,
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/{realm}/orgs/{orgId}/members/{userId}',
            path: {
                'realm': realm,
                'orgId': orgId,
                'userId': userId,
            },
        });
    }
    /**
     * Remove an organization member
     * Remove the specified user from the specified organization as a member
     * @param realm realm name (not id!)
     * @param orgId organization id
     * @param userId user id
     * @returns void
     * @throws ApiError
     */
    public static removeOrganizationMember(
        realm: string,
        orgId: string,
        userId: string,
    ): CancelablePromise<void> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/{realm}/orgs/{orgId}/members/{userId}',
            path: {
                'realm': realm,
                'orgId': orgId,
                'userId': userId,
            },
        });
    }
}

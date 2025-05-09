/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { MagicLinkRepresentation } from '../models/MagicLinkRepresentation';
import type { OrganizationRepresentation } from '../models/OrganizationRepresentation';
import type { OrganizationRoleRepresentation } from '../models/OrganizationRoleRepresentation';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class UsersService {
    /**
     * List organizations for the given user
     * @param realm realm name (not id!)
     * @param userId user id
     * @returns OrganizationRepresentation success
     * @throws ApiError
     */
    public static getUsersOrgs(
        realm: string,
        userId: string,
    ): CancelablePromise<Array<OrganizationRepresentation>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/{realm}/users/{userId}/orgs',
            path: {
                'realm': realm,
                'userId': userId,
            },
        });
    }
    /**
     * List organization roles for the given user and org
     * @param realm realm name (not id!)
     * @param userId user id
     * @param orgId organization id
     * @returns OrganizationRoleRepresentation success
     * @throws ApiError
     */
    public static getUsersOrgsRoles(
        realm: string,
        userId: string,
        orgId: string,
    ): CancelablePromise<Array<OrganizationRoleRepresentation>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/{realm}/users/{userId}/orgs/{orgId}/roles',
            path: {
                'realm': realm,
                'userId': userId,
                'orgId': orgId,
            },
        });
    }
    /**
     * Create a magic link to log in a user
     * @param realm realm name (not id!)
     * @param requestBody JSON body
     * @returns any Magic Link created
     * @throws ApiError
     */
    public static createMagicLink(
        realm: string,
        requestBody: MagicLinkRepresentation,
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/{realm}/magic-link',
            path: {
                'realm': realm,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                400: `Malformed request`,
                404: `User or Client not found`,
            },
        });
    }
}

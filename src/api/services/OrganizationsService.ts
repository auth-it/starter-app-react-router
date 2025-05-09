/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { MyOrganizationsRepresentation } from '../models/MyOrganizationsRepresentation';
import type { OrganizationRepresentation } from '../models/OrganizationRepresentation';
import type { PortalLinkRepresentation } from '../models/PortalLinkRepresentation';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class OrganizationsService {
    /**
     * Get organizations
     * Get a paginated list of organizations using optional search query parameters.
     * @param realm realm name (not id!)
     * @param search search by name
     * @param first
     * @param max
     * @param q search by attributes using the format `k1:v1,k2:v2`
     * @returns OrganizationRepresentation success
     * @throws ApiError
     */
    public static getOrganizations(
        realm: string,
        search?: string,
        first?: number,
        max?: number,
        q?: string,
    ): CancelablePromise<Array<OrganizationRepresentation>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/{realm}/orgs',
            path: {
                'realm': realm,
            },
            query: {
                'search': search,
                'first': first,
                'max': max,
                'q': q,
            },
        });
    }
    /**
     * Create a new organization
     * @param realm realm name (not id!)
     * @param requestBody
     * @returns string success
     * @throws ApiError
     */
    public static createOrganization(
        realm: string,
        requestBody: OrganizationRepresentation,
    ): CancelablePromise<string> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/{realm}/orgs',
            path: {
                'realm': realm,
            },
            body: requestBody,
            mediaType: 'application/json',
            responseHeader: 'Location',
        });
    }
    /**
     * Get organizations count
     * Get a count of organizations using an optional search query.
     * @param realm realm name (not id!)
     * @param search
     * @returns number success
     * @throws ApiError
     */
    public static getOrganizationsCount(
        realm: string,
        search?: string,
    ): CancelablePromise<number> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/{realm}/orgs/count',
            path: {
                'realm': realm,
            },
            query: {
                'search': search,
            },
        });
    }
    /**
     * Get orgs and roles for authenticated user
     * Get a list of all organizations that the user is a member and their roles in those organizations. Similar idea to /userinfo in OIDC.
     * @param realm realm name (not id!)
     * @returns MyOrganizationsRepresentation success
     * @throws ApiError
     */
    public static getMe(
        realm: string,
    ): CancelablePromise<MyOrganizationsRepresentation> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/{realm}/orgs/me',
            path: {
                'realm': realm,
            },
        });
    }
    /**
     * Get organization by id
     * @param realm realm name (not id!)
     * @param orgId organization id
     * @returns OrganizationRepresentation success
     * @throws ApiError
     */
    public static getOrganizationById(
        realm: string,
        orgId: string,
    ): CancelablePromise<OrganizationRepresentation> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/{realm}/orgs/{orgId}',
            path: {
                'realm': realm,
                'orgId': orgId,
            },
        });
    }
    /**
     * Update this organization by id
     * @param realm realm name (not id!)
     * @param orgId organization id
     * @param requestBody
     * @returns void
     * @throws ApiError
     */
    public static updateOrganization(
        realm: string,
        orgId: string,
        requestBody: OrganizationRepresentation,
    ): CancelablePromise<void> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/{realm}/orgs/{orgId}',
            path: {
                'realm': realm,
                'orgId': orgId,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * Delete the organization
     * @param realm realm name (not id!)
     * @param orgId organization id
     * @returns void
     * @throws ApiError
     */
    public static deleteOrganization(
        realm: string,
        orgId: string,
    ): CancelablePromise<void> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/{realm}/orgs/{orgId}',
            path: {
                'realm': realm,
                'orgId': orgId,
            },
        });
    }
    /**
     * Create a link for the organization's admin portal
     * Create a link for this organizations admin portal. This link encodes an action token on behalf of the organization's default admin user, or the user that is optionally specified in this request. The user specified must be a member of this organization, and have full organization admin roles.
     * @param realm realm name (not id!)
     * @param orgId organization id
     * @param formData
     * @returns PortalLinkRepresentation success
     * @throws ApiError
     */
    public static createPortalLink(
        realm: string,
        orgId: string,
        formData?: {
            userId?: string;
        },
    ): CancelablePromise<PortalLinkRepresentation> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/{realm}/orgs/{orgId}/portal-link',
            path: {
                'realm': realm,
                'orgId': orgId,
            },
            formData: formData,
            mediaType: 'application/x-www-form-urlencoded',
        });
    }
}

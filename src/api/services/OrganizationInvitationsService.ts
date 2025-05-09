/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { InvitationRepresentation } from '../models/InvitationRepresentation';
import type { InvitationRequestRepresentation } from '../models/InvitationRequestRepresentation';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class OrganizationInvitationsService {
    /**
     * Create an invitation to an organization
     * @param realm realm name (not id!)
     * @param orgId organization id
     * @param requestBody
     * @returns any success
     * @throws ApiError
     */
    public static addOrganizationInvitation(
        realm: string,
        orgId: string,
        requestBody: InvitationRequestRepresentation,
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/{realm}/orgs/{orgId}/invitations',
            path: {
                'realm': realm,
                'orgId': orgId,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                409: `invitation already exists`,
            },
        });
    }
    /**
     * Get organization invitations
     * Get a paginated list of invitations to an organization, using an optional search query for email address.
     * @param realm realm name (not id!)
     * @param orgId organization id
     * @param search
     * @param first
     * @param max
     * @returns InvitationRepresentation success
     * @throws ApiError
     */
    public static getOrganizationInvitations(
        realm: string,
        orgId: string,
        search?: string,
        first?: number,
        max?: number,
    ): CancelablePromise<Array<InvitationRepresentation>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/{realm}/orgs/{orgId}/invitations',
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
     * Remove a pending invitation
     * @param realm realm name (not id!)
     * @param orgId organization id
     * @param invitationId invitation id
     * @returns void
     * @throws ApiError
     */
    public static removeOrganizationInvitation(
        realm: string,
        orgId: string,
        invitationId: string,
    ): CancelablePromise<void> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/{realm}/orgs/{orgId}/invitations/{invitationId}',
            path: {
                'realm': realm,
                'orgId': orgId,
                'invitationId': invitationId,
            },
        });
    }
}

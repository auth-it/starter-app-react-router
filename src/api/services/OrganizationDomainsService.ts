/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { OrganizationDomainRepresentation } from '../models/OrganizationDomainRepresentation';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class OrganizationDomainsService {
    /**
     * Get details for all domains owned by an organization
     * @param realm realm name (not id!)
     * @param orgId organization id
     * @returns OrganizationDomainRepresentation success
     * @throws ApiError
     */
    public static getOrganizationDomains(
        realm: string,
        orgId: string,
    ): CancelablePromise<Array<OrganizationDomainRepresentation>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/{realm}/orgs/{orgId}/domains',
            path: {
                'realm': realm,
                'orgId': orgId,
            },
        });
    }
    /**
     * Get details for a domain owned by an organization
     * @param realm realm name (not id!)
     * @param orgId organization id
     * @param domainName domain name
     * @returns OrganizationDomainRepresentation success
     * @throws ApiError
     */
    public static getOrganizationDomain(
        realm: string,
        orgId: string,
        domainName: string,
    ): CancelablePromise<OrganizationDomainRepresentation> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/{realm}/orgs/{orgId}/domains/{domainName}',
            path: {
                'realm': realm,
                'orgId': orgId,
                'domainName': domainName,
            },
        });
    }
    /**
     * Start domain verification
     * Initiate a verification check for the domain name owned by this organization
     * @param realm realm name (not id!)
     * @param orgId organization id
     * @param domainName domain name
     * @returns any success
     * @throws ApiError
     */
    public static verifyDomain(
        realm: string,
        orgId: string,
        domainName: string,
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/{realm}/orgs/{orgId}/domains/{domainName}/verify',
            path: {
                'realm': realm,
                'orgId': orgId,
                'domainName': domainName,
            },
        });
    }
}

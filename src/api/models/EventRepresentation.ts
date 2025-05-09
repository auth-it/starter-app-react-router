/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { AuthDetailsRepresentation } from './AuthDetailsRepresentation';
export type EventRepresentation = {
    uid?: string;
    time?: number;
    realmId?: string;
    organizationId?: string;
    type?: string;
    representation?: string;
    operationType?: string;
    resourcePath?: string;
    resourceType?: string;
    error?: string;
    authDetails?: AuthDetailsRepresentation;
    details?: Record<string, any>;
};


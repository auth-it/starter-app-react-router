/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { EventRepresentation } from '../models/EventRepresentation';
import type { WebhookRepresentation } from '../models/WebhookRepresentation';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class EventsService {
    /**
     * Create a new audit log event
     * @param realm realm name (not id!)
     * @param requestBody JSON body
     * @returns any Event received
     * @throws ApiError
     */
    public static createEvent(
        realm: string,
        requestBody: EventRepresentation,
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/{realm}/events',
            path: {
                'realm': realm,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                400: `Malformed event`,
                403: `Rate limit exceeded`,
                409: `Reserved event type`,
            },
        });
    }
    /**
     * Get webhooks
     * Get a list of webhooks for this realm
     * @param realm realm name (not id!)
     * @returns WebhookRepresentation success
     * @throws ApiError
     */
    public static getWebhooks(
        realm: string,
    ): CancelablePromise<Array<WebhookRepresentation>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/{realm}/webhooks',
            path: {
                'realm': realm,
            },
        });
    }
    /**
     * Create a new webhook
     * @param realm realm name (not id!)
     * @param requestBody JSON body
     * @returns any Webhook created
     * @throws ApiError
     */
    public static createWebhook(
        realm: string,
        requestBody: WebhookRepresentation,
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/{realm}/webhooks',
            path: {
                'realm': realm,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                400: `Malformed webhook`,
            },
        });
    }
    /**
     * Get webhook by id
     * @param realm realm name (not id!)
     * @param webhookId webhook id
     * @returns WebhookRepresentation success
     * @throws ApiError
     */
    public static getWebhookById(
        realm: string,
        webhookId: string,
    ): CancelablePromise<WebhookRepresentation> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/{realm}/webhooks/{webhookId}',
            path: {
                'realm': realm,
                'webhookId': webhookId,
            },
            errors: {
                404: `Webhook doesn't exist`,
            },
        });
    }
    /**
     * Update this webhook by id
     * @param realm realm name (not id!)
     * @param webhookId webhook id
     * @param requestBody
     * @returns void
     * @throws ApiError
     */
    public static updateWebhook(
        realm: string,
        webhookId: string,
        requestBody: WebhookRepresentation,
    ): CancelablePromise<void> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/{realm}/webhooks/{webhookId}',
            path: {
                'realm': realm,
                'webhookId': webhookId,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                404: `Webhook doesn't exist`,
            },
        });
    }
    /**
     * Delete the webhook
     * @param realm realm name (not id!)
     * @param webhookId webhook id
     * @returns void
     * @throws ApiError
     */
    public static deleteWebhook(
        realm: string,
        webhookId: string,
    ): CancelablePromise<void> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/{realm}/webhooks/{webhookId}',
            path: {
                'realm': realm,
                'webhookId': webhookId,
            },
            errors: {
                404: `Webhook doesn't exist`,
            },
        });
    }
}

# Auth.it + react-router-dom + oidc-spa + Vite

This is a sample application to demonstrate how to quickly and securely protect an application using [OIDC](https://openid.net/developers/how-connect-works/). It uses [react-router-dom](https://reactrouter.com/), [oidc-spa](https://www.oidc-spa.dev/) and [vite](https://vite.dev/) to show you how to secure an provide user identity to a single page application (SPA). Please use this as a basis to start your own applications or protect an existing one.

## Configure your environment

Update the `.env.local` (copy `.env.local.sample`) to connect to your authentication server. If you are coming here from [Auth.it](https://auth.it), you can easily configure by copying the values from the [Dashboard overview](https://dash.auth.it) or the [Applications page](https://dash.auth.it/developer/applications) like this:

```
# ISSUER_URI (Step 2 of the [dashboard overview page](https://dash.auth.it/))
VITE_AUTHIT_ISSUER_URI=https://somename.authit.cloud/realms/somename
# CLIENT_ID (Step 2 of the [dashboard overview page](https://dash.auth.it/))
VITE_AUTHIT_CLIENT_ID=frontend
```

## Set your redirect URI

Depending on your authentication server, you will need to make sure that it is expecting this application by setting an appropriate redirect URI. If you are using Auth.it, go to the [Applications](https://dash.auth.it/developer/applications) section of the dashboard, and add `http://localhost:5173/*` to the list of redirect URIs and save.

## Start the app

```bash
pnpm i
pnpm dev
```

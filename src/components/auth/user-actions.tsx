import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { useOidc } from "@/oidc";
import { AlertCircle } from "lucide-react";
import { parseKeycloakIssuerUri } from "oidc-spa/tools/parseKeycloakIssuerUri";
import { Link } from "react-router";

export function UserActions() {
  // Here we can safely assume that the user is logged in.
  const {
    isUserLoggedIn,
    tokens,
    goToAuthServer,
    backFromAuthServer,
    renewTokens,
    params: { issuerUri, clientId },
    initializationError,
  } = useOidc({
    assert: "user logged in",
  });

  const parsedKeycloakIssuerUri = parseKeycloakIssuerUri(issuerUri);

  return (
    <div>
      <h3 className="mb-2 font-semibold">User Actions</h3>
      {backFromAuthServer !== undefined &&
        backFromAuthServer?.extraQueryParams !== undefined &&
        backFromAuthServer?.result.kc_action_status && (
          <Alert className="mb-2">
            <AlertCircle className="h-4 w-4" />
            <AlertTitle>Action completed</AlertTitle>
            <AlertDescription className="flex">
              Result:{" "}
              <Badge>{backFromAuthServer.result.kc_action_status}</Badge>
            </AlertDescription>
          </Alert>
        )}
      <div className="flex flex-wrap gap-2">
        <Button variant="secondary" onClick={() => renewTokens()}>
          Renew tokens
        </Button>
        {parsedKeycloakIssuerUri !== undefined && (
          <>
            <Button
              variant="secondary"
              onClick={() =>
                goToAuthServer({
                  extraQueryParams: { kc_action: "UPDATE_PASSWORD" },
                })
              }
            >
              Change password
            </Button>
            <Button
              variant="secondary"
              onClick={() =>
                goToAuthServer({
                  extraQueryParams: { kc_action: "UPDATE_PROFILE" },
                })
              }
            >
              Update profile
            </Button>
            {backFromAuthServer?.extraQueryParams.kc_action ===
              "UPDATE_PROFILE" && (
              <p>Result: {backFromAuthServer.result.kc_action_status}</p>
            )}
            <Button
              variant="secondary"
              onClick={() =>
                goToAuthServer({
                  extraQueryParams: { kc_action: "delete_account" },
                })
              }
            >
              Delete account
            </Button>
            <Button variant="secondary" asChild>
              <Link
                to={parsedKeycloakIssuerUri.getAccountUrl({
                  clientId,
                  backToAppFromAccountUrl: import.meta.env.BASE_URL,
                })}
              >
                Go to Auth.it Account Management Console
              </Link>
            </Button>
          </>
        )}
      </div>
    </div>
  );
}

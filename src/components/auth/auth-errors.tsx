import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { useOidc } from "@/oidc";
import { AlertCircle } from "lucide-react";

export function AuthErrors() {
  const { initializationError } = useOidc({
    assert: "user logged in",
  });

  return (
    initializationError !== undefined && (
      <Alert variant="destructive" className="mb-12">
        <AlertCircle className="h-4 w-4" />
        <AlertTitle>Auth Initialization Error</AlertTitle>
        <AlertDescription>
          {initializationError.isAuthServerLikelyDown
            ? "Sorry our Keycloak server is down"
            : `Initialization error: ${initializationError.message}`}
        </AlertDescription>
      </Alert>
    )
  );
}

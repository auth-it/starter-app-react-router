import { Header } from "@/components/application/Header";
import { Background1, Background2 } from "@/components/application/backgrounds";
import { ProfileCard } from "@/components/auth/profile-card";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Button } from "@/components/ui/button";
import { useOidc } from "@/oidc";
import { AlertCircle } from "lucide-react";
import { Link } from "react-router";

export default function PublicPage() {
  const { isUserLoggedIn, initializationError } = useOidc();

  return (
    <>
      <div className="bg-white">
        <Header />

        <div className="relative isolate px-6 pt-14 lg:px-8">
          <Background1 />

          <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56">
            {initializationError !== undefined && (
              <Alert variant="destructive" className="mb-12">
                <AlertCircle className="h-4 w-4" />
                <AlertTitle>Auth Initialization Error</AlertTitle>
                <AlertDescription>
                  {initializationError.isAuthServerLikelyDown
                    ? "Sorry our Keycloak server is down"
                    : `Initialization error: ${initializationError.message}`}
                </AlertDescription>
              </Alert>
            )}

            <div className="text-center">
              <h1 className="text-5xl font-semibold tracking-tight text-balance text-gray-900 sm:text-7xl">
                Starter App
              </h1>
              <p className="mt-8 text-lg font-medium text-pretty text-gray-500 sm:text-xl/8">
                This starter app is a template for protecting applications with
                Auth.it
              </p>
              <div className="mt-10 flex items-center justify-center gap-x-6">
                <Button asChild>
                  <Link to="#">Deploy</Link>
                </Button>
                <Link
                  to="https://auth.it"
                  className="text-sm/6 font-semibold text-gray-900"
                >
                  Learn more <span aria-hidden="true">→</span>
                </Link>
              </div>
            </div>
          </div>
          <Background2 />
        </div>
      </div>
    </>
  );
}

import { useOidc } from "@/oidc";
import { Button } from "../ui/button";
import { LogIn, LogOut, UserPlus } from "lucide-react";

export function LoggedInAuthButton() {
  const { decodedIdToken, logout } = useOidc({ assert: "user logged in" });

  return (
    <Button variant="secondary" onClick={() => logout({ redirectTo: "home" })}>
      <LogOut className="h-4 w-4" />
      Logout
    </Button>
  );
}

export function NotLoggedInAuthButton() {
  const { login } = useOidc({ assert: "user not logged in" });

  return (
    <div className="flex gap-2">
      <Button variant="secondary" onClick={() => login()}>
        <LogIn className="h-4 w-4" />
        Login
      </Button>
      <Button
        variant="secondary"
        onClick={() =>
          login({
            transformUrlBeforeRedirect: (url) => {
              const urlObj = new URL(url);

              urlObj.pathname = urlObj.pathname.replace(
                /\/auth$/,
                "/registrations",
              );

              return urlObj.href;
            },
          })
        }
      >
        <UserPlus className="h-4 w-4" />
        Register
      </Button>
    </div>
  );
}

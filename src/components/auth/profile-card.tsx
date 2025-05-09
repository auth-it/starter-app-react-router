import { useOidc } from "@/oidc";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../ui/card";
import { cn } from "@/lib/utils";

export function ProfileCard({ className }: React.ComponentProps<"div">) {
  const { decodedIdToken, isUserLoggedIn } = useOidc({
    assert: "user logged in",
  });

  return (
    isUserLoggedIn && (
      <Card className={cn("mx-auto w-[350px]", className)}>
        <CardHeader>
          <CardTitle>User information</CardTitle>
          <CardDescription>Current values from the JWT</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex gap-2 text-sm">
            <span className="font-medium">Name: </span>
            <span>{decodedIdToken.name}</span>
          </div>
          <div className="flex gap-2 text-sm">
            <span className="font-medium">Email: </span>
            <span>{decodedIdToken.email}</span>
          </div>
        </CardContent>
      </Card>
    )
  );
}

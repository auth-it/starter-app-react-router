import { ScrollArea } from "@/components/ui/scroll-area";
import { decodeJwt } from "oidc-spa/tools/decodeJwt";
import { useMemo } from "react";
import { useOidc } from "@/oidc";

export function DecodedToken() {
  const { tokens } = useOidc({
    assert: "user logged in",
  });

  // WARNING: You are not supposed to decode the accessToken on the client side.
  // We are doing it here only for debugging purposes.
  const decodedAccessToken = useMemo(() => {
    if (tokens === undefined) {
      return undefined;
    }
    try {
      return decodeJwt(tokens.accessToken);
    } catch {
      return undefined;
    }
  }, [tokens]);

  return (
    <div className="spacy-y-2">
      <h3 className="font-semibold">Decoded Access Token</h3>
      {decodedAccessToken !== undefined ? (
        <ScrollArea className="h-[600px] w-2xl rounded-md border p-4">
          <pre style={{ textAlign: "left" }}>
            {JSON.stringify(decodedAccessToken, null, 2)}
          </pre>
        </ScrollArea>
      ) : (
        <p>The Access Token issued by the IDP is opaque (Not a JWT).</p>
      )}
    </div>
  );
}

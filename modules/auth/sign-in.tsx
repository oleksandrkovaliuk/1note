"use client";

import * as React from "react";

import { Button } from "@/shared/ui/button";
import { GoogleIcon } from "@/shared/ui/icons/google";
import { useSignIn } from "@clerk/nextjs";
import { OAuthStrategy } from "@clerk/types";
import Link from "next/link";
import { toast } from "sonner";
import { Spinner } from "@/shared/ui/icons/spinner";

export function SignIn() {
  const { signIn } = useSignIn();

  const [isLoading, setIsLoading] = React.useState(false);

  const handleOAuthStrategy = async (strategy: OAuthStrategy) => {
    try {
      setIsLoading(true);

      await signIn?.authenticateWithRedirect({
        strategy,
        redirectUrlComplete: `/`,
        redirectUrl: `/sso`,
      });
    } catch (err) {
      toast.error("Something went wrong", {
        description: err as string,
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="max-w-sm mx-auto space-y-6">
      <h1 className="text-2xl font-bold">Ohayō gozaimasu !</h1>

      <Button
        size="lg"
        type="button"
        variant="outline"
        disabled={isLoading}
        onClick={() => void handleOAuthStrategy("oauth_google")}
      >
        {isLoading ? (
          <Spinner className="size-4" />
        ) : (
          <GoogleIcon className="size-4" />
        )}

        <p>Jump in with Google</p>
      </Button>

      <p className="text-sm text-foreground mb-6">
        By continuing, you agree to Planner’s{" "}
        <Link href="/legal/terms-of-service" className="underline">
          Terms of Service
        </Link>{" "}
        and{" "}
        <Link href="/legal/privacy-policy" className="underline">
          Privacy Policy
        </Link>
      </p>
    </div>
  );
}

"use client";

import * as React from "react";

import { toast } from "sonner";
import { useClerk } from "@clerk/nextjs";
import { Spinner } from "@/shared/ui/icons/spinner";

export const SSOcallback = () => {
  const { handleRedirectCallback } = useClerk();

  const handleCallback = React.useCallback(async () => {
    try {
      await handleRedirectCallback({
        signInUrl: process.env.NEXT_PUBLIC_CLERK_SIGN_IN_URL,
      });
    } catch (error) {
      console.error(error);
      toast.error("Something went wrong, please try again");
    }
  }, [handleRedirectCallback]);

  React.useEffect(() => {
    void handleCallback();
  }, [handleCallback]);

  return (
    <div className="flex flex-col items-center justify-center h-full">
      <p className="text-xl font-bold mb-4">Investigating the mysterious...</p>
      <div id="clerk-captcha" />
      <Spinner className="size-6" />
    </div>
  );
};

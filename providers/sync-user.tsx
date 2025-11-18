"use client";

import * as React from "react";
import { api } from "@/convex/_generated/api";
import { useConvexAuth, useMutation } from "convex/react";

// Sync on first login to put new user in convex db
export function SyncUserProvider({ children }: { children: React.ReactNode }) {
  const { isLoading } = useConvexAuth();
  const sync = useMutation(api.users.routes.sync);

  React.useEffect(() => {
    if (isLoading) return;

    sync();
  }, [sync, isLoading]);

  return <React.Fragment>{children}</React.Fragment>;
}

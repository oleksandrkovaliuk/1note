import * as React from "react";
import { ClerkProvider } from "@/shared/ui/clerk-provider";
import { ConvexClientProvider } from "@/convex/convex-client";

// Clerk must be server component to execute before convex is initialized
export function ConvexClerkProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ClerkProvider dynamic>
      {/* client */}
      <ConvexClientProvider>{children}</ConvexClientProvider>
    </ClerkProvider>
  );
}

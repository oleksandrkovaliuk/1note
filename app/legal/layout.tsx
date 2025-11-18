import { Tooltip } from "@/shared/ui/tooltip";
import Link from "next/link";

export const dynamic = "force-static";

export default function StaticLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex p-8 selection:bg-black selection:text-white dark:selection:bg-white dark:selection:text-black">
      <nav className="flex flex-col items-start">
        {/* <Link href="/" className="text-2xl font-bold hover:underline">
          Planner
        </Link> */}

        <aside className="absolute left-8 top-[50%] translate-y-[-50%] flex flex-col flex-grow justify-center gap-4">
          <Link
            className="hover:underline"
            href="/legal/privacy-policy"
            title='Navigate to the "Privacy Policy" page'
            aria-label='Navigate to the "Privacy Policy" page'
          >
            Privacy Policy
          </Link>
          <Tooltip aria-label="Navigate to the 'Terms of Service' page">
            <Link
              className="hover:underline"
              href="/legal/terms-of-service"
              title='Navigate to the "Terms of Service" page'
              aria-label='Navigate to the "Terms of Service" page'
            >
              Terms of Service
            </Link>
          </Tooltip>
          <Link
            className="hover:underline"
            href="/legal/security-policy"
            title='Navigate to the "Security Policy" page'
            aria-label='Navigate to the "Security Policy" page'
          >
            Security Policy
          </Link>
        </aside>
      </nav>

      <section className="flex-grow">{children}</section>
    </div>
  );
}

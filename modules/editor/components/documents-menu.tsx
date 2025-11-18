import { Doc, Id } from "@/convex/_generated/dataModel";
import { Button } from "@/shared/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/shared/ui/dropdown-menu";
import { Scroll } from "lucide-react";
import Link from "next/link";

export function DocumentsMenu({
  id,
  documents,
}: {
  id: Id<"documents">;
  documents: Doc<"documents">[];
}) {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          size="icon"
          variant="outline"
          className="fixed z-1 right-4 bottom-4"
        >
          <Scroll />
          <span className="sr-only">Toggle my documents</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent side="top" align="end" className="w-40">
        {documents.map((document) => (
          <DropdownMenuItem key={document._id} asChild>
            <Link
              data-active={document._id === id}
              href={`/document/${document._id}`}
              className="data-[active=true]:bg-accent data-[active=true]:text-accent-foreground flex items-center justify-between gap-2"
            >
              {document.updated_at}
            </Link>
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

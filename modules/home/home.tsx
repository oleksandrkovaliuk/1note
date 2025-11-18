"use client";

import { api } from "@/convex/_generated/api";
import { Button } from "@/shared/ui/button";
import { useMutation, useQuery } from "convex/react";
import { FilePlus2 } from "lucide-react";
import Link from "next/link";

import { useRouter } from "next/navigation";

export function Home() {
  const router = useRouter();
  const documents = useQuery(api.documents.routes.list);
  const createDocument = useMutation(api.documents.routes.put);

  const handleCreateDocument = async () => {
    const id = await createDocument();

    router.push(`/document/${id}`);
  };

  return (
    <section className="h-full flex flex-col items-center justify-center gap-4">
      <Button
        size="lg"
        variant="ghost"
        aria-label="Add new document"
        onClick={handleCreateDocument}
        aria-describedby="add-new-document"
      >
        <FilePlus2 />
        Create
        <span className="sr-only">Create new document</span>
      </Button>

      {documents?.map((document) => (
        <Link
          key={document._id}
          href={`/document/${document._id}`}
          className="flex items-center justify-between gap-2"
        >
          {document.updated_at}
        </Link>
      ))}
    </section>
  );
}

import { Id } from "@/convex/_generated/dataModel";
import { Editor } from "@/modules/editor/editor";

export default async function Page({
  params,
}: {
  params: {
    id: Id<"documents">;
  };
}) {
  const { id } = await params;

  return (
    <section className="max-w-2xl mx-auto">
      <Editor id={id} />
    </section>
  );
}

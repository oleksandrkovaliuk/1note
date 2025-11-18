import * as React from "react";

import { Hand, HandGrab } from "lucide-react";
import { type Editor } from "@tiptap/react";
import DragHandle from "@tiptap/extension-drag-handle-react";
import { Button } from "@/shared/ui/button";

export function DragHandler({ editor }: { editor: Editor }) {
  const [isDragging, setIsDragging] = React.useState(false);

  return (
    <DragHandle
      editor={editor}
      computePositionConfig={{
        placement: "left",
      }}
      className="text-muted-foreground"
      onElementDragEnd={() => setIsDragging(false)}
      onElementDragStart={() => setIsDragging(true)}
    >
      <Button
        variant="ghost"
        size="icon"
        className={isDragging ? "cursor-grabbing" : "cursor-grab"}
      >
        {isDragging ? <HandGrab size="16" /> : <Hand size="16" />}
        <span className="sr-only">Drag current element</span>
      </Button>
    </DragHandle>
  );
}

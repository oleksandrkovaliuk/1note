"use client";

import * as React from "react";
import { TextStyleKit } from "@tiptap/extension-text-style";
import { TaskList, ListKit } from "@tiptap/extension-list";

import { EditorContent, useEditor } from "@tiptap/react";
import type { Editor as TEditor } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";

import { TaskItem } from "@/modules/editor/components/lists";

import { Id } from "@/convex/_generated/dataModel";
import { useMutation, useQuery } from "convex/react";
import { api } from "@/convex/_generated/api";

import { DragHandler } from "./components/drag-handler";

import BubbleMenuExt from "@tiptap/extension-bubble-menu";
import { Controller } from "./components/controller";

import { ConvexError } from "convex/values";
import { toast } from "sonner";

const extensions = [
  TextStyleKit,
  BubbleMenuExt,
  StarterKit.configure({
    bulletList: false,
    orderedList: false,
    listItem: false,
  }),
  ListKit,
  TaskList,
  TaskItem.configure({
    nested: true,
  }),
];

export function Editor({ id }: { id: Id<"documents"> }) {
  const document = useQuery(api.documents.routes.get, { id });

  const update = useMutation(api.documents.routes.patch).withOptimisticUpdate(
    (localStore, args) => {
      const { content } = args;

      const currentValue = localStore.getQuery(api.documents.routes.get, {
        id,
      });

      if (currentValue?.content) {
        localStore.setQuery(
          api.documents.routes.get,
          { id },
          {
            ...currentValue,
            content,
          },
        );
      }
    },
  );

  const handleOnEditorUpdate = React.useCallback(
    ({ editor }: { editor: TEditor }) => {
      try {
        const editorState = JSON.stringify(editor.getJSON());

        if (document?.content === editorState) {
          return;
        }

        update({ id, content: editorState }).catch((error) => {
          const errorMessage =
            error instanceof ConvexError
              ? (error.data as { message: string }).message
              : "Unexpected error occurred";

          toast.error(errorMessage);
        });
      } catch (error) {
        const errorMessage =
          // Check whether the error is an application error
          error instanceof ConvexError
            ? // Access data and cast it to the type we expect
              (error.data as { message: string }).message
            : // Must be some developer error,
              // and prod deployments will not
              // reveal any more information about it
              // to the client
              "Unexpected error occurred";

        toast.error(errorMessage);
      }
    },
    [document?.content, id, update],
  );

  const editor = useEditor({
    extensions,
    immediatelyRender: false,
    onUpdate: handleOnEditorUpdate,
  });

  React.useEffect(() => {
    if (!editor || !document?.content) return;

    const editorState = JSON.stringify(editor.getJSON());

    if (document?.content === editorState) return;

    requestAnimationFrame(() => {
      editor.commands.setContent(JSON.parse(document.content));
    });
  }, [editor, document?.content]);

  if (!editor || !document) {
    return null;
  }

  return (
    <>
      <DragHandler editor={editor} />

      <div className="fixed left-4 bottom-4">floating left docs menu</div>

      <Controller editor={editor} />

      <div className="fixed right-4 bottom-4">floating right content menu</div>

      <EditorContent editor={editor} contentEditable={false} />
    </>
  );
}

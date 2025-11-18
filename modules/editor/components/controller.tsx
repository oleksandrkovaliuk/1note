import {
  Bold,
  Italic,
  Strikethrough,
  CodeXml,
  List,
  ListOrdered,
  ListTodo,
} from "lucide-react";
import { ToggleGroup, ToggleGroupItem } from "@/shared/ui/toggle-group";

import { useEditorState, type Editor } from "@tiptap/react";
import { UserButton } from "@clerk/nextjs";

const Controller = ({ editor }: { editor: Editor }) => {
  const editorState = useEditorState({
    editor,
    selector: (ctx) => {
      return [
        {
          icon: Bold,
          key: "bold",
          active: ctx.editor.isActive("bold") ?? false,
          executor: () => ctx.editor.chain().focus().toggleBold().run(),
        },
        {
          icon: Italic,
          key: "italic",
          active: ctx.editor.isActive("italic") ?? false,
          executor: () => ctx.editor.chain().focus().toggleItalic().run(),
        },
        {
          icon: Strikethrough,
          key: "strike",
          active: ctx.editor.isActive("strike") ?? false,
          disabled: !ctx.editor.can().chain().toggleStrike().run(),
          executor: () => ctx.editor.chain().focus().toggleStrike().run(),
        },
        {
          icon: CodeXml,
          key: "code",
          active: ctx.editor.isActive("code") ?? false,
          executor: () => ctx.editor.chain().focus().toggleCode().run(),
        },
        {
          icon: List,
          key: "bulletList",
          active: ctx.editor.isActive("bulletList") ?? false,
          executor: () => ctx.editor.chain().focus().toggleBulletList().run(),
        },
        {
          icon: ListOrdered,
          key: "orderedList",
          active: ctx.editor.isActive("orderedList") ?? false,
          executor: () => ctx.editor.chain().focus().toggleOrderedList().run(),
        },
        {
          icon: ListTodo,
          key: "taskList",
          active: ctx.editor.isActive("taskList") ?? false,
          executor: () => ctx.editor.chain().focus().toggleTaskList().run(),
        },
      ];

      //     {
      //     isBold: ctx.editor.isActive("bold") ?? false,
      //     canBold: ctx.editor.can().chain().toggleBold().run() ?? false,
      //     isItalic: ctx.editor.isActive("italic") ?? false,
      //     canItalic: ctx.editor.can().chain().toggleItalic().run() ?? false,
      //     isStrike: ctx.editor.isActive("strike") ?? false,
      //     canStrike: ctx.editor.can().chain().toggleStrike().run() ?? false,
      //     isCode: ctx.editor.isActive("code") ?? false,
      //     canCode: ctx.editor.can().chain().toggleCode().run() ?? false,
      //     canClearMarks: ctx.editor.can().chain().unsetAllMarks().run() ?? false,
      //     isParagraph: ctx.editor.isActive("paragraph") ?? false,
      //     isHeading1: ctx.editor.isActive("heading", { level: 1 }) ?? false,
      //     isHeading2: ctx.editor.isActive("heading", { level: 2 }) ?? false,
      //     isHeading3: ctx.editor.isActive("heading", { level: 3 }) ?? false,
      //     isHeading4: ctx.editor.isActive("heading", { level: 4 }) ?? false,
      //     isHeading5: ctx.editor.isActive("heading", { level: 5 }) ?? false,
      //     isHeading6: ctx.editor.isActive("heading", { level: 6 }) ?? false,
      //     isBulletList: ctx.editor.isActive("bulletList") ?? false,
      //     isOrderedList: ctx.editor.isActive("orderedList") ?? false,
      //     isCodeBlock: ctx.editor.isActive("codeBlock") ?? false,
      //     isBlockquote: ctx.editor.isActive("blockquote") ?? false,
      //     canUndo: ctx.editor.can().chain().undo().run() ?? false,
      //     canRedo: ctx.editor.can().chain().redo().run() ?? false,
      //   }
    },
  });

  return (
    <div className="fixed z-1 bottom-4 left-1/2 -translate-x-1/2 bg-foreground/5 bg-filter-blur flex items-center gap-4 p-2 rounded-2xl">
      <ToggleGroup size="sm" type="multiple" variant="default">
        {editorState.map((item) => {
          return (
            <ToggleGroupItem
              key={item.key}
              value={item.key}
              onClick={item.executor}
              disabled={item.disabled}
              aria-label={`Toggle ${item.key}`}
              data-state={item.active ? "on" : "off"}
            >
              <item.icon className="h-4 w-4" />
            </ToggleGroupItem>
          );
        })}
      </ToggleGroup>

      <UserButton />
    </div>
  );
};

export { Controller };

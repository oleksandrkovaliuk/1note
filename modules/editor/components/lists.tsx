import * as React from "react";
import { TaskItem as TiptapTaskItem } from "@tiptap/extension-task-item";

import {
  NodeViewWrapper,
  NodeViewProps,
  ReactNodeViewRenderer,
} from "@tiptap/react";
import { Checkbox } from "@/shared/ui/checkbox";

const TaskItemComponent = (props: NodeViewProps) => {
  const { node, updateAttributes, editor, HTMLAttributes } = props;
  const { checked } = node.attrs;

  React.useEffect(() => {
    console.log("CustomTaskItemComponent mounted:", node);
  }, [node]);

  const handleCheckedChange = (newChecked: boolean) => {
    if (!editor.isEditable) return;
    updateAttributes({ checked: newChecked });
  };

  return (
    <NodeViewWrapper
      as="li"
      data-type="taskItem"
      {...HTMLAttributes}
      data-checked={String(checked)}
    >
      <label contentEditable={false}>
        <Checkbox checked={checked} onCheckedChange={handleCheckedChange} />
      </label>

      <div data-node-view-content />
    </NodeViewWrapper>
  );
};

const TaskItem = TiptapTaskItem.extend({
  addNodeView() {
    return ReactNodeViewRenderer(TaskItemComponent);
  },
});

export { TaskItem };

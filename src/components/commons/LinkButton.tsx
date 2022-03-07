import { InlineIcon } from "@iconify/react-with-api";
import { useSlate } from "slate-react";
import { isMarkActive, activeMark } from "../utils/Functions";
import { insertLink } from "../utils/link";
import { Button } from ".";

const handleInsertLink = (editor) => {
  const url = prompt("Enter URL");
  insertLink(editor, url);
};

export const LinkButton = () => {
  const editor = useSlate();
  return (
    <Button
      active={isMarkActive(editor, "link")}
      title={"link"}
      onMouseDown={(e: MouseEvent) => {
        e.preventDefault();
        handleInsertLink(editor);
      }}
    >
      <InlineIcon icon="gridline:link" />
    </Button>
  );
};

import { InlineIcon } from "@iconify/react-with-api";
import { Editor } from "slate";
import { useSlate } from "slate-react";
import { Button } from "./Button";
import { isMarkActive, toggleMark } from "../utils/Functions";

export const MarkButton = (props: any) => {
  const { format, icon } = props;
  const editor = useSlate();
  return (
    <Button
      active={isMarkActive(editor, format)}
      format={format}
      onMouseDown={(event: Event) => {
        event.preventDefault();
        toggleMark(editor, format);
      }}
    >
      <InlineIcon icon={icon} />
    </Button>
  );
};

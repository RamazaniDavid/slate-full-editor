import { useSlate } from "slate-react";
import { Button } from "./";
import { InlineIcon } from "@iconify/react-with-api";
import { isBlockActive, toggleBlock } from "../utils/Functions";

export const BlockButton = (props: any) => {
  const { format, icon } = props;
  const editor = useSlate();
  return (
    <Button
      active={isBlockActive(editor, format)}
      format={format}
      onMouseDown={(event: Event) => {
        event.preventDefault();
        toggleBlock(editor, format);
      }}
    >
      <InlineIcon icon={icon} />
    </Button>
  );
};

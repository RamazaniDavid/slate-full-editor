import { css } from "@emotion/css";
import { InlineIcon } from "@iconify/react-with-api";
import { Transforms } from "slate";
import {
  ReactEditor,
  useFocused,
  useSelected,
  useSlateStatic
} from "slate-react";
import { Button } from "../commons";

export const ImageElement = (props: any): JSX.Element => {
  const { attributes, children, element } = props;
  const editor = useSlateStatic();
  const path = ReactEditor.findPath(editor, element);

  const selected = useSelected();
  const focused = useFocused();
  return (
    <div {...attributes}>
      {children}
      <div
        contentEditable={false}
        className={css`
          position: relative;
        `}
      >
        <img
          src={element.url}
          alt={element.url}
          className={css`
            display: block;
            max-width: 100%;
            max-height: 20em;
            box-shadow: ${selected && focused ? "0 0 0 3px #B4D5FF" : "none"};
          `}
        />
        <Button
          active
          onClick={() => Transforms.removeNodes(editor, { at: path })}
          className={css`
            display: ${selected && focused ? "inline" : "none"};
            position: absolute;
            top: 5%;
            left: 5%;
            background-color: white;
          `}
        >
          <InlineIcon icon="gridicons:delete" />
        </Button>
      </div>
    </div>
  );
};

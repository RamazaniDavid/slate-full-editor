import { useState, useMemo, useCallback } from "react";
import { createEditor, Descendant } from "slate";
import { Slate, Editable, withReact } from "slate-react";
import { withHistory } from "slate-history";
import { EditorConfig } from "./utils/CustomTypes";

import { Element } from "./elements";
import { Leaf } from "./Leaf";
import { Toolbar } from "./toolbar";
import { withImages, withTables } from "./helpers";

import { onKeyDownHandler } from "./handlers";
import "./Editor.scss";

const initialValue: Descendant[] = [
  {
    type: "paragraph",
    children: [{ text: "" }]
  },
  {
    type: "table",
    children: [
      {
        type: "table-row",
        children: [
          {
            type: "table-cell",
            children: [{ text: "" }]
          },
          {
            type: "table-cell",
            children: [{ text: "Human", bold: true }]
          },
          {
            type: "table-cell",
            children: [{ text: "Dog", bold: true }]
          },
          {
            type: "table-cell",
            children: [{ text: "Cat", bold: true }]
          }
        ]
      },
      {
        type: "table-row",
        children: [
          {
            type: "table-cell",
            children: [{ text: "# of Feet", bold: true }]
          },
          {
            type: "table-cell",
            children: [{ text: "2" }]
          },
          {
            type: "table-cell",
            children: [{ text: "4" }]
          },
          {
            type: "table-cell",
            children: [{ text: "4" }]
          }
        ]
      },
      {
        type: "table-row",
        children: [
          {
            type: "table-cell",
            children: [{ text: "# of Lives", bold: true }]
          },
          {
            type: "table-cell",
            children: [{ text: "1" }]
          },
          {
            type: "table-cell",
            children: [{ text: "1" }]
          },
          {
            type: "table-cell",
            children: [{ text: "9" }]
          }
        ]
      }
    ]
  },
  {
    type: "paragraph",
    children: [
      {
        text:
          "In addition to nodes that contain editable text, you can also create other types of nodes, like images or videos."
      }
    ]
  },
  {
    type: "image",
    url: "https://source.unsplash.com/kFrdX5IeQzI",
    children: [{ text: "" }]
  },
  {
    type: "paragraph",
    children: [
      {
        text:
          "This example shows images in action. It features two ways to add images. You can either add an image via the toolbar icon above, or if you want in on a little secret, copy an image URL to your clipboard and paste it anywhere in the editor!"
      }
    ]
  },
  {
    type: "paragraph",
    children: [
      {
        text:
          "You can delete images with the cross in the top left. Try deleting this sheep:"
      }
    ]
  },
  {
    type: "image",
    url: "https://source.unsplash.com/zOwZKwZOZq8",
    children: [{ text: "" }]
  }
];

const FullEditor = (props: { config: EditorConfig }) => {
  const [value, setValue] = useState<Descendant[]>(initialValue);
  const editor = useMemo(
    () => withTables(withImages(withHistory(withReact(createEditor())))),
    []
  );

  const renderLeaf = useCallback((props) => <Leaf {...props} />, []);

  return (
    <>
      <Slate
        editor={editor}
        value={value}
        onChange={(value) => setValue(value)}
      >
        <div className="toolbar-container">
          <Toolbar />
        </div>
        <div className="editable-container">
          <Editable
            renderElement={(props) => <Element {...props} />}
            renderLeaf={renderLeaf}
            placeholder={props.config.placeholder?.text}
            spellCheck
            autoFocus
            onKeyDown={(event) => {
              onKeyDownHandler(event, editor);
            }}
          />
        </div>
      </Slate>
    </>
  );
};

export default FullEditor;

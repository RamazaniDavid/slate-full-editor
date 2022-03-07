import { useSlate } from "slate-react";
import {
  BlockButton,
  Dropdown,
  EmbedButton,
  InTableButton,
  LinkButton,
  MarkButton,
  TableButton
} from "../commons";
import "./Toolbar.scss";
import { defaultToolbarGroups } from "./ToolbarGroup";
import { ColorPicker } from "../commons/ColorPicker";
import { useTable } from "../utils/useTable";
import React, { useEffect, useState } from "react";

export const Toolbar = () => {
  const editor = useSlate();
  const isTable = useTable(editor);
  const [toolbarGroups, setToolbarGroups] = useState(defaultToolbarGroups);

  useEffect(() => {
    let filteredGroups = [...defaultToolbarGroups];
    if (isTable) {
      filteredGroups = toolbarGroups.filter((grp) =>
        grp.items?.every((item) => item.type !== "block")
      );
      filteredGroups = filteredGroups.filter((elem) => elem.items?.length);
    }
    setToolbarGroups(filteredGroups);

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isTable]);

  return (
    <div className="toolbar">
      {/* <InsertImageButton /> */}
      {toolbarGroups.map((group, i) => (
        <span key={i} className="toolbar-grp">
          {group.items?.map((item, i) => {
            switch (item.type) {
              case "block":
                return <BlockButton key={i} {...item} />;
              case "mark":
                return <MarkButton key={i} {...item} />;
              case "dropdown":
                return <Dropdown key={i} {...item} />;
              case "link":
                return (
                  <LinkButton
                    key={i}
                    //active={isBlockActive(editor, "link")}
                    //editor={editor}
                  />
                );
              case "color-picker":
                return (
                  <ColorPicker
                    //activeMark={activeMark}
                    format={item.format}
                    icon={item.icon}
                    editor={editor}
                    key={i}
                  />
                );
              case "embed":
                return (
                  <EmbedButton key={i} format={item.format} editor={editor} />
                );
              case "table":
                return !isTable ? (
                  <TableButton key={i} editor={editor} />
                ) : (
                  <React.Fragment></React.Fragment>
                );
              case "inTable":
                return isTable ? (
                  <InTableButton key={i} editor={editor} />
                ) : null;
              default:
                return <button key={i}>Invalid Button</button>;
            }
          })}
        </span>
      ))}
    </div>
  );
};

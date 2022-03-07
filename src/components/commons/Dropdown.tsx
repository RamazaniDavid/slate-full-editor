import React from "react";
import { useSlate } from "slate-react";
import { DropdownOption } from "../utils/CustomTypes";
import { activeMark, addMarkData } from "../utils/Functions";

const changeMarkData = (event: any, format: string, editor: any) => {
  event.preventDefault();
  const value = event.target.value;
  addMarkData(editor, { format, value });
};

export const Dropdown = (props: any) => {
  const { format, data } = props;
  const editor = useSlate();

  return (
    <select
      value={activeMark(editor, format)}
      onChange={(e) => changeMarkData(e, format, editor)}
    >
      {data?.options?.map((item: DropdownOption) => (
        <React.Fragment key={item.value}>
          <option value={item.value}>{item.text}</option>
        </React.Fragment>
      ))}
    </select>
  );
};

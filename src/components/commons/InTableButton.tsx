import { InlineIcon } from "@iconify/react-with-api";
import React from "react";
import { Button } from ".";
import { TableUtil } from "../utils/table";

export const InTableButton = ({ editor }) => {
  const table = new TableUtil(editor);

  const handleButtonClick = (action) => {
    switch (action) {
      case "row":
        table.insertRow();
        break;
      case "column":
        table.insertColumn();
        break;
      case "remove":
        table.removeTable();
        break;
      default:
        return;
    }
  };
  return (
    <>
      <Button format="insert row" onClick={() => handleButtonClick("row")}>
        <InlineIcon icon="ci:add-row" />
      </Button>
      <Button
        format="insert column"
        onClick={() => handleButtonClick("column")}
      >
        <InlineIcon icon="ci:add-column" />
      </Button>
      <Button format="remove table" onClick={() => handleButtonClick("remove")}>
        <InlineIcon icon="mdi:table-remove" />
      </Button>
    </>
  );
};

export default InTableButton;

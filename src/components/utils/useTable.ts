import { useEffect, useState } from "react";
import { Editor, Element } from "slate";

export const useTable = (editor: any) => {
  const [isTable, setIsTable] = useState(false);
  useEffect(() => {
    const [tableNode] = Editor.nodes(editor, {
      match: (n) =>
        !Editor.isEditor(n) && Element.isElement(n) && n.type === "table"
    });

    setIsTable(!!tableNode);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [editor.selection]);

  return isTable;
};

export default useTable;

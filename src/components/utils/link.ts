import { Editor, Transforms, Path, Range, Element } from "slate";

export const createLinkNode = (href: string, text: string) => ({
  type: "link",
  href,
  children: [{ text }]
});

export const removeLink = (editor: any) => {
  Transforms.unwrapNodes(editor, {
    match: (n) =>
      !Editor.isEditor(n) && Element.isElement(n) && n.type === "link"
  });
};

export const insertLink = (editor: any, url: string) => {
  if (!url) return;

  const { selection } = editor;
  const link = createLinkNode(url, "Link");
  if (!!selection) {
    const [parent, parentPath] = Editor.parent(editor, selection.focus.path);
    if (parent.type === "link") {
      removeLink(editor);
    }

    //for image nodes, will be implemented later
    if (editor.isVoid(parent)) {
      Transforms.insertNodes(
        editor,
        { type: "paragraph", children: [link] },
        {
          at: Path.next(parentPath),
          select: true
        }
      );
    } else if (Range.isCollapsed(selection)) {
      Transforms.insertNodes(editor, link, { select: true });
    } else {
      Transforms.wrapNodes(editor, link, { split: true });
    }
  } else {
    Transforms.insertNodes(editor, { type: "paragraph", children: [link] });
  }
};

import {
  Text,
  createEditor,
  Node,
  Element,
  Editor,
  Descendant,
  BaseEditor
} from "slate";
import { ReactEditor } from "slate-react";
import { HistoryEditor } from "slate-history";

export interface BaseProps {
  className: string;
  [key: string]: unknown;
}
export type OrNull<T> = T | null;

export type BlockQuoteElement = { type: "block-quote"; children: Descendant[] };

export type BulletedListElement = {
  type: "bulleted-list";
  children: Descendant[];
};

export type CheckListItemElement = {
  type: "check-list-item";
  checked: boolean;
  children: Descendant[];
};

export type EditableVoidElement = {
  type: "editable-void";
  children: EmptyText[];
};

export type HeadingElement = { type: "heading"; children: Descendant[] };

export type HeadingTwoElement = { type: "heading-two"; children: Descendant[] };

export type ImageElement = {
  type: "image";
  url: string;
  children: EmptyText[];
};

export type LinkElement = { type: "link"; url: string; children: Descendant[] };

export type ButtonElement = { type: "button"; children: Descendant[] };

export type ListItemElement = { type: "list-item"; children: Descendant[] };

export type MentionElement = {
  type: "mention";
  character: string;
  children: CustomText[];
};

export type ParagraphElement = { type: "paragraph"; children: Descendant[] };

export type TableElement = { type: "table"; children: TableRow[] };

export type TableCellElement = { type: "table-cell"; children: CustomText[] };

export type TableRowElement = { type: "table-row"; children: TableCell[] };

export type TitleElement = { type: "title"; children: Descendant[] };

export type VideoElement = {
  type: "video";
  url: string;
  children: EmptyText[];
};

type CustomElement =
  | BlockQuoteElement
  | BulletedListElement
  | CheckListItemElement
  | EditableVoidElement
  | HeadingElement
  | HeadingTwoElement
  | ImageElement
  | LinkElement
  | ButtonElement
  | ListItemElement
  | MentionElement
  | ParagraphElement
  | TableElement
  | TableRowElement
  | TableCellElement
  | TitleElement
  | VideoElement;

export type CustomText = {
  bold?: boolean;
  italic?: boolean;
  code?: boolean;
  text: string;
};

export type EmptyText = {
  text: string;
};

export type CustomEditor = BaseEditor & ReactEditor & HistoryEditor;

export type EditorConfig = {
  placeholder?: {
    text: string;
    detail?: string | HTMLDivElement;
  };
};

declare module "slate" {
  interface CustomTypes {
    Editor: CustomEditor;
    Element: CustomElement;
    Text: CustomText | EmptyText;
  }
}

export type DropdownOption = { text: string; value: string; data?: any };

export type ToolbarItem = {
  type: string;
  format?: string;
  icon?: string;
  data?: {
    [key: string]: unknown;
    options: DropdownOption[];
  };
  element?: HTMLDivElement;
};

export type ToolbarGroupItem = {
  title?: string;
  items?: ToolbarItem[];
};

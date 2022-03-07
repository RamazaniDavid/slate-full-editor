import { ToolbarGroupItem } from "../utils/CustomTypes";

export const defaultToolbarGroups: ToolbarGroupItem[] = [
  {
    title: "Font-Family",
    items: [
      {
        format: "fontFamily",
        type: "dropdown",
        data: {
          options: [
            { text: "Sans Serif", value: "Helvetica,Arial, sans serif" },
            { text: "Serif", value: "Georgia, Times New Roaman,serif" },
            { text: "MonoSpace", value: "Monaco, Courier New,monospace" }
          ]
        }
      },
      {
        format: "fontSize",
        type: "dropdown",
        data: {
          options: [
            { text: "Small", value: "0.75em" },
            { text: "Normal", value: "1em" },
            { text: "Medium", value: "1.75em" },
            { text: "Huge", value: "2.5em" }
          ]
        }
      }
    ]
  },
  {
    title: "Text Style",
    items: [
      {
        format: "bold",
        type: "mark",
        icon: "fa-solid:bold"
      },
      {
        format: "italic",
        type: "mark",
        icon: "fa-solid:italic"
      },
      {
        format: "underline",
        type: "mark",
        icon: "fa-solid:underline"
      },
      {
        format: "strikethrough",
        type: "mark",
        icon: "fa-solid:strikethrough"
      }
    ]
  },
  {
    title: "Color",
    items: [
      {
        format: "color",
        type: "color-picker",
        icon: "bx:font-color"
      },
      {
        format: "bgColor",
        type: "color-picker",
        icon: "bxs:color-fill"
      }
    ]
  },
  {
    title: "script",
    items: [
      {
        format: "superscript",
        type: "mark",
        icon: "fa-solid:superscript"
      },
      {
        format: "subscript",
        type: "mark",
        icon: "fa-solid:subscript"
      }
    ]
  },
  {
    title: "Heading",
    items: [
      {
        format: "blockquote",
        type: "block",
        icon: "fa-solid:quote-left"
      },
      {
        format: "code",
        type: "block",
        icon: "fa-solid:code"
      },
      {
        format: "headingOne",
        type: "block",
        icon: "ci:heading-h1"
      },
      {
        format: "headingTwo",
        type: "block",
        icon: "ci:heading-h2"
      },
      {
        format: "headingThree",
        type: "block",
        icon: "ci:heading-h3"
      },
      {
        format: "headingFour",
        type: "block",
        icon: "ci:heading-h4"
      },
      {
        format: "headingFive",
        type: "block",
        icon: "ci:heading-h5"
      }
    ]
  },
  {
    title: "List",
    items: [
      {
        format: "orderedList",
        type: "block",
        icon: "cil:list-numbered"
      },
      {
        format: "unorderedList",
        type: "block",
        icon: "cil:list-rich"
      }
    ]
  },
  {
    title: "Align",
    items: [
      {
        format: "alignLeft",
        type: "block",
        icon: "bx:align-left"
      },
      {
        format: "alignCenter",
        type: "block",
        icon: "bx:align-middle"
      },
      {
        format: "alignRight",
        type: "block",
        icon: "bx:align-right"
      }
    ]
  },
  {
    title: "Embeded",
    items: [
      {
        format: "link",
        type: "link"
      },
      {
        format: "image",
        type: "embed"
      },
      {
        format: "video",
        type: "embed"
      }
    ]
  },
  {
    title: "Table",
    items: [
      {
        type: "table"
      },
      {
        type: "inTable"
      }
    ]
  }
];

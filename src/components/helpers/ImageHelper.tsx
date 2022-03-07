import { InlineIcon } from "@iconify/react-with-api";
import { Transforms } from "slate";
import { useSlateStatic } from "slate-react";
import { ImageElement } from "../utils/CustomTypes";
import { Button } from "../commons";
import imageExtensions from "image-extensions";
import isUrl from "is-url";

const insertImage = (editor: any, url: any) => {
  const text = { text: "" };
  const image: ImageElement = { type: "image", url, children: [text] };
  Transforms.insertNodes(editor, image);
};

const isImageUrl = (url: any) => {
  if (!url) return false;
  if (!isUrl(url)) return false;
  const ext = new URL(url).pathname.split(".").pop();
  return imageExtensions.includes(ext);
};

export const InsertImageButton = () => {
  const editor = useSlateStatic();
  return (
    <Button
      active={true}
      onMouseDown={(event: Event) => {
        event.preventDefault();
        const url = window.prompt("Enter the URL of the image:");
        if (url && !isImageUrl(url)) {
          alert("URL is not an image");
          return;
        }
        insertImage(editor, url);
      }}
    >
      <InlineIcon icon="gridicons:image" />
    </Button>
  );
};

export const withImages = (editor: any) => {
  const { insertData, isVoid } = editor;

  editor.isVoid = (element: any) => {
    return element.type === "image" ? true : isVoid(element);
  };

  editor.insertData = (data: any) => {
    const text = data.getData("text/plain");
    const { files } = data;

    if (files && files.length > 0) {
      for (const file of files) {
        const reader = new FileReader();
        const [mime] = file.type.split("/");

        if (mime === "image") {
          reader.addEventListener("load", () => {
            const url = reader.result;
            insertImage(editor, url);
          });

          reader.readAsDataURL(file);
        }
      }
    } else if (isImageUrl(text)) {
      insertImage(editor, text);
    } else {
      insertData(data);
    }
  };

  return editor;
};

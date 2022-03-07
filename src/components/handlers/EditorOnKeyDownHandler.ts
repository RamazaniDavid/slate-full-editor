import isHotkey from "is-hotkey";
import * as EditorConsts from "../utils/EditorConsts";
import { toggleBlock, toggleMark } from "../utils/Functions";

export const onKeyDownHandler = (event: any, editor: any) => {
  for (const hotkey in EditorConsts.HOTKEYS) {
    if (isHotkey(hotkey, event as any)) {
      event.preventDefault();
      const mark = EditorConsts.HOTKEYS[hotkey];
      toggleMark(editor, mark);
    }
  }
  for (const hotkey in EditorConsts.BLOCK_HOTKEYS) {
    if (isHotkey(hotkey, event as any)) {
      event.preventDefault();
      const mark = EditorConsts.BLOCK_HOTKEYS[hotkey];
      toggleBlock(editor, mark);
    }
  }
};

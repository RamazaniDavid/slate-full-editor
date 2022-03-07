import React, { useRef, useState } from "react";
import { Button } from ".";
import { isBlockActive } from "../utils/Functions";
import usePopup from "../utils/usePopup";
import { insertEmbed } from "../utils/embed";
import { InlineIcon } from "@iconify/react-with-api";

export const EmbedButton = ({ editor, format }) => {
  const urlInputRef = useRef();
  const [showInput, setShowInput] = usePopup(urlInputRef);
  const [formData, setFormData] = useState({
    url: "",
    width: "",
    height: ""
  });
  const handleButtonClick = (e) => {
    e.preventDefault();
    setShowInput((prev) => !prev);
  };
  const handleFormSubmit = (e) => {
    e.preventDefault();
    insertEmbed(editor, { ...formData }, format);
    setShowInput(false);
    setFormData({
      url: "",
      width: "",
      height: ""
    });
  };
  return (
    <>
      <div ref={urlInputRef} className="popup-wrapper">
        <span
          style={{
            border: showInput ? "1px solid lightgray" : "",
            borderBottom: "none"
          }}
          onClick={handleButtonClick}
        >
          <InlineIcon
            icon={
              format === "video"
                ? "clarity:video-gallery-line"
                : "bxs:image-add"
            }
          />
        </span>
        {showInput && (
          <div className="popup">
            <form onSubmit={handleFormSubmit}>
              <input
                type="text"
                placeholder="Enter url"
                value={formData.url}
                onChange={(e) =>
                  setFormData((prev) => ({ ...prev, url: e.target.value }))
                }
              />
              <input
                type="text"
                placeholder="Enter width of frame"
                value={formData.width}
                onChange={(e) =>
                  setFormData((prev) => ({ ...prev, width: e.target.value }))
                }
              />
              <input
                type="text"
                placeholder="Enter height of frame"
                value={formData.height}
                onChange={(e) =>
                  setFormData((prev) => ({ ...prev, height: e.target.value }))
                }
              />

              <Button type="submit">Save</Button>
            </form>
          </div>
        )}
      </div>
    </>
  );
};

export default EmbedButton;

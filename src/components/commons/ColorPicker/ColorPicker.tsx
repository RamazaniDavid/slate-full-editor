import React, { useEffect, useRef, useState } from "react";
import "./ColorPicker.scss";
import { colors } from "./Consts";
import { Button } from "../";
import { addMarkData, activeMark } from "../../utils/Functions";
import { Transforms } from "slate";
import { InlineIcon } from "@iconify/react-with-api";

export const ColorPicker = ({ format, icon, editor }) => {
  const [showOptions, setShowOptions] = useState(false);
  const [selection, setSelection] = useState();
  const [hexValue, setHexValue] = useState("");
  const [validHex, setValidHex] = useState();
  const colorPickerRef = useRef();

  const isValideHexSix = new RegExp("^#[0-9A-Za-z]{6}");
  const isValideHexThree = new RegExp("^#[0-9A-Za-z]{3}");

  const handleDocumentClick = (e) => {
    const clickedComponent = e.target;
    if (!colorPickerRef?.current?.contains(clickedComponent)) {
      setShowOptions(false);
    }
  };
  const changeColor = (e) => {
    const clickedColor = e.target.getAttribute("data-value");
    selection && Transforms.select(editor, selection);

    addMarkData(editor, { format, value: clickedColor });
    setShowOptions(false);
  };
  const toggleOption = () => {
    setSelection(editor.selection);
    selection && Transforms.select(editor, selection);
    setShowOptions((prev) => !prev);
  };
  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (!validHex) return;
    selection && Transforms.select(editor, selection);

    addMarkData(editor, { format, value: hexValue });
    setShowOptions(false);
    setValidHex("");
    setHexValue("");
  };
  const handleHexChange = (e) => {
    e.preventDefault();
    const newHex = e.target.value;
    setValidHex(isValideHexSix.test(newHex) || isValideHexThree.test(newHex));
    setHexValue(newHex);
  };

  useEffect(() => {
    document.addEventListener("click", handleDocumentClick);
    return () => {
      document.removeEventListener("click", handleDocumentClick);
    };
  }, []);

  return (
    <div className="color-picker" ref={colorPickerRef}>
      <Button
        style={{
          color: showOptions ? "black" : activeMark(editor, format),
          opacity: "1"
        }}
        className={showOptions ? "clicked" : ""}
        onClick={toggleOption}
      >
        <InlineIcon icon={icon} />
      </Button>
      {showOptions && (
        <div className="color-options-wrapper">
          <div className="color-options">
            {colors.map((color, index) => {
              return (
                <div
                  key={index}
                  data-value={color}
                  onClick={changeColor}
                  className="option"
                  style={{ background: color }}
                ></div>
              );
            })}
          </div>
          <p style={{ textAlign: "center", opacity: "0.7", width: "100%" }}>
            OR
          </p>
          <form onSubmit={handleFormSubmit}>
            <div
              className="hexPreview"
              style={{ background: validHex ? hexValue : "#000000" }}
            ></div>
            <input
              type="text"
              placeholder="#000000"
              value={hexValue}
              onChange={handleHexChange}
              style={{
                border:
                  validHex === false ? "1px solid red" : "1px solid lightgray"
              }}
            />
            <button style={{ color: validHex ? "green" : "" }} type={"submit"}>
              ok
            </button>
          </form>
        </div>
      )}
    </div>
  );
};

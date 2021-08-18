import React, { useState } from 'react';
import "../styles/editor.scss";
import { CirclePicker } from "react-color";
import DrawingPanel from './DrawingPanel';

const Editor = () => {
    const [panelWidth, setPanelWidth] = useState(16);
    const [panelHeight, setPanelHeight] = useState(16);
    const [hideOptions, setHideOptions] = useState(false);
    const [hideDrawingPanel, setHideDrawingPanel] = useState(true);
    const [buttonText, setButtonText] = useState("start drawing");
    const [selectedColor, setColor] = useState("#f44336");

    const initializeDrawingPanel = () => {
        setHideOptions(!hideOptions);
        setHideDrawingPanel(!hideDrawingPanel);

        buttonText === "start drawing" ? setButtonText("reset") : setButtonText("start drawing");
    }

    const changeColor = (color) => {
        setColor(color.hex);
    }

    return (
        <div id="editor">
            <h1>Pixel Editor</h1>
            {hideDrawingPanel && <h2>Enter Panel Dimensions</h2>}
            {hideDrawingPanel && (
                <div id="options">
                    {/* width */}
                    <div className="option">
                        <input
                            type="number"
                            className="panelInput"
                            defaultValue={panelWidth}
                            onChange={(e) => { setPanelWidth(e.target.value); }}
                        />
                        <span>Width</span>
                    </div>
                    {/* height */}
                    <div className="option">
                        <input
                            type="number"
                            className="panelInput"
                            defaultValue={panelHeight}
                            onChange={(e) => { setPanelHeight(e.target.value); }}
                        />
                        <span>Height</span>
                    </div>
                </div>)}

            {/* button */}
            <button
                className="button"
                onClick={initializeDrawingPanel}
            >
                {buttonText}
            </button>

            {hideOptions && (
                <CirclePicker color={selectedColor} onChangeComplete={changeColor} />
            )}

            {hideOptions && (
                <DrawingPanel
                    width={panelWidth}
                    height={panelHeight}
                    selectedColor={selectedColor}
                />
            )}
        </div>
    )
}

export default Editor;
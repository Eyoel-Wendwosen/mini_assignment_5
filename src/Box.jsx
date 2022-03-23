import React, { useState } from "react";
import './Box.css'

export default function Box(props) {
    let [isSelected, setIsSelected] = useState(false);

    function updateIsSelected() {
        let update = !isSelected ? 1 : -1;
        setIsSelected(!isSelected);
        props.onSelect(update)
    }

    return (
        <div id="box" onClick={updateIsSelected} className={isSelected ? "black": "white"}>
        </div>
    );
}
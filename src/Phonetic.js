import React from "react";
import "./Phonetic.css";

export default function Phonetic(props) {
console.log(props.phonetic);
return (
    <div className="Phonetic">
    <em>{props.phonetic.text}</em>
    <a href={props.phonetic.audio} target="_blank">Listen</a>
    </div>
    )
}
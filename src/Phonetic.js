import React from "react";

export default function Phonetic(props) {
console.log(props.phonetic);
return (
    <div className="Phonetic">
    <em>{props.phonetic.text}</em>
    <br />
    <a href={props.phonetic.audio} target="_blank">Listen</a>
    </div>
    )
}
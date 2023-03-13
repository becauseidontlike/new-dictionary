import React, { useState } from "react";
import "./Dictionary.css";

export default function Dictionary() {
let [keyword, setKeyword] = useState("");

function search(event) {
    event.preventDefault();
    alert(`Searching for ${keyword} definition`);
}

function handleKeyword(event) {
    console.log(event.target.value);
    setKeyword(event.target.value);
}
    return (
        <div className="Dictionary">
            <form onSubmit={search}>
                <input type="search" autoFocus={true} onChange={handleKeyword} />
               
            </form>
        </div>
    )
}
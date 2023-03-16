import React, { useState } from "react";
import axios from "axios";
import Result from "./Result";
import "./Dictionary.css";

export default function Dictionary() {
let [keyword, setKeyword] = useState("");
let [results, setResults] = useState(null);

function handleResponse(response) {
console.log(response.data[0]);
console.log(response.data[0].meanings[0].definitions[0].definition);
setResults(response.data[0]);
}

function search(event) {
    event.preventDefault();
    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${keyword}`;
    axios.get(apiUrl).then(handleResponse);
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
            <Result results={results} />
        </div>
    )
}
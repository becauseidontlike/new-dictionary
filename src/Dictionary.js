import React, { useState } from "react";
import axios from "axios";
import Result from "./Result";
import "./Dictionary.css";

export default function Dictionary(props) {
let [keyword, setKeyword] = useState(props.default);
let [results, setResults] = useState(null);
let [loaded, setLoaded] = useState(false);

function handleResponse(response) {
console.log(response.data[0]);
console.log(response.data[0].meanings[0].definitions[0].definition);
setResults(response.data[0]);
}

function search() {
    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${keyword}`;
    axios.get(apiUrl).then(handleResponse);

    let pexelsApikey= "fmKiQNIw53wLZE2sywuJV8HWwJwMTm0HOm8KFLmrDlulrmJSRQBPGxGf";
    let pexelsApiurl = `https://api.pexels.com/v1/search?query=${keyword}&per_page=1`; 
}

function handleSubmit(event) {
    event.preventDefault();
    search();
}

function handleKeyword(event) {
    setKeyword(event.target.value);
}

function load() {
setLoaded(true);
search();
}

if (loaded) {
    return (
        <div className="Dictionary">
            <section className="searchEngine">
            <form onSubmit={handleSubmit}>
                <input type="search" autoFocus={true} onChange={handleKeyword} defaultValue={props.default} />
            </form>
            <div className="hint">
                What are you looking for today?
            </div>
            </section>
            <Result results={results} />
        </div>
    )
} else {
    load();
    return null;
}}
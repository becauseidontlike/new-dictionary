import React from "react";
import Synonyms from "./Synonyms";
import "./Meaning.css";

export default function Meaning(props) {
    console.log(props.meaning);
    return (
    <div className="Meaning">
        <h3>{props.meaning.partOfSpeech}</h3>
        {props.meaning.definitions.map(function(definition, index){
            return (
                <div key={index}>
                <span className="definition">{definition.definition}</span> 
                <br />
                <strong>Example:</strong> <span className="example">{definition.example}</span>
                <br />
                <Synonyms synonyms={definition.synonyms} />
                <br />
                </div>
            )
        })}
    </div>
    )
}
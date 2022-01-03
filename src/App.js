import "./App.css";

import { useState, useEffect, useRef } from "react";

import InputBox from "./InputBox";
import OutputBox from "./OutputBox";

const languages = ["javascript", "html", "css"];

const App = () => {
    const [inputCode, setInput] = useState("");
    const [proceed, setProceed] = useState(false);
    const [editorLanguage, setEditorLanguage] = useState("javascript");

    useEffect(() => setProceed(false), [inputCode]);
    return (
        <div>
            <h1>NotIndent - the negative indenter</h1>
            <fieldset>
                <legend>Choose language:</legend>

                {languages.map((lang) => (
                    <span>
                        <input
                            type="radio"
                            id={lang}
                            name="language"
                            value={lang}
                            checked={editorLanguage === lang}
                            onChange={() => setEditorLanguage(lang)}
                        />
                        <label htmlFor={lang}>{lang}</label>
                    </span>
                ))}
            </fieldset>

            <center>
                <button onClick={() => setProceed(true)}>notIndet...?</button>
            </center>
            <div className="editor">
                <div style={{ margin: "1vw" }}>
                    <InputBox
                        setState={proceed ? setInput : null}
                        lang={editorLanguage}
                    />
                </div>
                <div style={{ margin: "1vw" }}>
                    <OutputBox code={inputCode} lang={editorLanguage} />
                </div>
            </div>
        </div>
    );
};
export default App;

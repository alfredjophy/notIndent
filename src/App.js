import "./App.css";

import { useState, useEffect, useRef } from "react";

import InputBox from "./InputBox";
import OutputBox from "./OutputBox";

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
                <input
                    type="radio"
                    id="javascript"
                    name="language"
                    value="javascript"
                    checked={editorLanguage === "javascript"}
                    onChange={() => setEditorLanguage("javascript")}
                />
                <label htmlFor="javascript">JavaScript</label>
            </fieldset>

            <center>
                <button onClick={() => setProceed(true)}>notIndet...?</button>
            </center>
            <div className="editor">
                <InputBox
                    setState={proceed ? setInput : null}
                    lang={editorLanguage}
                />
                <OutputBox code={inputCode} lang={editorLanguage} />
            </div>
        </div>
    );
};
export default App;

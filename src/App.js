import "./App.css";

import { useState, useEffect, useRef } from "react";

import InputBox from "./InputBox";
import OutputBox from "./OutputBox";

const App = () => {
    const [inputCode, setInput] = useState("");
    const [proceed, setProceed] = useState(false);

    useEffect(() => setProceed(false), [inputCode]);
    return (
        <div>
            <h1>NotIndent - the negative indenter</h1>
            <button onClick={() => setProceed(true)}>notIndet...?</button>
            <InputBox setState={proceed ? setInput : null} />
            <OutputBox code={inputCode} />
        </div>
    );
};
export default App;

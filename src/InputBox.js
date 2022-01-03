import { useState, useEffect } from "react";

import Editor from "./editor";

const InputBox = (props) => {
    const [code, setCode] = useState("");
    useEffect(() => {
        if (props.setState != null) props.setState(code);
    }, [code, props.setState]);
    return <Editor lang="javascript" setState={setCode} value={code} />;
};

export default InputBox;

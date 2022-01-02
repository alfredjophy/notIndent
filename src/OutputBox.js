import { useRef, useEffect, useState } from "react";
import prettier from "prettier";
import parserBabel from "prettier/parser-babel";

import SyntaxHighlighter from "react-syntax-highlighter";
import { atomOneDark } from "react-syntax-highlighter/dist/esm/styles/hljs";

import not_indent from "./notindent";

const OutputBox = (props) => {
    const output = useRef();
    const [codeString, setCode] = useState("");
    useEffect(() => {
        if (!props.code) return;
        let formattedCode;
        try {
            formattedCode = prettier.format(props.code, {
                parser: "babel",
                plugins: [parserBabel],
                tabWidth: 4,
            });
        } catch (error) {
            alert(error + "\n" + "!!!!Seriously, fix your code first..");
            return;
        }
        const notIndentedCode = not_indent(formattedCode);
        setCode(notIndentedCode);
    }, [props.code]);

    return (
        <div style={{ width: "45vw", height: "65vh" }}>
            <SyntaxHighlighter language={props.lang} style={atomOneDark}>
                {codeString}
            </SyntaxHighlighter>
        </div>
    );
};

export default OutputBox;

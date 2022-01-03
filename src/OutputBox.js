import { useRef, useEffect, useState } from "react";

import prettier from "prettier";
import parserBabel from "prettier/parser-babel";
import parserHtml from "prettier/parser-html";
import parserCss from "prettier/parser-postcss";

import Editor from "./editor";

import not_indent from "./notindent";

const getOptions = (lang) => {
    if (lang == "javascript") return ["babel", parserBabel];
    else if (lang == "html") return ["html", parserHtml];
    else if (lang == "css") return ["css", parserCss];
};

const OutputBox = (props) => {
    const output = useRef();
    const [codeString, setCode] = useState("");
    useEffect(() => {
        if (!props.code) return;
        let formattedCode;
        try {
            const options = getOptions(props.lang);
            formattedCode = prettier.format(props.code, {
                parser: options[0],
                plugins: [options[1]],
                tabWidth: 4,
            });
        } catch (error) {
            alert(error);
            return;
        }
        const notIndentedCode = not_indent(formattedCode);
        setCode(notIndentedCode);
        console.log("done");
    }, [props.code]);

    return <Editor lang={props.lang} readOnly={true} value={codeString} />;
};

export default OutputBox;

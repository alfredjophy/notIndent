import { useRef, useEffect } from "react";
import prettier from "prettier";
import parserBabel from "prettier/parser-babel";

import not_indent from "./notindent";

const OutputBox = (props) => {
    const output = useRef();
    useEffect(() => {
        const formattedCode = prettier.format(props.code, {
            parser: "babel",
            plugins: [parserBabel],
            tabWidth: 4,
        });
        const notIndentedCode = not_indent(formattedCode);
        output.current.value = notIndentedCode;
    }, [props.code]);

    return (
        <div>
            <textarea ref={output} />
        </div>
    );
};

export default OutputBox;

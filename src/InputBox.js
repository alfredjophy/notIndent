import { useEffect, useRef } from "react";

const InputBox = (props) => {
    const input = useRef();
    useEffect(() => props.setState && props.setState(input.current.value));
    return (
        <pre>
            <code>
                <textarea
                    style={{ width: "45vw", height: "65vh" }}
                    ref={input}
                />
            </code>
        </pre>
    );
};

export default InputBox;

import { useEffect, useRef } from "react";

const InputBox = (props) => {
    const input = useRef();
    useEffect(() => props.setState && props.setState(input.current.value));
    return (
        <div>
            <textarea ref={input} />
        </div>
    );
};

export default InputBox;

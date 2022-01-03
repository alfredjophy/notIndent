import AceEditor from "react-ace";

import "ace-builds/src-noconflict/mode-javascript";
import "ace-builds/src-noconflict/mode-html";
import "ace-builds/src-noconflict/mode-css";

import "ace-builds/src-noconflict/theme-one_dark";

const Editor = (props) => {
    return (
        <AceEditor
            mode={props.lang}
            theme="one_dark"
            onChange={(e) => props.setState && props.setState(e)}
            name="InputBox"
            editorProps={{ $blockScrolling: true }}
            height="70vh"
            width="45vw"
            fontSize="16px"
            value={props.value ? props.value : ""}
            readOnly={props.readOnly ? props.readOnly : false}
            showPrintMargin={false}
        />
    );
};

export default Editor;

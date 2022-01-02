const count_indent_spaces = (string) => {
    let count = 0;
    for (let i of string) {
        if (i != " ") return count;
        count++;
    }
};
const not_indent = (code) => {
    if (code == "") return;
    console.log(code);
    const lines = code.match(/[^\r\n]+/g);
    let maxIdent = 0;
    let line_info = [];
    for (let i of lines) {
        const indent = count_indent_spaces(i);
        line_info.push(indent);
        console.log(indent);
        if (indent > maxIdent) maxIdent = indent;
    }
    console.log(maxIdent);

    let notIndentedCode = "";
    for (let i = 0; i < lines.length; i++) {
        let newLine = lines[i];
        const newIndent = maxIdent - line_info[i];
        console.log(newIndent, line_info[i]);
        if (newIndent > line_info[i]) {
            newLine = " ".repeat(newIndent - line_info[i]) + newLine;
        } else if (newIndent < line_info[i]) {
            newLine = newLine.substring(line_info[i] - newIndent);
        }
        notIndentedCode = notIndentedCode + "\n" + newLine;
    }
    console.log(notIndentedCode);
    return notIndentedCode;
};

export default not_indent;

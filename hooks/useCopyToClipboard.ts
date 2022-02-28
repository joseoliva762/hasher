import { useState } from "react";
import { Copy } from "@models/copy.model";

const useCopyToClipboard = (): Copy => {
    const [ clipboard, setClipboard ] = useState('');

    const handleCopy = (text: string) => {
        setClipboard(text);
        navigator.clipboard
            .writeText(clipboard);
    }

    return {
        clipboard,
        handleCopy
    }
}

export default useCopyToClipboard;
import { useState } from "react";
import { Copy } from "@models/copy.model";
import copy from 'copy-to-clipboard';

const useCopyToClipboard = (): Copy => {
    const [ clipboard, setClipboard ] = useState('');

    const handleCopy = (text: string) => {
        setClipboard(text);
        copy(clipboard);
    }

    return {
        clipboard,
        handleCopy
    }
}

export default useCopyToClipboard;
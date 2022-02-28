import { ChangeEvent, useContext } from "react";
import AppContext from "@contexts/AppContext";
import Box from "@components/Box";
import useBcrypt from "@hooks/useBcrypt";

export default function Input() {
    const { state, setText } = useContext(AppContext);
    const { crypted, encode } = useBcrypt();

    const handleText = ({ target }: ChangeEvent<HTMLTextAreaElement>) => {
        const { value: text } = target;
        setText(text);
        encode();
    }

    return (
        <>
            <Box>
                <textarea 
                    name="text" 
                    id="text" 
                    placeholder="type here..."
                    className="border-2 border-hasher-gray h-full outline-none p-1 resize-none rounded w-full focus:border-hasher-blue"
                    onChange={handleText}
                />
            </Box>
        </>
    );
}
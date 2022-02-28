import { ChangeEvent, useContext, useEffect } from "react";
import AppContext from "@contexts/AppContext";
import Box from "@components/Box";
import useBcrypt from "@hooks/useBcrypt";

export default function Input() {
    const { state, setDecoded } = useContext(AppContext);
    const { encode } = useBcrypt();

    useEffect(encode, [state.decoded]);

    const handleText = ({ target }: ChangeEvent<HTMLTextAreaElement>) => {
        const { value: decoded } = target;
        setDecoded(`${decoded}`);
        console.log(state)
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
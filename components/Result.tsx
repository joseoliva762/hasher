import { useContext } from "react";
import Box from "@components/Box";
import AppContext from "@contexts/AppContext";
import useCopyToClipboard from "@hooks/useCopyToClipboard";

export default function Result() {
    const { state } = useContext(AppContext);
    const { handleCopy } = useCopyToClipboard();

    return (
        <>
            <Box>
                <div className="bg-white border-2 border-hasher-gray h-full outline-none p-1 relative resize-none rounded w-full hover:border-hasher-blue hover: cursor-pointer">
                    <p className="font-bold h-full  overflow-auto w-full">
                        {state.crypted}
                    </p>
                </div>
                <button 
                    className="bg-hasher-blue font-bold h-14 p-1 rounded text-base text-white w-full hover:opacity-80 active:brightness-90"
                    onClick={() => handleCopy(state.crypted)}>
                    Copy!
                </button>
            </Box>
        </>
    );
}
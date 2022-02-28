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
                <div className="border-2 border-hasher-gray h-full outline-none p-1 relative resize-none rounded w-full hover:border-hasher-blue hover: cursor-pointer">
                    <p className="font-bold h-full overflow-auto text-ellipsis w-full">
                        {state.crypted}
                    </p>
                    <button 
                        className="absolute bg-transparent font-bold inset-0 h-full text-base text-transparent w-full hover:bg-hasher-blue hover:text-white active:brightness-90"
                        onClick={() => handleCopy(state.crypted)}>
                        Copy!
                    </button>
                </div>
            </Box>
        </>
    );
}
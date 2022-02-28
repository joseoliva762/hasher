import { useContext } from "react";
import Box from "@components/Box";
import AppContext from "@contexts/AppContext";
import useCopyToClipboard from "@hooks/useCopyToClipboard";

interface ResultParams {
    show: 'crypted' | 'decrypted'
}

export default function Result({ show }: ResultParams) {
    const { state } = useContext(AppContext);
    const { handleCopy } = useCopyToClipboard();

    return (
        <>
            <Box>
                <div className="bg-white border-2 border-hasher-gray h-full max-h-48 outline-none p-1 relative resize-none rounded w-full hover:border-hasher-blue hover: cursor-pointer">
                    <p className="font-bold h-full  overflow-auto w-full">
                        {show === 'crypted' ? state.crypted : state.decoded}
                    </p>
                </div>
                <button 
                    className="bg-hasher-blue font-bold h-full max-h-14 outline-none p-1 rounded text-base text-white w-full hover:opacity-80 active:brightness-90"
                    onClick={() => handleCopy(show === 'crypted' ? state.crypted : state.decoded)}>
                    Copy!
                </button>
            </Box>
        </>
    );
}
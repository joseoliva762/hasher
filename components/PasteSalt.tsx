import { useContext, useEffect } from "react";
import AppContext from "@contexts/AppContext";

export default function PasteSalt() {
    const { state, setSalt } = useContext(AppContext);
    let inputRef!: HTMLInputElement ;
    
    useEffect(() => {
        inputRef.value = state.salt;
    }, []);
    useEffect(() => {
        inputRef.value = state.salt;
    }, [state.salt]);

    const handleFocus = () => inputRef.focus();
    const handleSalt = () => setSalt(`${inputRef.value}`);

    return (
        <>  
            <p className="flex mb-1 px-1 text-hasher-gray text-sm w-full">Copy or paste the salt here</p>
            <div 
                className="bg-white border-2 border-hasher-blue flex gap-2 h-14 items-center justify-start p-2 rounded w-full"
                onClick={handleFocus}>
                <p className="grid font-bold h-full place-content-center text-md text-hasher-gray hover:text-black hover:cursor-pointer">
                        Salt
                    </p>
                <input
                    className="font-bold bg-white h-full outline-none w-full read-only:cursor-not-allowed" 
                    type="text"
                    placeholder="Prxvw0BbvT8q8dtQ"
                    ref={(input) => inputRef = input as HTMLInputElement}
                    onChange={handleSalt}
                    readOnly={!!state.crypted}
                />
            </div>
        </>
    );
}
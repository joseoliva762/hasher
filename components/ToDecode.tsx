import AppContext from "@contexts/AppContext";
import useBcrypt from "@hooks/useBcrypt";
import { useContext, useEffect } from "react";

export default function ToDecode() {
    const { state, setCrypted } = useContext(AppContext);
    const { decode } = useBcrypt();
    let inputRef!: HTMLInputElement;

    useEffect(() => {
        decode();
    }, [state.crypted])

    const handleInput = () => {
        const { value: text } = inputRef;
        if (text.includes(' ')) {
            inputRef.value = text.replaceAll(' ', '');
        }
        setCrypted(inputRef.value);
    }

    return (
        <>
            <input 
                className='border-2 border-hasher-gray h-14 outline-none p-2 rounded w-full active:border-hasher-blue hover:border-hasher-blue' 
                type='text'
                ref={(input) => inputRef = input as HTMLInputElement}
                placeholder='Type here...'
                onChange={handleInput}
            />
        </>
    );
}
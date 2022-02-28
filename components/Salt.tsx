import AppContext from "@contexts/AppContext";
import useBcrypt from "@hooks/useBcrypt";
import useCopyToClipboard from "@hooks/useCopyToClipboard";
import { ChangeEvent, ReactNode, useContext, useEffect } from "react";

const MAXSALT = 131072;

interface SaltContentParams {
    children: ReactNode
}

const SaltContent = ({ children }: SaltContentParams) => {
    return (
        <>
            <div className="flex gap-1 h-14 items-center justify-start w-full">
                {children}
            </div>  
        </>
    );
}

export default function Salt() {
    const { state, setSaltRounds } = useContext(AppContext);
    const { generateSalt } = useBcrypt();
    const { handleCopy } = useCopyToClipboard();
    let inputRef!: HTMLInputElement;

    useEffect(() => {
        inputRef.value = `${state.saltRounds}`;
    }, []);

    const handleSaltRounds = ({ target }: ChangeEvent<HTMLInputElement>) => {
        let rounds = parseInt(target.value) || 16;
        if (rounds > MAXSALT) {
            rounds = MAXSALT
            inputRef.value = rounds.toString();
        }
        setSaltRounds(rounds);
    }

    const handleFocus = () => {
        inputRef.focus();
    }

    return (
        <>
            <section className="flex flex-col gap-1 items-start justify-start px-2 py-1 w-full">
                <SaltContent>
                    <div className="bg-white border-2 border-hasher-blue flex gap-2 h-full items-center justify-start p-2 rounded w-full">
                        <p 
                            className="font-bold text-hasher-gray text-base hover:cursor-pointer hover:text-black"
                            onClick={handleFocus}>
                            Rounds
                        </p>
                        <input 
                            className="border-0 font-bold h-full outline-none text-black text-base w-full"
                            type="number" 
                            name="slatRounds" 
                            id="slatRounds"
                            placeholder="16"
                            onChange={handleSaltRounds}
                            ref={(input) => inputRef = input as HTMLInputElement}
                        />
                    </div>
                    <button 
                        className="bg-hasher-blue cursor-pointer font-bold text-base h-full rounded text-white w-40 z-0 hover:opacity-80 disabled:cursor-not-allowed active:brightness-90"
                        disabled={!state.saltRounds}
                        onClick={generateSalt}>
                        Salt
                    </button>
                </SaltContent>
                { !!state.salt && !!state.saltRounds && <>
                    <SaltContent>
                        <div className="bg-white border-2 border-hasher-blue flex gap-2 h-full items-center justify-start p-2 relative rounded w-full">
                            <p className="cursor-default font-bold text-hasher-gray text-base">Salt</p>
                            <p className="font-bold max-w-hasher-elipsis overflow-hidden text-black text-base text-ellipsis whitespace-nowrap w-full">{state.salt}</p>
                            <button 
                                className="absolute bg-transparent font-bold inset-0 h-full outline-none text-base text-transparent w-full hover:bg-hasher-blue hover:text-white active:brightness-90"
                                onClick={() => handleCopy(state.salt)}>
                                Copy!
                            </button>
                        </div>
                    </SaltContent>                
                </>}
            </section>
        </>
    );
}
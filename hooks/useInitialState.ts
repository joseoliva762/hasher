import { StateContext } from "@models/state.model";
import { useState } from "react";

const initialState = {
    text: '',
    salt: '',
    saltRounds: 0,
    crypted: ''
};

const useInitialState = (): StateContext => {
    const [state, setState] = useState(initialState);

    const setText = (text: string): void => setState({ ...state, text });
    const setSalt = (salt: string): void => setState({ ...state, salt });
    const setSaltRounds = (saltRounds: number): void => setState({ ...state, saltRounds });
    const setCrypted = (crypted: string): void => setState({ ...state, crypted });

    return {
        state,
        setText,
        setSalt,
        setSaltRounds,
        setCrypted
    }
}

export default useInitialState;
import { StateContext } from "@models/state.model";
import { useState } from "react";

const initialState = {
    decoded: '',
    salt: '',
    saltRounds: 0,
    crypted: '',
    base: ''
};

const useInitialState = (): StateContext => {
    const [state, setState] = useState(initialState);

    const setDecoded = (decoded: string): void => setState({ ...state, decoded });
    const setSalt = (salt: string): void => setState({ ...state, salt });
    const setSaltRounds = (saltRounds: number): void => setState({ ...state, saltRounds });
    const setCrypted = (crypted: string): void => setState({ ...state, crypted });
    const setBase = (base: string): void => setState({ ...state, base });

    return {
        state,
        setDecoded,
        setSalt,
        setSaltRounds,
        setCrypted,
        setBase
    }
}

export default useInitialState;
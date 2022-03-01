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
    const setSaltRounds = (saltRounds: number): void => setState({ ...state, saltRounds });
    const setCrypted = (crypted: string): void => setState({ ...state, crypted });
    const setBase = (base: string): void => setState({ ...state, base });
    const clearState = (): void => {
        setState({
            decoded: '',
            salt: '',
            saltRounds: 0,
            crypted: '',
            base: ''
        });
        console.log(state)
    }
    const setSalt = (salt: string): void => {
        if (!salt) return clearState();
        setState({ ...state, salt });
    }

    return {
        state,
        setDecoded,
        setSalt,
        setSaltRounds,
        setCrypted,
        setBase,
        clearState
    }
}

export default useInitialState;
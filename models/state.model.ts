export type VoidFunc = () => void;

export interface State {
    text: string,
    salt: string,
    saltRounds: number,
    crypted: string
}

export interface StateContext {
    state: State;
    setText: (text: string) => void,
    setSalt: (salt: string) => void,
    setSaltRounds: (saltRounds: number) => void,
    setCrypted: (crypted: string) => void
}
export type VoidFunc = () => void;

export interface State {
    decoded: string,
    salt: string,
    saltRounds: number,
    crypted: string,
    base: string
}

export interface StateContext {
    state: State;
    setDecoded: (decoded: string) => void,
    setSalt: (salt: string) => void,
    setSaltRounds: (saltRounds: number) => void,
    setCrypted: (crypted: string) => void
    setBase: (base: string) => void
}
export interface Bcrypted {
    crypted: string,
    encode: () => void,
    decode: () => void,
    generateSalt: () => void
}
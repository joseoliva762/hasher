export interface Bcrypted {
    crypted: string,
    encode: () => void,
    generateSalt: () => void
}
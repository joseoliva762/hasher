import { useContext, useEffect } from "react";
import { Bcrypted } from "@models/bcrypt.model";
import AppContext from "@contexts/AppContext";
import { AES, enc } from 'crypto-js';
import { randomBytes } from "crypto";


const useBcrypt = (): Bcrypted => {
    const { 
        state, 
        setSalt, 
        setCrypted, 
        setDecoded 
    } = useContext(AppContext);

    const encode = (): void => {
        const { decoded, salt } = state;
        const hash = AES.encrypt(`${decoded}`, salt).toString();
        setCrypted(hash);
    }

    const decode = (): void => {
        const { crypted, salt } = state;
        const text = AES.decrypt(crypted, salt).toString(enc.Utf8);
        setDecoded(text);
    }

    const generateSalt = (): void => {
        const { saltRounds } = state;
        const salt = randomBytes(saltRounds || 16).toString('base64');
        const canEncode = !!state.salt && !!state.decoded;
        console.log(state)
        setSalt(salt);
        canEncode && encode();
    }

    return {
        crypted: state.crypted,
        encode,
        generateSalt
    }
}

export default useBcrypt;
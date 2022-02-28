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
        setCrypted(decoded ? hash : '');
    }

    const decode = (): void => {
        const { crypted, salt } = state;
        if (!crypted || !salt) return;
        try {
            const text = AES.decrypt(crypted, salt).toString(enc.Utf8);
            setDecoded(text);
        } catch (err) {
            console.error(err);
        }
    }

    const generateSalt = (): void => {
        const canGenerateSalt = !state.decoded;
        if (!canGenerateSalt) return;
        const { saltRounds } = state;
        const salt = randomBytes(saltRounds || 16).toString('base64');
        setSalt(salt);
    }

    return {
        crypted: state.crypted,
        encode,
        decode,
        generateSalt
    }
}

export default useBcrypt;
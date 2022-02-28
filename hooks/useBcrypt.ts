import { useContext } from "react";
import { Bcrypted } from "@models/bcrypt.model";
import AppContext from "@contexts/AppContext";
import { AES, enc } from 'crypto-js';
import { randomBytes } from "crypto";


const useBcrypt = (): Bcrypted => {
    const { 
        state, 
        setSalt, 
        setCrypted, 
        setText 
    } = useContext(AppContext);

    const encode = (): void => {
        const { text, salt } = state;
        const hash = AES.encrypt(text, salt).toString();
        setCrypted(hash);
    }

    const decode = (): void => {
        const { crypted, salt } = state;
        const text = AES.decrypt(crypted, salt).toString(enc.Utf8);
        setText(text);
    }

    const generateSalt = (): void => {
        const { saltRounds } = state;
        console.log(saltRounds)
        const salt = randomBytes(saltRounds || 16).toString('base64');
        setSalt(salt);
        state.salt && encode();
    }

    return {
        crypted: state.crypted,
        encode,
        generateSalt
    }
}

export default useBcrypt;
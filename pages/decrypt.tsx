import { useContext } from "react";
import { NextPage } from "next";
import Head from 'next/head';
import AppContext from "@contexts/AppContext";
import Container from "@containers/Container";
import Subtitle from "@components/Subtitle";
import PasteSalt from "@components/PasteSalt";
import ToDecode from "@components/ToDecode";
import Result from "@components/Result";

const Decrypt: NextPage = () => {
    const { state } = useContext(AppContext);

    return (
      <>
        <Head>
          <title>Hasher - Decrypt</title>
        </Head>
        <Container>
            <div className="p-2 w-full">
                <Subtitle subtitle='Decrypt' classname="px-1 w-full" />
                <PasteSalt />
            </div>
            {!!state.salt && <>
                <div className="p-2 w-full">
                    <Subtitle subtitle='Type to decode' classname="px-1 w-full" />
                    <ToDecode />
                </div>
                <Subtitle subtitle='Decoded' classname="px-2 w-full" />
                <Result show="decrypted" />
            </>}
        </Container>  
      </>
    );
}
  

export default Decrypt;
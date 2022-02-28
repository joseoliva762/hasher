import { useContext, useEffect } from 'react';
import type { NextPage } from 'next';
import Head from 'next/head';

import Container from '@containers/Container';
import Salt from '@components/Salt';
import Input from '@components/Input';
import AppContext from '@contexts/AppContext';
import Subtitle from '@components/Subtitle';
import Result from '@components/Result';

const Home: NextPage = () => {
  const { state, setSalt } = useContext(AppContext);
  const canEncode = state.salt && state.saltRounds

  return (
    <>
      <Head>
        <title>Hasher - Encode</title>
      </Head>
      <Container>
        <div className="flex flex-col gap-1 items-center justify-start p-2 w-full">
          <Subtitle subtitle='Encode' classname="px-1 w-full" />
        </div>
        <Salt />
        {!!canEncode && <>
          <Subtitle subtitle='Type to encode' classname='mt-4 px-2 w-full' />
          <Input />
          <Subtitle subtitle='Encoded' classname='mt-4 px-2 w-full' />
          <Result show='crypted' />        
        </>}
      </Container>

    </>
  );
}

export default Home

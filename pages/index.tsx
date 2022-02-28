import { useContext } from 'react';
import type { NextPage } from 'next';
import Head from 'next/head';

import Container from '@containers/Container';
import Title from '@components/Title';
import Salt from '@components/Salt';
import Input from '@components/Input';
import AppContext from '@contexts/AppContext';
import SubTitle from '@components/Subtitle';
import Result from '@components/Result';

const Home: NextPage = () => {
  const { state } = useContext(AppContext);
  return (
    <>
      <Head>
        <title>Hasher - Home</title>
      </Head>
      <Container> 
        <Salt />
        {state.salt && <>
          <SubTitle subtitle='Type to encode' classname='mt-4 px-2 w-full' />
          <Input />
          <SubTitle subtitle='Encoded' classname='mt-4 px-2 w-full' />
          <Result />        
        </>}
      </Container>

    </>
  );
}

export default Home

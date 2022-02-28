import '../styles/globals.css'
import type { AppProps } from 'next/app'
import AppContext from '@contexts/AppContext'
import useInitialState from '@hooks/useInitialState'
import Header from '@containers/Header';
import Footer from '@containers/Footer';

function MyApp({ 
  Component: App, 
  pageProps 
}: AppProps) {
  const initialState = useInitialState();

  return (
    <>
      <AppContext.Provider value={initialState}>
        <div className='bg-shop-white min-h-screen flex flex-col mx-auto items-center'>
          <Header />
          <App {...pageProps} />
          <Footer />
        </div>
      </AppContext.Provider>    
    </>
  );
}

export default MyApp

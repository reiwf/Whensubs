import { Toaster } from 'react-hot-toast';
import { AppProps } from 'next/app';

export default function MyApp({ Component, pageProps }: AppProps) {
    return (
      <>
        <Component {...pageProps} />
        <Toaster position="bottom-right" reverseOrder={false} />
      </>
    );
  }

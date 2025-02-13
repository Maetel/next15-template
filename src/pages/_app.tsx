import '@/styles/globals.css';
import type { AppProps } from 'next/app';
import localFont from 'next/font/local';

const pretendard = localFont({
  src: '../fonts/PretendardVariable.woff2',
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div className={`page-container ${pretendard.className}`}>
      <Component {...pageProps} />
    </div>
  );
}

import type { AppProps } from 'next/app';
import ThemeProvider from '~/pages/theme';
import '~/styles/global.scss';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider>
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

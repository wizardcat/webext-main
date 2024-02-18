import type { AppProps } from 'next/app';
import '~/styles/global.scss';
import ThemeProvider from '~/styles/theme';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider>
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

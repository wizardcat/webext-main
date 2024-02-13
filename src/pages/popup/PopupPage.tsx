import { HashRouter as Router } from 'react-router-dom';

import ThemeProvider from '~/styles/theme';
import Routing from './routing';

export default function () {
  return (
    <ThemeProvider>
      <Router>
        <Routing />
      </Router>
    </ThemeProvider>
  );
}

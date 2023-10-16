// eslint-disable-next-line @typescript-eslint/no-unused-vars
import styles from './app.module.css';

import NxWelcome from './nx-welcome';
import { Products } from '@react-monorepo/products';

export function App() {
  return (
    <div>
      {/* <NxWelcome title="react-monorepo" /> */}
      <Products />
    </div>
  );
}

export default App;

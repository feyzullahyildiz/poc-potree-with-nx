import styles from './shared-ui.module.css';

import {PotreeLoaderProvider} from "@react-monorepo/potree-importer"
import {Viewer} from '@react-monorepo/potree'
/* eslint-disable-next-line */
export interface SharedUiProps {}

export function SharedUi(props: SharedUiProps) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to SharedUi!</h1>
      <PotreeLoaderProvider>
        {/* <div>WOWOO</div> */}
        <Viewer>{}</Viewer>
      </PotreeLoaderProvider>
    </div>
  );
}

export default SharedUi;

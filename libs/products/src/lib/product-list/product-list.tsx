import React from 'react';
import styles from './product-list.module.css';


// import {SharedUi} from "@react-monorepo/shared-ui"
/* eslint-disable-next-line */
export interface ProductListProps {}

export function ProductList(props: ProductListProps) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to ProductList!</h1>
      {/* <React.Suspense fallback="LOADING">
        <LazySharedUi />
      </React.Suspense> */}
    </div>
  );
}

export default ProductList;

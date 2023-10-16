import { Route, Routes } from 'react-router-dom';

// importing the component from the library
import { ProductList } from '@react-monorepo/products';
import React from 'react';

const LazySharedUi = React.lazy(() =>
  import('@react-monorepo/shared-ui').then((a) => ({ default: a.SharedUi }))
);
function Home() {
  return <h1>Home</h1>;
}

export function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route
        path="/products"
        element={
          <React.Suspense fallback="LOADING">
            <LazySharedUi />
          </React.Suspense>
        }
      ></Route>
    </Routes>
  );
}

export default App;

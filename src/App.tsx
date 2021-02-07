import React, { Suspense } from 'react';
import Loading from "./Loading/Loading"
const Router = React.lazy(() => import("./Router/Routers"));
function App() {
  return (
    <Suspense fallback={<Loading/>}>
      <Router />
    </Suspense>
  );
}

export default App;

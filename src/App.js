
import { Switch, HashRouter } from 'react-router-dom';
import { renderRoutes } from 'react-router-config';
import routes from './router';
import { Suspense } from 'react';
import './css/index.css';

function App() {
  return (
    <HashRouter>
      <Switch>
        <Suspense fallback={<div>loading...</div>}>
          {renderRoutes(routes)}
        </Suspense>
      </Switch>
    </HashRouter>
  );
}

export default App;

import { Route, Routes } from 'react-router-dom';
import './App.css';
import Layout from './components/layout';

function App({routes}) {
  return (
    <Routes>
      {routes.map(({withLayout, path, Component}) => (
        <Route key={path} path={path} element={withLayout ? (
          <Layout>
            <Component />
          </Layout>
        ) : (
          <Component />
        )}></Route>
      ))}
    </Routes>
  );
}

export default App;

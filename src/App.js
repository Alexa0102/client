 import React from 'react'
import Layout from './components/layout/Layout';
// import Search from './components/search/Search';
// import Selects from './components/selects/Selects';
import { Switch, Redirect, Route } from 'react-router-dom';
import CatalogPage from './pages/CatalogPage';
import HomePage from './pages/HomePage';
import BrandsPage from './pages/BrandsPage';
import DetailsPage from './pages/DetailsPage';
import ScrollToTop from './components/UI/ScrollToTop';
// //import Login from './components/login/Login';

function App() {
  return (
    <Layout>
      <ScrollToTop/>
      <Switch>
          <Route path="/" exact>
            <Redirect to="/home" />
          </Route>
          <Route path="/home">
            <HomePage />
          </Route>
          <Route path="/catalog" exact>
            <CatalogPage/>
          </Route>
          <Route path="/catalog/:bagId">
            <DetailsPage />
          </Route>
          <Route path="/brands">
            <BrandsPage/>
          </Route>
        {/* <Route path="/travel" exact>
          <Travel />;
        </Route>
        <Route path="/travel/:bagId">
          <BagDetail />
        </Route>
        <Route path="/home">
          <HomePage />;
        </Route>
        <Route path="/about">
          <AboutPage />;
        </Route> */}
      </Switch>
    </Layout>
    
  );
}

export default App;

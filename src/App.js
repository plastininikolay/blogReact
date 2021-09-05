import React from "react";
import './App.sass';
import Layout from './Components/hoc/Layout/Layout'
import {Route} from 'react-router-dom';
import Home from "./Pages/Home";
function App() {
  return (
    <Layout>
      <Route path='/' component={Home} exact/>
    </Layout>
  );
}

export default App;

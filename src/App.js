import React from "react";
import './App.sass';
import Layout from './Components/hoc/Layout/Layout'
import {Route} from 'react-router-dom';
import Home from "./Pages/Home";
import Post from "./Pages/Post";
import PersonalAccount from "./Pages/PersonalAccount";
function App() {
  return (
    <Layout>
      <Route path='/' component={Home} exact/>
      <Route path='/post/:id' component={Post} exact/>
        <Route path='/im' component={PersonalAccount} exact/>
    </Layout>
  );
}

export default App;

/* custom changes exists for node_libriries */

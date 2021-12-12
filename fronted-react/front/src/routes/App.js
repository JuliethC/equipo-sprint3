import React from "react";

import { BrowserRouter as Router,Switch,Route,Link, BrowserRouter } from "react-router-dom"
import Home from "../componentes/pages/Home";
import Contacto from "../componentes/pages/Contacto";
import Users from "../componentes/pages/Users";
import Layout from "../containers/Layout";
import NotFoud from "../componentes/pages/NotFoud";


function App() {
  return (
   <BrowserRouter>
      <Layout>
         <Switch>
           <Route exact path="/contacto" component={Contacto}/>
           <Route exact path="/Users"component ={Users}/>
           <Route exact path="/" component ={Home}/>
           <Route path="*" component ={NotFoud}/>
         </Switch>
      </Layout>
   </BrowserRouter>
  );
}

export default App;

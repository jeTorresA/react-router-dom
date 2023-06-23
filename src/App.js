import React from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';

import { Layout } from './Layout';
import { Home } from './Home';
import { NoPage } from './NoPage';
import { Abaut } from './Abaut';
import { Users } from './Users';

const App = () => {

  return <BrowserRouter>
    <Routes>
      <Route path='/' element = { <Layout /> }>
        <Route index element = { <Home /> }></Route>
        <Route path='abaut' element = { <Abaut /> }></Route>
        <Route path='users' element = { <Users /> }></Route>
        <Route path='*' element = { <NoPage /> }></Route>
        {/** Si se desea que cuando se ingrese una ruta que no exista,
         * Nos redireccione al home, se hace lo siguiente:
         * 
         * 1. se agrega al import el componente Redirect
         * 2. se pone al final <Redirect to='/' /> y se agrega el atributo 
         * exact a los demás componetes Route al inicio
         * 3. se quita el componente que redirecciona al NoPage
         * 
         * QUEDARÍA ASÍ:
         * <Route path='/' element = { <Layout /> }>
            <Route exact index element = { <Home /> }></Route>
            <Route exact path='abaut' element = { <Abaut /> }></Route>
            <Redirect to='/' />
         * </Route>
         * 
         */}
      </Route>
    </Routes> 
  </BrowserRouter>

}


export {
  App,
}
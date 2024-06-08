import React from 'react'
import {
  createRoutesFromElements,
  createBrowserRouter,
  Route,
  RouterProvider,
} from "react-router-dom";

import Registration from './pages/registration/idex';
import Login from './pages/login/Login';

const App = () => {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route>
        <Route path='/registration' element={<Registration/>} />
        <Route path='/login' element={<Login/>} />
      </Route>
    )
  );
  return (
    <RouterProvider router={router} />
  )
}

export default App
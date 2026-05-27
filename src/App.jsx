import {
  BrowserRouter,
  Routes,
  Route,
} from 'react-router-dom';

import Home from './pages/Home';

import Division from './pages/Division';

import Customer from './pages/Customer';

import CustomerReg from './pages/CustomerReg';

import Mechanic from './pages/Mechanic';

import MechanicReg from './pages/MechanicReg';

const App = () => {

  return (

    <BrowserRouter>

      <Routes>

        <Route
          path="/"
          element={<Home />}
        />

        <Route
          path="/division"
          element={<Division />}
        />

        <Route
          path="/customer-auth"
          element={<Customer />}
        />

        <Route
          path="/customer-register"
          element={<CustomerReg />}
        />

        <Route
          path="/mechanic-auth"
          element={<Mechanic />}
        />

        <Route
          path="/mechanic-register"
          element={<MechanicReg />}
        />

      </Routes>

    </BrowserRouter>

  );
};

export default App;
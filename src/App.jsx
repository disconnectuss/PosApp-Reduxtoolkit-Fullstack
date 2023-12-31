import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import CartPage from "./pages/CartPage";
import InvoicePage from "./pages/InvoicePage";
import CustomerPage from "./pages/CustomerPage";
import StatisticPage from "./pages/StatisticPage";
import Register from "./auth/Register";



Home


function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/cart' element={<CartPage/>}/>
      <Route path='/invoice' element={<InvoicePage/>}/>
      <Route path='/customers' element={<CustomerPage/>}/>
      <Route path='/statistics' element={< StatisticPage/>}/>
      <Route path='/register' element={< Register/>}/>


    </Routes>


    </BrowserRouter>
  );
}

export default App;

import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './routes/Home';
import Product from './routes/product';
import Weboxes from './routes/Weboxes';
import Service from './routes/service';
import Panier from './routes/panier';
import Login from './components/Login';
import Signup from './components/Signup';



// import Register from './routes/register';
// import Homes from './routes/homes';

function App() {
  return (
    <div className="App">
      
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/product" element={<Product/>}></Route>
        <Route path="/Weboxes" element={<Weboxes/>}></Route>
        <Route path="/Service" element={<Service/>}></Route>
        <Route path="/Panier" element={<Panier/>}></Route>
        <Route path="/Login" element={<Login/>}></Route>
        <Route path="/Singup" element={<Signup/>}></Route>
        {/* <Route path="/Register" element={<Register/>}></Route> */}
        {/* <Route path="/homes" element={<Homes/>}></Route> */}
      </Routes>
      
    </div>
  );
};

export default App;

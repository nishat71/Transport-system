import { BrowserRouter, Route, Routes } from "react-router-dom";
// import Registration from '../../../grid/src/Component/Registration/Registration';
import "./App.css";

// import Cars from "./Component/Cars/Cars";


import Footer from "./Component/Footer/Footer";

import Home from "./Component/Home/Home";
import NavBar from "./Component/NavBar/NavBar";

import Registration from "./Component/Registration/Registration";
import Login from "./Component/Login/Login";
import AdminDashboard from "./Component/AdminDashboard/AdminDashboard";
import AuthProvider from "./Context/AuthProvider";



import PrivateRoute from "./Component/Login/PrivateRoute";

import Top from "./Component/Top/Top";
import Buses from "./Component/Buses/Buses";
import Rote from "./Component/Rote/Rote";
import Addroutestartstop from "./Component/Addroutestartstop/Addroutestartstop";
import Request from "./Component/Request/Request";



function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <AuthProvider>
          <NavBar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/buses" element={<Buses/>} />
            {/* <Route path="/cars" element={<Cars />} /> */}
            <Route path="/routes" element={<Rote/>} />
            <Route path="/request" element={<Request/>} />
            <Route path="/registration" element={<Registration />} />
            <Route path="/login" element={<Login />} />
            <Route path="/addroutes" element={<Addroutestartstop/>} />
            {/* <Route path="/cars/:carId" element={<PrivateRoute><Cardetails /></PrivateRoute>} /> */}
            <Route path="/admin" element={<PrivateRoute><AdminDashboard /></PrivateRoute>} />
            {/* <Route path="/addcar" element={<PrivateRoute><AddCar /></PrivateRoute>} /> */}



            <Route path="top" element={<Top />} />
          </Routes>
          <Footer />

        </AuthProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;

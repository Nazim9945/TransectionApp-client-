import { BrowserRouter, Route, Routes } from "react-router-dom"
import SignUp from "./pages/SignUp";
import SignIn from "./pages/SignIn";
import DashBoard from "./pages/DashBoard";
import Transfer from "./pages/Transfer";
import Home from "./pages/Home";
import ProtectedRoute from "./pages/ProtectedRoute";
import Mepoint from "./pages/Mepoint";



function App() {
 

  return (
    <BrowserRouter>
      <Routes>
        <Route  element={<ProtectedRoute />}>
          <Route path="/dashboard" element={<DashBoard />} />
          <Route path="/transfer" element={<Transfer />} />
          <Route path="/mepoint" element={<Mepoint/>}/>
        </Route>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/signin" element={<SignIn />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App

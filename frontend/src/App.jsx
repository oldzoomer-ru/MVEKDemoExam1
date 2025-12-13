import { Routes, Route, BrowserRouter } from "react-router";
import Login from "./components/auth/Login";
import Registration from "./components/auth/Registration";
import Main from "./components/Main";
import { useState } from "react";

function App() {
  const [ authStatus, setAuthStatus ] = useState(false)
  const [ orders, setOrders ] = useState([])

  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Main setOrders={setOrders} authStatus={authStatus} />} />
        <Route path="login" element={<Login setAuthStatus={setAuthStatus} />} />
        <Route path="registration" element={<Registration setAuthStatus={setAuthStatus} />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

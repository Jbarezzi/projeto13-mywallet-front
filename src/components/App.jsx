import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ResetCSS from "./styles/ResetCSS";
import GlobalStyles from "./styles/GlobalStyles";
import UserContext from "./contexts/UserContext";
import Login from "./Components/LoginAndSignUp/Login";
import SignUp from "./Components/LoginAndSignUp/SignUp";

export default function App() {
  const [user, setUser] = useState("");

  return (
    <UserContext.Provider value={{user, setUser}}>
      <BrowserRouter>
          <ResetCSS />
          <GlobalStyles />
          <Routes>
              <Route path="/" element={<Login />} />
              <Route path="/register" element={<SignUp />} />
              {/* <Route path="/transactions" element={<Transactions />} />
              <Route path="/new-transaction" element={< />} /> */}
          </Routes>
      </BrowserRouter>
    </UserContext.Provider>
  );
}
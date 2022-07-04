import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ResetCss from "./styles/ResetCss";
import GlobalStyles from "./styles/GlobalStyles";
import UserContext from "./contexts/UserContext";
import Login from "./components/loginAndSignUp/Login";
import SignUp from "./components/loginAndSignUp/SignUp";

export default function App() {
  const [user, setUser] = useState("");

  return (
    <UserContext.Provider value={{user, setUser}}>
      <BrowserRouter>
          <ResetCss />
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

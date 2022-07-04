import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { ThreeDots } from "react-loader-spinner";
import { login } from "./../../services/Requisitions";
import UserContext from "../../contexts/UserContext";
import AuthenticationPages from "../shared/AuthenticationPages";

export default function Login() {
    const navigate = useNavigate();
    const { setUser } = useContext(UserContext);
    const [load, setLoad] = useState(false);
    const [userLogin, setUserLogin] = useState({
        email: "",
        password: "",
    });
    function handleLogin(e) {
        e.preventDefault();
        setLoad(true);
        const promise = login(userLogin);
        promise.then((response) => {
            setLoad(false);
            setUser(response.data);
            navigate("/wallet", { replace: true });
        });
        promise.catch((error) => {
            setLoad(false);
            alert(error.response.data);
        })
    }
    return(
        <AuthenticationPages p="Primeira vez? Cadastre-se!" link="/register" onSubmit={handleLogin} load={load}>
            <input 
                type="email" 
                required 
                placeholder="E-mail" 
                value={userLogin.email}
                disabled={load} 
                onChange={(e) => setUserLogin({ ...userLogin, email: e.target.value })} />
            <input 
                type="password" 
                required 
                placeholder="Senha" 
                value={userLogin.password}
                disabled={load} 
                onChange={(e) => setUserLogin({ ...userLogin, password: e.target.value })} />
            <button type="submit" disabled={load}>
                { load ? <ThreeDots color="#FFFFFF" width="51" height="13" /> : "Entrar"}
            </button>
        </AuthenticationPages>
    );
}
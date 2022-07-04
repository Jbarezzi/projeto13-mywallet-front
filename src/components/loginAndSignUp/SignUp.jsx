import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ThreeDots } from "react-loader-spinner";
import { register } from "./../../services/Requisitions";
import AuthenticationPages from "./../shared/AuthenticationPages";

export default function SignUp() {
    const [load, setLoad] = useState(false);
    const navigate = useNavigate();
    const [newUser, setNewUser] = useState({
        email: "",
        name: "",
        password: "",
    });
    const [confirmPassword, setConfirmPassword] = useState("")

    function handleSubmit(e) {
        e.preventDefault();
        setLoad(true);
        if(newUser.password === confirmPassword) {
            const promise = register(newUser);
            promise.then(() => {
                setLoad(false);
                navigate("/", {replace: true})
            });
            promise.catch((error) => {
                setLoad(false);
                alert(error.response.data);
            });
        } else {
            alert("As senhas não coincidem")
        }
        
    }

    return(
    <AuthenticationPages p="Já tem uma conta? Entre agora!" link="/" onSubmit={handleSubmit} load={load}>    
            <input 
                type="text" 
                required 
                placeholder="Nome" 
                value={newUser.name}
                disabled={load} 
                onChange={(e) => setNewUser({ ...newUser, name: e.target.value })} />
            <input 
                type="email" 
                required 
                placeholder="E-mail" 
                value={newUser.email}
                disabled={load} 
                onChange={(e) => setNewUser({ ...newUser, email: e.target.value })} />
            <input 
                type="password" 
                required 
                placeholder="Senha" 
                value={newUser.password}
                disabled={load} 
                onChange={(e) => setNewUser({ ...newUser, password: e.target.value })} />
            <input 
                type="password" 
                required 
                placeholder="Confirme a Senha" 
                value={confirmPassword}
                disabled={load} 
                onChange={(e) => setConfirmPassword(e.target.value)} />
            <button type="submit" disabled={load}>
                {load ? <ThreeDots color="#FFFFFF" width="51" height="13" /> : "Cadastrar"}
            </button>
    </AuthenticationPages>
    );
}
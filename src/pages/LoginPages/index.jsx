import React, { useState, useContext } from "react";
import { AuthContext } from "./../../context/auth";
import "./style.css"

const LoginPages = () => {
    const { autheticated, login } = useContext(AuthContext);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("  submission", { email, password })
        login(email, password);// integração com  o meu context e api
    }
    return (
        <div id="login">
            <h1 className="title">Login do Sistema</h1>
            <p>{String(autheticated)}</p>
            <form action="" className="form" onSubmit={handleSubmit}>
                <div className="field">
                    <label htmlFor="email">Email</label>
                    <input type="email" name="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} />
                </div>
                <div className="field">
                    <label htmlFor="password">Password</label>
                    <input type="password" name="password" id="password" value={password} onChange={(e) => setPassword(e.target.value)} />
                </div>
                <div className="actions">

                    <button type="submit">Entrar</button>

                </div>
            </form>
        </div>
    )
}

export default LoginPages;
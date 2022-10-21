import React, { useState } from 'react';
import {
    BrowserRouter as Routers,
    Route,
    Routes,
    Navigate,
    Router
} from "react-router-dom";
import LoginPage from "./pages/LoginPages"
import HomePage from "./pages/HomePage"
import { AuthContext } from "./context/auth";

const AppRoutes = () => {
    const [user, setUser] = useState(null)
    const login = (email, password) => {
        console.log('login', { email, password })
        setUser({ id: "123", email })
    };
    const logout = () => { console.log('logout') };
    return (
        <Router>
            <AuthContext.Provider value={{ authenticated: !!user, user, login, logout }}>
                <Router>
                    <Route exact path="/login" element={<LoginPage />} />
                    <Route exact path="/" element={<HomePage />} />

                </Router>

            </AuthContext.Provider>
        </Router >
    )
}
export default AppRoutes;
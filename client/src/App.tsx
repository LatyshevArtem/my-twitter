import React from "react";
import { Routes, Route } from 'react-router-dom';
import "./App.css";
import {Home} from "./pages/Home";
import {Login} from "./pages/Login";
import {Profile} from "./pages/Profile";
import {Register} from "./pages/Register";
import {Notifications} from "./pages/Notifications";
import {Explore} from "./pages/Explore";
import {IUser} from "./types/types";
import {useAuth} from "./hooks/auth";
import { Auth } from "./context/Auth";

export const defaultTmageHeader = "images/FJSvXP7XEAEL5kq 2.jpeg"
export const default_image = "images/default_profile_x96.png"
export const user: IUser =  {
    name: "Dart Vader",
    id: "@DartVader",
    image: default_image,
    numberOfFollowing: 9999,
    numberOfFollowers: 9999,
    // dateOfBirth: "19.12.2015",
    biography: "",
    // webSite: ""
}

function App() {
    const {token, login, logout, userId} = useAuth()
    const isAuthenticated = !!token
    return (
        <Auth.Provider value={{
            token, login, logout, userId, isAuthenticated
        }}>
            <div className="App">
                <Routes>
                    <Route path="/" element={<Home/>}/>
                    <Route path="/explore" element={<Explore/>}/>
                    <Route path="/notifications" element={<Notifications/>}/>
                    <Route path="/user" element={<Profile/>}/>
                    <Route path="/register" element={<Register/>}/>
                    <Route path="/login" element={<Login/>}/>
                </Routes>
            </div>
        </Auth.Provider>
    );
}

export default App;

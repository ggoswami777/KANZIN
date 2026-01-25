import axios from 'axios'
import { useState } from 'react';
import { createContext } from 'react'
import {useNavigate} from "react-router-dom"
export const ShopContext=createContext();
const ShopContextProvider=(props)=>{
    const backendURL=import.meta.env.VITE_BACKEND_URL;
    const[token,setToken]=useState("");
    const navigate=useNavigate();
    const value={
        token,
        setToken,
        backendURL,
        navigate
    }
    return(
        <ShopContext.Provider value={value}>{props.children}</ShopContext.Provider>
    )
}
export default ShopContextProvider;
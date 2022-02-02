import {createContext} from "react"

function noop(...params: any) {}

export const Auth = createContext({
    token: null,
    userId: null,
    login: noop,
    logout: noop,
    isAuthenticated: false
})
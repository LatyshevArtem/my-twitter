import {useState, useCallback, useEffect} from "react";

const storageName = "userData"

export const useAuth = () => {
    const [token, setToken] = useState(null)
    const [userId, setUserId] = useState(null)

    const login = useCallback((jwtToken, id) => {
        setToken(jwtToken)
        setUserId(id)

        localStorage.setItem(storageName, JSON.stringify({userId, token}))
    }, [])

    const logout = useCallback(() => {
        setToken(null)
        setUserId(null)
        localStorage.removeItem(storageName)
    }, [])

    useEffect(() => {
        const data = localStorage.getItem(storageName)
        if (data) {
            let loginData = JSON.parse(data)
            if (loginData.token) {
                login(loginData.token, loginData.userId)
            }
        }
    }, [login])

    return {login, logout, token, userId}
}
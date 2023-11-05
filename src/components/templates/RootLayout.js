import { Outlet, Navigate } from "react-router-dom"
import { NavBarPanel } from "../organisms/NavBarPanel"

export const RootLayout = () => {
    let isToken = (window.localStorage.getItem('token') === 'undefined') ? false : true
    const auth = { token: isToken }
    return auth.token ?
        <main>
            <header>
                <NavBarPanel />
            </header>
            <Outlet />
        </main> : <Navigate to="/login" />
}
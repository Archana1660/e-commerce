import { Outlet } from "react-router-dom"
import { NavBarPanel } from "../organisms/NavBarPanel"

export const RootLayout = () => {
    return <main>
        <NavBarPanel />
        <Outlet />
    </main>
}
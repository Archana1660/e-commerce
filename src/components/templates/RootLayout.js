import { Outlet } from "react-router-dom"
import { NavBarPanel } from "../organisms/NavBarPanel"


export const RootLayout = () => {
    return <main>
        <header>
            <NavBarPanel />
        </header>
        <Outlet />
    </main>
}
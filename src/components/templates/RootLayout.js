import { Outlet } from "react-router-dom"
import { NavBarPanel } from "../organisms/NavBarPanel"
import { Provider } from "react-redux"
import store from "../../store/store"

export const RootLayout = () => {
    return <main className="container mx-auto px-10">
        <Provider store={store}>
            <header>
                <NavBarPanel />
            </header>
            <Outlet />
        </Provider>
    </main>
}
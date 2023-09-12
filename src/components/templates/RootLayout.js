import { Outlet } from "react-router-dom"
import { NavBarPanel } from "../organisms/NavBarPanel"
import { Provider } from "react-redux"
import store from "../../store/store"

export const RootLayout = () => {
    return <main>
        <Provider store={store}>
            <NavBarPanel />
            <Outlet />
        </Provider>
    </main>
}
import {BrowserRouter, Route, Routes} from "react-router-dom";
import {routes} from "./nav.data.ts";
import PrivateRoute from "../components/PrivateRoute.tsx";
import {IRoute} from "../models/IRoute.ts";

export default function Navigation() {
    return (
        <BrowserRouter>
            <Routes>
                {routes.map((route: IRoute) =>
                    <Route
                        key={route.path}
                        path={route.path}
                        element={<PrivateRoute route={route}/>}
                    />
                )}
            </Routes>
        </BrowserRouter>
    )
}
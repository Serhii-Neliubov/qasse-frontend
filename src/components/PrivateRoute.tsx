import {ReactNode} from "react";
import {Navigate} from "react-router-dom";

type PrivateRouteProps = {
    route: {
        path: string;
        element: () => ReactNode;
    };
}

export default function PrivateRoute({route}: PrivateRouteProps) {
    const isAuthenticated = true;

    if (!isAuthenticated) {
        return <Navigate to='/' />;
    }

    return <route.element />;
}
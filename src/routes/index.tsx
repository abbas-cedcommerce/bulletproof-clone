import { useRoutes } from 'react-router-dom';
import { Login } from "../features/auth/components/Login";
import { privateroutes } from "./privateroutes";

export const AppRoutes = () => {

    let auth = true
    // const commonRoutes = [{ path: '/', element: <Landing /> }];

    // const routes = auth ? protectedRoutes : publicRoutes;
    const commonRoutes = [{
        path: "/",
        index: true,
        element: <Login />,
    }];

    const element = useRoutes([...commonRoutes, ...privateroutes]);

    return <>{element}</>;
};

import { useRoutes } from "react-router";
import { publicroutes } from "./publicroutes";
import { Login } from "@/features/auth/components/Login";

export const AppRoutes = () => {

    let auth = true
    // const commonRoutes = [{ path: '/', element: <Landing /> }];

    // const routes = auth ? protectedRoutes : publicRoutes;
    const commonRoutes = [{
        path: "/",
        index: true,
        element: <Login />,
    }];

    const element = [...commonRoutes] //useRoutes([...routes, ...commonRoutes]);

    return <>{element}</>;
};

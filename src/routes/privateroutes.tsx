import { Navigate } from "react-router-dom";
import Dashboard from "../features/dashboard/components/Dashboard";
import Panel from "../features/panel/Panel";
import Products from "../features/products/components/Products";

export const privateroutes = [
    {
        path: "/panel",
        element: <Panel />,
        children: [
            { path: "dashboard", element: <Dashboard /> },
            { path: "products", element: <Products /> },
            { path: "*", element: <Navigate to="/panel/dashboard" /> }
        ]
    }
];
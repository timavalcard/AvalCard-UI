"use client";

import { ResponsiveProvider } from "@/context/ResponsiveProvider";
import { Provider } from "react-redux";
import { store } from "../../store";
import authChecker from "../components/layout/auth/authChecker";

const Providers = ({ children }) => {
    return (
        <Provider store={store}>

            <ResponsiveProvider>
                {children}
            </ResponsiveProvider>
        </Provider>
    );
};

export default Providers;

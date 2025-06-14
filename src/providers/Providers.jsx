"use client";

import { Provider } from "react-redux";
import { store } from "../../store";
import AuthChecker from "../components/layout/auth/authChecker";

const Providers = ({ children }) => {
    return (
        <Provider store={store}>
            <AuthChecker />
                {children}
        </Provider>
    );
};

export default Providers;

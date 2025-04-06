"use client";

import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {checkLoginStatus, setAuthUser, setToken} from '../../../helpers/actions/authActions';
import getAuthToken from "../../../helpers/functions/getAuthToken";
import getAuthUser from "../../../helpers/functions/getAuthUser";
import Cookies from "js-cookie";

const AuthChecker = ({ children }) => {
    const dispatch = useDispatch();
    const auth = useSelector(state => state.auth);
    useEffect(() => {
        const token = getAuthToken();
        const user = getAuthUser();
        // ست کردن توکن در استیت ریداکس
        if (token) {
            dispatch(setToken(token));
        }
        if (user) {
            dispatch(setAuthUser(user));
        }

        dispatch(checkLoginStatus());



    }, [dispatch]);
    // بررسی وضعیت لاگین بودن کاربر
    if (auth.token === null) {

    } else if (auth.token) {
        // کاربر لاگین شده است
        return <>{children}</>;
    } else {

    }
};

export default AuthChecker;

import React from "react";
import { Subject } from "rxjs";
import { toast } from "react-toastify";
import { spinnerService } from "../services/Spinner";
import { Redirect } from "react-router";
import axios from "axios";

export const authService = {
    checkAuth: () => {
        const token = localStorage.getItem("token");
        if (token != null) {
            authService.isAuthenticated = true;
        } else {
            authService.isAuthenticated = false;
        }
    },
    isAuthenticated: false,
    login: (user, props) => {
        const userData = {
            user,
        };
        axios.post(process.env.API_ENDPOINT + "api/users/login", userData).then((response) => {
            localStorage.setItem("token", response.data.user.token);
            authService.isAuthenticated = true;
            spinnerService.showLoading(false);
            props.history.push("/listpost");
        }).catch((error) => {
            toast.error("Error");
            spinnerService.showLoading(false);
            console.log(error);
        });
    },
    logout: () => {
        localStorage.removeItem("token");
        authService.isAuthenticated = false;
    },
};

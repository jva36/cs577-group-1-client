import React from "react";
import User from "../models/User";

export const authContextValues = {
    user: User
};

export const AuthContext = React.createContext(authContextValues);
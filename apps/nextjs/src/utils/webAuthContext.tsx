import { AuthContextProvider } from "@struct/auth-context"
import React from "react";
import { api } from "~/utils/api";

export const WebAuthContextProvider : React.FC<React.PropsWithChildren> = ({children}) => {
    return <AuthContextProvider api={api} localSessionHandler={}>
        {children}
    </AuthContextProvider>
}
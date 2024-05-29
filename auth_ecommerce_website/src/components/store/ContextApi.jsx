import { createContext, useState } from "react";


const ContextApi = createContext({
    token: "",
    isUserLogIn: false,
    login: () => { },
    logout: () => { },
});


export const ProviderContextApi = ({ children }) => {

    const [initialToken, setInitialToken] = useState(null);

    const [isUserLogging, setIsUserLogging] = useState(initialToken);

    const handlerOnLogin = (initialToken) => {
        setInitialToken(initialToken);
        setIsUserLogging(true);
    };

    const handlerOnLogout = () => {
        setInitialToken(null);
        setIsUserLogging(false);
    };

    const contextValue = {
        token: initialToken,
        isUserLogIn: isUserLogging,
        login: handlerOnLogin,
        logout: handlerOnLogout,
    };

    return <ContextApi.Provider value={contextValue}>
        {children}
    </ContextApi.Provider>
};



export default ContextApi;
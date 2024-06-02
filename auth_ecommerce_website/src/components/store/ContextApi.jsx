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
        // Getting the idToken as parameter here, to make sure about the unique identity of a particular user or make surity about that user should login not anyone else;
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
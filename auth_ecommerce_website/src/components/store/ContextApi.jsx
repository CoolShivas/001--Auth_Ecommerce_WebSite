import { createContext } from "react";


const ContextApi = createContext({
    token: "",
    isUserLogIn: false,
    login: () => { },
    logout: () => { },
});


export const ProviderContextApi = ({ children }) => {

    const handlerOnLogin = () => { };

    const handlerOnLogout = () => { };

    const contextValue = {
        login: handlerOnLogin,
        logout: handlerOnLogout,
    };

    return <ContextApi.Provider value={{ contextValue }}>
        {children}
    </ContextApi.Provider>
};



export default ContextApi;
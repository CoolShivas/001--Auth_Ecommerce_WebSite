import AuthForm from "./components/auth/AuthForm";
import ProductPage from "./components/pages/ProductPage";
import ProfilePage from "./components/pages/ProfilePage";
import HomePage from "./components/pages/HomePage";
import { Route } from "react-router-dom/cjs/react-router-dom.min";
import AppName from "./components/header/AppName";
import { useContext } from "react";
import ContextApi from "./components/store/ContextApi";

const App = () => {

  const { isUserLogIn } = useContext(ContextApi);

  return (
    <>
      <AppName></AppName>

      {isUserLogIn && <>
        <Route path="/home">  <HomePage></HomePage> </Route>
        <Route path="/profile"> <ProfilePage></ProfilePage> </Route>
        <Route path="/product"> <ProductPage></ProductPage> </Route>
      </>}

      {!isUserLogIn && <Route path="/auth"> <AuthForm></AuthForm> </Route>}
    </>
  )
}

export default App;
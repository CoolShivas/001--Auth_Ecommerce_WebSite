import WelComePage from "./components/pages/WelComePage";
import LogInPage from "./components/auth/LogInPage";
import SignUpPage from "./components/auth/SignUpPage";
import Bucket from "./components/pages/cart/Bucket";
import ProductPage from "./components/pages/ProductPage";
import ProfilePage from "./components/pages/ProfilePage";
import HomePage from "./components/pages/HomePage";
import { Route, Switch } from "react-router-dom/cjs/react-router-dom.min";
import AppName from "./components/header/AppName";
import { useContext } from "react";
import ContextApi from "./components/store/ContextApi";

const App = () => {

  const { isUserLogIn } = useContext(ContextApi);

  return (
    <>
      <AppName></AppName>

      <Switch>
        <Route exact path="/"> <WelComePage></WelComePage> </Route>

        {isUserLogIn && <>
          <Route path="/profile"> <ProfilePage></ProfilePage> </Route>
          <Route path="/product"> <ProductPage></ProductPage> </Route>
          <Route path="/cart"> <Bucket></Bucket> </Route>
        </>}
        {/* If the user is LOGIN then router available to access are the above mentioned only; */}

        {!isUserLogIn && <>
          <Route path="/home">  <HomePage></HomePage> </Route>
          <Route path="/signup"> <SignUpPage></SignUpPage> </Route>
          <Route path="/login"> <LogInPage></LogInPage> </Route>
        </>}
        {/* If the user is LOGOUT then router available to access are the above mentioned only; */}

      </Switch>


    </>
  )
}

export default App;
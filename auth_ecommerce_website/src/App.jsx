import AuthForm from "./components/auth/AuthForm";
import ProductPage from "./components/pages/ProductPage";
import ProfilePage from "./components/pages/ProfilePage";
import HomePage from "./components/pages/HomePage";
import { Route } from "react-router-dom/cjs/react-router-dom.min";
import AppName from "./components/header/AppName";

const App = () => {
  return (
    <>
      <AppName></AppName>

      <Route path="/home">  <HomePage></HomePage> </Route>
      <Route path="/profile"> <ProfilePage></ProfilePage> </Route>
      <Route path="/product"> <ProductPage></ProductPage> </Route>

      <Route path="/auth"> <AuthForm></AuthForm> </Route>
    </>
  )
}

export default App;
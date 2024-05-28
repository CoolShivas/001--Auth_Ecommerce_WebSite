import { Route } from "react-router-dom/cjs/react-router-dom.min";
import AppName from "./components/header/AppName";

const App = () => {
  return (
    <>
      <Route path="/"></Route>
      <AppName></AppName>
    </>
  )
}

export default App;
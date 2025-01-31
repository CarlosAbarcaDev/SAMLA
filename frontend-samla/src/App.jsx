import { Route } from "wouter"
import FormPage from "./pages/FormPage/FormPage"
import HomeMenu from "./pages/Home/Homemenu"
import CreditTable from "./pages/Table/CreditTable"
function App() {
  
  return (
    <>
    
    <Route path="/" component={HomeMenu} />
    <Route path="/form" component={FormPage} />
    <Route path="/credits" component={CreditTable} />
    </>
  )
}

export default App

import {
  BrowserRouter as Router,
  Route,
  Routes,
 
} from "react-router-dom";
import Layouts from "./layouts/Layouts";
import Register from './pages/Register';
import SignIn from "./pages/Signin";

const App = () => {
  return (
    <Router>
    <Routes>
    <Route path="/" element ={<Layouts> <p>Home Page</p></Layouts>}/>
    <Route path="/search" element={<Layouts> <p>Search Page</p></Layouts>}/>
    <Route path= "/register" element={<Layouts>
     
      <Register/>
    </Layouts>}/>
    <Route path= "/sign-in" element={<Layouts>
     
     <SignIn/>
   </Layouts>}/> 
    </Routes>
    </Router>
  )
}

export default App

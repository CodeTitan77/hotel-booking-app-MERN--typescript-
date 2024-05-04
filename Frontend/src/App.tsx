import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import Layouts from "./layouts/Layouts";

const App = () => {
  return (
    <Router>
    <Routes>
    <Route path="/" element ={<Layouts> <p>Home Page</p></Layouts>}/>
    <Route path="/search" element={<Layouts> <p>Search Page</p></Layouts>}/>
    </Routes>
    </Router>
  )
}

export default App

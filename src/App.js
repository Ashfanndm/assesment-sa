import './App.css';
import {Login} from "./Components/Login";
import {Home} from "./Components/Home";
import {BrowserRouter as Router, Routes,Route } from "react-router-dom"
import ErrorPage from "./Components/ErrorPage";

function App() {
    const isAuthenticated = localStorage.getItem("isLoggedIn")

    console.log(isAuthenticated)
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Login/>}/>
                <Route path="/home" element={<Home/>} />
                <Route path="*" element={<ErrorPage/>}/>
            </Routes>
        </Router>
    );
}

export default App;

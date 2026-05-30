import {BrowserRouter, Route, Routes} from "react-router";
import Navbar from "../Components/Navbar.tsx";
import Counter from "../Pages/Counter.tsx";
import Users from "../Pages/Users.tsx";
import Home from "../Pages/Home.tsx";

function AppRouter(){
    return(
        <BrowserRouter>
            <Navbar />
            <Routes>
                <Route path="/" element={<Home />}/>
                <Route path="/users" element={<Users/>}/>
                <Route path="/counter" element={<Counter/>}/>
            </Routes>
        </BrowserRouter>
    )
}

export default AppRouter;
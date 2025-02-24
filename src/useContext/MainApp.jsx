import { Navigate, Route, Routes} from 'react-router-dom';
import { HomePage } from "./HomePage";
import { AboutPage } from "./AboutPage";
import { LoginPage } from "./LoginPage";
import { NavBar } from './Navbar';
import { UserProvider } from './context/UserProvider';


export const MainApp = ()=>{
    return(
        <UserProvider>
            <NavBar/>
            {/* cualquier elemento va poder ver el userProvider y obtener info */}
        <hr />

        <Routes>
            <Route path="/" element={<HomePage/>}></Route>
            <Route path="login" element={<LoginPage/>}></Route>
            <Route path="about" element={<AboutPage/>}></Route>
            <Route path="/*" element={<Navigate to="/"/>}/>
        </Routes>

        </UserProvider>
    )
}
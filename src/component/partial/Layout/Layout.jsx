import { useLocation } from "react-router-dom";
import Header from "../../ui/organism/header/Header";
import SideBar from "../../ui/organism/sideBar/SideBar";

export default function Layout({children}){
    const Location = useLocation()
    return(
        <div className={`${Location.pathname === "/login" && Location.pathname === "/sigin" && ""} flex`}>
            <div>
            <SideBar/>
            </div>
            <div>
                <div className="ml-9 pt-8">
                <Header/>
                </div>
                {children}
            </div>
        </div>
    )
}
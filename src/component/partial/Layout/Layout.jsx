import { useLocation } from "react-router-dom";
import Header from "../../ui/organism/header/Header";
import SideBar from "../../ui/organism/sideBar/SideBar";

export default function Layout({ children }) {
    const Location = useLocation()
    console.log(Location.pathname);

    return (
        <div className={`w-full flex justify-end bg-[#FAFAFA]`}>
            <div className={`${Location.pathname === "/login" || Location.pathname === "/signup"|| Location.pathname === "/"? "hidden" : "flex"} w-[265px]`}>
                <SideBar />
            </div>
            <div className="w-full ">
                <div className={`${Location.pathname === "/login" || Location.pathname === "/sigin"||Location.pathname === "/" ? "hidden" : "flex"} pl-8 pt-8`}>
                    <Header />
                </div>
                <div className="w-full">
                    {children}
                </div>
            </div>
        </div>
    )
}
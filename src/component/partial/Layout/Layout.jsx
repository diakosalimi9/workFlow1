import Header from "../../ui/organism/header/Header";
import SideBar from "../../ui/organism/sideBar/SideBar";

export default function Layout({children}){
    return(
        <div className="flex">
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
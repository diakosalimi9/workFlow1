import SideBar from "../../../pages/SideBar";

export default function Layout({children}){
    return(
        <div>
            <SideBar/>
            <div>
                {children}
            </div>
        </div>
    )
}
import Header from "./Header";
import SideBar from "./SideBar";

export default function Base() {
    return (
        <div className="flex">
            <div>
            <SideBar/>
            </div>
            <div>
            <Header/>
            </div>
        </div>
    )
}
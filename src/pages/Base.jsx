import BaseCountries from "../component/ui/organism/BaseCountries/BaseCountries";
import ListCities from "../component/ui/organism/ListCities/ListCities";
import LIstMethodes from "../component/ui/organism/LIstMethodes/LIstMethodes";
import ModaleEdit from "../component/ui/organism/modalEdit/ModaleEdit";
import SideBar from "./SideBar";

export default function Base() {

    return (
        <div className="w-full flex bg-[#FAFAFA]">
            <SideBar />
            <div className="flex flex-col w-full ml-[15%]">
                <BaseCountries />
                <div className="w-full flex gap-1 ">
                    <ListCities />
                    <LIstMethodes />
                </div>
                <ModaleEdit />
            </div>
        </div>
    )
}
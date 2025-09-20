import H1 from "../component/ui/atom/h1/H1";
import P from "../component/ui/atom/p/P";
import BasePage from "./BasePage";
import Header from "./Header";
import SideBar from "./SideBar";

export default function Base() {
    return (
        <div className="flex">
            <div>
                <SideBar />
            </div>
            <div className="mt-7 ml-10">
                <Header />
                <div className="mt-10">
                    <H1 className={'text-3xl font-InterLight font-semibold'}>Base</H1>
                </div>
                <div className="mt-10 ml-8">

                    <BasePage />
                </div>
            </div>
        </div>
    )
}
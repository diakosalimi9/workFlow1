import SideBar from "../../../pages/SideBar";

export default function Layout({ children }) {
    return (
        <>
            <div>
                <SideBar />
            </div>
            <div>{children}</div>
        </>
    )
}
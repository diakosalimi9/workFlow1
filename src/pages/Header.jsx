import { useLocation } from "react-router-dom"
import P from "../component/ui/atom/p/P"
import Icon from "../component/ui/atom/icon/Icon"

export default function Header(){
    const Location = useLocation()
    const Pages = {
        '/utilisateurs':'Utilisateurs',
        '/base':'Base',
        '/controle':'Contrôle',
    }
    const Utilisateurs = { "/utilisateurs": "Utilisateurs" }
    const Market = Utilisateurs[Location.pathname] || ''
    const titlePage = Pages[Location.pathname] || ""
    return(
        <>
        <div className="flex justify-center items-center">
            {Location.pathname === '/utilisateurs' && (
                <>
                <div className="flex justify-center items-center">
                    <div>
                        <P>{titlePage}</P>
                    </div>
                    <div className="flex justify-end items-end pl-[1150px]">
                        <Icon name={'notification'}/>
                    </div>
                </div>
                </>
            )}
        </div>
        <div className="flex">
            {Location.pathname === '/base' && (
                <>
                <div className="flex justify-center items-center">
                    <div>
                        <P>{titlePage}</P>
                    </div>
                    <div className="flex justify-end items-end pl-[1150px]">
                        <Icon name={'notification'}/>
                    </div>
                </div>
                </>
            )}
        </div>
        <div className="flex">
            {Location.pathname === '/controle' && (
                <>
                <div className="flex justify-center items-center">
                    <div>
                        <P>{titlePage}</P>
                    </div>
                    <div className="flex justify-end items-end pl-[1150px]">
                        <Icon name={'notification'}/>
                    </div>
                </div>
                </>
            )}
        </div>
        </>
    )
}
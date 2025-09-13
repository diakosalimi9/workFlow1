import { useState } from "react";
import Icon from "../component/ui/atom/icon/Icon";
import P from '../component/ui/atom/p/P'
import Button from '../component/ui/atom/button/Button'
import { NavLink } from "react-router-dom";

const SideBarArray = [
    { id: 1, title: 'Configuration', icon: 'setting', iconup: 'up', icondown: 'down', select: true },
    { id: 2, title: 'Dossier', icon: 'folder', iconup: 'up', icondown: 'down', select: false },
    { id: 3, title: 'Projet', icon: 'project', iconup: 'up', icondown: 'down', select: false },
    { id: 4, title: 'DirectionTechnique', icon: 'object', iconup: 'up', icondown: 'down', select: false },
    { id: 5, title: 'Protection', icon: 'protection', iconup: 'up', icondown: 'down', select: false },
]
const SideBarSelect = [
    { id: 1, title: 'Utilisateurs', navlink: '/utilisateurs' },
    { id: 2, title: 'Base', navlink: '/base' },
    { id: 3, title: 'Contrôle', navlink: '/controle' },
    { id: 4, title: 'Workflow', navlink: '/coming' },
    { id: 5, title: 'Alertes', navlink: '/coming' },
    { id: 6, title: 'Rôles', navlink: '/coming' },
    { id: 7, title: 'Préferences', navlink: '/coming' },
    { id: 8, title: 'Calendrier', navlink: '/coming' },
]
export default function SideBar() {
    const [select, setSelect] = useState(false)
    const [navlink, setNavlink] = useState(null)

    function handleClick(item) {
        if (item.id === 1) {
            setSelect((prev) => (!prev))
        } else {
            setNavlink(item.id)
        }
    }
    return (
        <div className="h-full">
            <div>
                <div className="bg-[#0E1B6B] w-56 flex justify-center items-center gap-3 h-[60px] ">
                    <div>
                        <Icon name={'sidebar'} />
                    </div>
                    <div>
                        <Icon name={'logo'} />
                    </div>
                </div>
                <div className="bg-gradient-to-b from-[#131C55] via-[#4357d5] to-[#131C5559]  w-56  to-inherit-[] h-[677px] ">
                    {SideBarArray.map((item, index) => (
                        <>
                            <Button className="flex justify-center items-center gap-16 pt-5 " onClick={() => handleClick(item)} >
                                <div className="flex justify-center items-center gap-2 ml-3  ">
                                    <Icon name={item.icon} />
                                    <P className={`text-[#FFFFFF] w-[90px] text-base font-normal flex`}>{item.title}</P>
                                </div>
                                <div className="flex justify-center items-center">
                                    {item.id === 1 ? <Icon name={select ? item.icondown : item.iconup} /> : <Icon name={navlink === item.id ? item.icondown : item.iconup} />}
                                </div>
                            </Button>

                            <div >
                                {select && item.id === 1 && (
                                    <div className="flex flex-col gap-3 text-[#FFFFFF] pt-2 ">
                                        {SideBarSelect.map((item) => (
                                            <>
                                                <div className=" w-48 ml-4  ">
                                                    <NavLink to={item.navlink} >
                                                        {({isActive})=>(
                                                        <P className={isActive ? 'active all':'all'}>{item.title}</P>
                                                        )}
                                                    </NavLink>
                                                </div>
                                            </>
                                        )) 
                                        }
                                    </div>
                                )}
                            </div>
                        </>
                    ))}
                </div>
            </div>

        </div>
    )
}

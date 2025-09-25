import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { SideBarArray } from "../../../../Chore/Array/SideBarArray";
import { SideBarSelect } from "../../../../Chore/Array/SideBarSelect";
import Icon from "../../atom/icon/Icon";
import Button from "../../atom/button/Button";
import P from "../../atom/p/P";


export default function SideBarArrayAll() {
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
        <div className="h-full fixed ">
            <div>
                <div className="bg-[#0E1B6B] w-56 flex justify-center items-center gap-3 h-[60px] ">
                    <div>
                        <Icon name={'sidebar'} />
                    </div>
                    <div>
                        <Icon name={'logo'} />
                    </div>
                </div>
                <div className="bg-gradient-to-b from-[#131C55] via-[#4357d5] to-[#131C5559]  w-56  to-inherit-[] h-screen ">
                    {SideBarArray.map((item, index) => (
                        <React.Fragment key={index}>
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
                                                        {({ isActive }) => (
                                                            <P className={isActive ? 'active all' : 'all'}>{item.title}</P>
                                                        )}
                                                    </NavLink>
                                                </div>
                                            </>
                                        ))
                                        }
                                    </div>
                                )}
                            </div>
                        </React.Fragment>
                    ))}
                    <div className="w-full h-full p-2 flex items-end">
                        <div className="w-full h-64 bg-black">

                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}
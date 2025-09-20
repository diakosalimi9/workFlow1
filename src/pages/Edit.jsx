import { useNavigate, useParams } from "react-router-dom";
import SideBar from "./SideBar";
import P from "../component/ui/atom/p/P";
import { users } from "../Chore/Array/Array";
import Input from "../component/ui/atom/input/Input";
import H1 from "../component/ui/atom/h1/H1";
import Header from "./Header";
import Button from "../component/ui/atom/button/Button";
import { useLocalStorage } from "../hooks/useLocalStorage";
import { useState } from "react";

export default function Edit() {
    const { id } = useParams()
    const navigate = useNavigate()
    const [items , seItems , updateItem]= useLocalStorage("myitems",[])
    const user = users.find((item) => item.id === Number(id))

    const [name , setName] = useState(user?.name || "")
    const [email , setEmail] = useState(user?.email || "")
    const [smallname , setSmallname] = useState(user?.smallname || "")
    const [numberphone , setNumberphone] = useState(user?.numberphone || "")

    const handleUpdate =()=>{
        updateItem(user.id , {...user , name , email , smallname , numberphone})
        navigate('/utilisateurs')
    }
    return (
        <>
            <div className="flex">

                <div>
                    <SideBar />
                </div>
                <div>
                    <div>
                        <Header />
                    </div>
                    <div className="mt-16 ml-20">
                        <div>
                            <H1 className={`text-2xl font-InterReguler font-semibold`}>Configuration</H1>
                        </div>
                        <div className="mt-7 ml-7">
                            <div className="mb-8 text-[#18181B] InterLight font-normal text-lg">
                                <P>Editer un compte</P>
                            </div>
                            <div className="flex flex-col gap-7">
                                <div className="flex gap-5">
                                    <div className="flex flex-col gap-3 ">
                                        <P className={'InterLight text-base font-normal text-[#000000]'}>Adresse e-mail</P>
                                        <Input placeholder={`${user.email}`} value={email} onchange={(e)=> setEmail(e.target.value)} className={'border-[2px] rounded-lg w-[500px] h-14 placeholder:pl-4 focus:border-[#5C73DB] focus:outline-none placeholder:text-[#18181B] placeholder:InterLight placeholder:text-sm placeholder:font-normal'}/>
                                    </div>
                                    <div className="flex flex-col gap-3 ">
                                        <P className={'InterLight text-base font-normal text-[#000000]'}>Numéro de téléphone</P>
                                        <Input type={"number"} placeholder={`${user.numberphone}`} value={numberphone} onchange={(e)=>setNumberphone(e.target.value)} className={'border-[2px] rounded-lg w-[500px] h-14 placeholder:pl-4 focus:border-[#5C73DB] focus:outline-none placeholder:text-[#18181B] placeholder:InterLight placeholder:text-sm placeholder:font-normal'} />
                                    </div>
                                </div>
                                <div className="flex gap-5">
                                    <div className="flex flex-col gap-3 ">
                                        <P className={'InterLight text-base font-normal text-[#000000]'}>Nom</P>
                                        <Input placeholder={`${user.name}`} value={name} onchange={(e)=>setName(e.target.value)} className={'border-[2px] rounded-lg w-[500px] h-14 placeholder:pl-4 focus:border-[#5C73DB] focus:outline-none placeholder:text-[#18181B] placeholder:InterLight placeholder:text-sm placeholder:font-normal'} />
                                    </div>
                                    <div className="flex flex-col gap-3 ">
                                        <P className={'InterLight text-base font-normal text-[#000000]'}>Prénom</P>
                                        <Input placeholder={`${user.smallname}`} value={smallname} onchange={(e)=>setSmallname(e.target.value)} className={'border-[2px] rounded-lg w-[500px] h-14 placeholder:pl-4 focus:border-[#5C73DB] focus:outline-none placeholder:text-[#18181B] placeholder:InterLight placeholder:text-sm placeholder:font-normal'} />
                                    </div>
                                </div>
                                <div className="flex gap-5">
                                    <div className="flex flex-col gap-3 ">
                                        <P className={'InterLight text-base font-normal text-[#000000]'}>Date de création de compte</P>
                                        <Input placeholder={`2022-06-21 14:30:25`}  className={'border-[2px] rounded-lg w-[500px] h-14 placeholder:pl-4 focus:border-[#5C73DB] focus:outline-none placeholder:text-[#18181B] placeholder:InterLight placeholder:text-sm placeholder:font-normal'}/>
                                    </div>
                                    <div className="flex flex-col gap-3 ">
                                        <P className={'InterLight text-base font-normal text-[#000000]'}>Date de dernière connexion</P>
                                        <Input placeholder={`2022-06-21 00:00:00`} className={'border-[2px] rounded-lg w-[500px] h-14 placeholder:pl-4 focus:border-[#5C73DB] focus:outline-none placeholder:text-[#18181B] placeholder:InterLight placeholder:text-sm placeholder:font-normal'} />
                                    </div>
                                </div>
                            </div>
                            <div className="mt-14 ">
                                <Button className={'bg-[#4763E4] text-[#FFFFFF] w-20 h-11 rounded-lg'} onClick={handleUpdate}>Modifier</Button>
                                <Button className={'bg-[#000000] text-[#FFFFFF] w-20 h-11 rounded-lg'} onClick={()=> navigate('/utilisateurs')}>Modifier</Button>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </>
    )
}
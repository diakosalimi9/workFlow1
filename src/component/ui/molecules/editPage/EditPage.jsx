import { useNavigate, useParams } from "react-router-dom";
import { useState } from "react";
import { useLocalStorage } from "../../../../hooks/useLocalStorage";
import P from "../../atom/p/P";
import { users } from "../../../../Chore/Array/Array";
import Icon from "../../atom/icon/Icon";
import H1 from "../../atom/h1/H1";
import Input from "../../atom/input/Input";
import Button from "../../atom/button/Button";

export default function EditPage() {
    const { id } = useParams()
    const navigate = useNavigate()
    const [items, seItems, updateItem] = useLocalStorage("myitems", [])
    const user = users.find((item) => item.id === Number(id))

    const [name, setName] = useState(user?.name || "")
    const [email, setEmail] = useState(user?.email || "")
    const [smallname, setSmallname] = useState(user?.smallname || "")
    const [numberphone, setNumberphone] = useState(user?.numberphone || "")

    const handleUpdate = () => {
        updateItem(user.id, { ...user, name, email, smallname, numberphone })
        navigate('/utilisateurs')
    }
    return (
        <>
            <div className="">
            <div className="ml-11">
                <div>
                    <P>Utilisateurs</P>

                </div>
                <div className="flex justify-end items-end pl-[1150px]">
                    <Icon name={'notification'} />
                </div>
                </div>
                <div>

                    <div className="mt-7 ml-20">
                        <div>
                            <H1 className={`text-3xl font-InterReguler font-semibold`}>Configuration</H1>
                        </div>
                        <div className="mt-7 ml-7">
                            <div className="mb-8 text-[#18181B] InterLight font-normal text-lg">
                                <P>Editer un compte</P>
                            </div>
                            <div className="flex flex-col gap-7">
                                <div className="flex gap-5">
                                    <div className="flex flex-col gap-3 ">
                                        <P className={'InterLight text-base font-normal text-[#000000]'}>Adresse e-mail</P>
                                        <Input placeholder={`${user.email}`} value={email} onchange={(e) => setEmail(e.target.value)} className={'border-[2px] rounded-lg w-[500px] h-14 placeholder:pl-4 focus:border-[#5C73DB] focus:outline-none placeholder:text-[#18181B] placeholder:InterLight placeholder:text-sm placeholder:font-normal'} />
                                    </div>
                                    <div className="flex flex-col gap-3 ">
                                        <P className={'InterLight text-base font-normal text-[#000000]'}>Numéro de téléphone</P>
                                        <Input type={"number"} placeholder={`${user.numberphone}`} value={numberphone} onchange={(e) => setNumberphone(e.target.value)} className={'border-[2px] rounded-lg w-[500px] h-14 placeholder:pl-4 focus:border-[#5C73DB] focus:outline-none placeholder:text-[#18181B] placeholder:InterLight placeholder:text-sm placeholder:font-normal'} />
                                    </div>
                                </div>
                                <div className="flex gap-5">
                                    <div className="flex flex-col gap-3 ">
                                        <P className={'InterLight text-base font-normal text-[#000000]'}>Nom</P>
                                        <Input placeholder={`${user.name}`} value={name} onchange={(e) => setName(e.target.value)} className={'border-[2px] rounded-lg w-[500px] h-14 placeholder:pl-4 focus:border-[#5C73DB] focus:outline-none placeholder:text-[#18181B] placeholder:InterLight placeholder:text-sm placeholder:font-normal'} />
                                    </div>
                                    <div className="flex flex-col gap-3 ">
                                        <P className={'InterLight text-base font-normal text-[#000000]'}>Prénom</P>
                                        <Input placeholder={`${user.smallname}`} value={smallname} onchange={(e) => setSmallname(e.target.value)} className={'border-[2px] rounded-lg w-[500px] h-14 placeholder:pl-4 focus:border-[#5C73DB] focus:outline-none placeholder:text-[#18181B] placeholder:InterLight placeholder:text-sm placeholder:font-normal'} />
                                    </div>
                                </div>
                                <div className="flex gap-5">
                                    <div className="flex flex-col gap-3 ">
                                        <P className={'InterLight text-base font-normal text-[#000000]'}>Date de création de compte</P>
                                        <Input placeholder={`2022-06-21 14:30:25`} className={'border-[2px] rounded-lg w-[500px] h-14 placeholder:pl-4 focus:border-[#5C73DB] focus:outline-none placeholder:text-[#18181B] placeholder:InterLight placeholder:text-sm placeholder:font-normal'} />
                                    </div>
                                    <div className="flex flex-col gap-3 ">
                                        <P className={'InterLight text-base font-normal text-[#000000]'}>Date de dernière connexion</P>
                                        <Input placeholder={`2022-06-21 00:00:00`} className={'border-[2px] rounded-lg w-[500px] h-14 placeholder:pl-4 focus:border-[#5C73DB] focus:outline-none placeholder:text-[#18181B] placeholder:InterLight placeholder:text-sm placeholder:font-normal'} />
                                    </div>
                                </div>
                            </div>
                            <div className="mt-14 ">
                                <Button className={'bg-[#4763E4] text-[#FFFFFF] w-20 h-11 rounded-lg'} onClick={handleUpdate}>Modifier</Button>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </>
    )
}
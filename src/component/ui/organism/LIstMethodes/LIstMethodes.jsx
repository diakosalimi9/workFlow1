import { methodes } from "../../../../Chore/Array/Array";
import { useEdit } from "../../../../context/EditItemContext";
import { useLocalStorage } from "../../../../hooks/useLocalStorage";
import Button from "../../atom/button/Button";
import Icon from "../../atom/icon/Icon";
import Input from "../../atom/input/Input";
import P from "../../atom/p/P";
import Span from "../../atom/span/Span";

export default function LIstMethodes() {
    const [methode, setMethodes] = useLocalStorage("methodes", )
    const array = ["Libellé", "Description", "Actions"]
    const { modaleEdit, setModaleEdit } = useEdit()
    // function handlesetnewotem() {
    //     setModaleEdit({ isopen: true, fields: { Dragonfly: "", Description: "" }, title: "méthodes d'évaluation" })
    //     console.log(modaleEdit);
    // }
        function handlredeleteitem(id) {

        const newlist = methode.filter((i) => i.id !== id)
        console.log(newlist);
        
        setMethodes(newlist)
    }
    function handlesetnewoitem(item) {
        console.log({...item});

        setModaleEdit({ fields: item ? { ...item } : { Dragonfly: "", CodeISO: '', Description: '', id: Date.now() }, title: "méthodes d'évaluation", isopen: true, })

    }
    return (
        <div className="w-1/2 flex items-center gap-4">
            <div className="w-[95%] h-full bg-white flex flex-col gap-4 px-6 py-3 rounded-[12px]">
                <div className="w-full flex justify-between items-center">
                    <P className="font-InterRegular font-normal text-[18px]">Liste des méthodes d'évaluation</P>
                    <Button onClick={() => handlesetnewoitem({ Dragonfly: '', Description: '', id: Date.now() } )} className="bg-[#4763E4] text-white gap-2 p-[6px] rounded-[10px] flex items-center sv ">
                        <Span>Ajouter</Span>
                        <Icon name="plusicon" />
                    </Button>
                </div>

                <div className="w-full border border-[#4763E480] rounded-[10px] flex items-center gap-3 py-3 px-4">
                    <Icon name="searchIcon" />
                    <Input className="placeholder:text-[#A1A1AA] font-InterRegular font-normal text-[14px]" placeholder="Vous cherchez un pays ..." />

                </div>

                <div className="w-full flex flex-col gap-2">
                    <div className="flex gap-1">
                        {array.map((item, index) => (
                            <div className="bg-white flex-33%"><Span className="text-[#A1A1AA] text-[16px] font-medium font-InterMedium ">{item}</Span></div>
                        ))}
                    </div>
                    <div className="w-full">
                        {methode.map((item, inedx) => (
                            <div className="flex border-b-2 border-[#F4F4F5] pt-4 pb-2 ">
                                <div className="flex-33%">{item.Dragonfly}</div>
                                <div className="flex-33%">{item.Description}</div>
                                <div className="flex-33% flex gap-3 justify-center">
                                    <Button className="px-6 py-1 text-[14px] font-InterMedium font-medium rounded-[10px] border border-[#5C73DB] text-[#5C73DB]" onClick={() => handlesetnewoitem({...item})}>Modifier</Button>
                                    <Button className="px-6 py-1 text-[14px] font-InterMedium font-medium rounded-[10px] bg-[#DC2626] text-white" onClick={() => handlredeleteitem(item.id)}>Supprimer</Button>
                                </div>
                            </div>
                        ))}
                    </div >


                </div>
            </div>
        </div>
    )
}
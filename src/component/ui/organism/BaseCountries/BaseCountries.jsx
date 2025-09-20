import ReactPaginate from "react-paginate";
import { paies } from "../../../../Chore/Array/Array";
import Button from "../../atom/button/Button";
import H1 from "../../atom/h1/H1";
import Icon from "../../atom/icon/Icon";
import Input from "../../atom/input/Input";
import P from "../../atom/p/P";
import Span from "../../atom/span/Span";
import { useEffect, useState } from "react";
import { useEdit } from "../../../../context/EditItemContext";
import { useLocalStorage } from "../../../../hooks/useLocalStorage";

const array = ["Libellé", "Code ISO", "Description", "Actions"]
export default function BaseCountries() {
    const [itemOffset, setItemOffset] = useState(0);
    const itemsPerPage = 2
    const endOffset = itemOffset + itemsPerPage;
    const currentItems = paies.slice(itemOffset, endOffset);
    const pageCount = Math.ceil(paies.length / itemsPerPage);
    const { modaleEdit, setModaleEdit } = useEdit()
    const [pay, setPay] = useLocalStorage("pays", paies)

    const handlePageClick = (event) => {
        const newOffset = (event.selected * itemsPerPage) % paies.length;
        console.log(
            `User requested page number ${event.selected}, which is offset ${newOffset}`
        );
        setItemOffset(newOffset);
    };

    function handlesetnewotem() {
        setModaleEdit({fields: { Dragonfly: "nujggjhjfvll", CodeISO: null, Description: null }, title: "pays", isopen: true,})
        console.log(modaleEdit);

    }
    return (
        <div className="w-full h-fit flex flex-col items-center py-3">
            <div className="w-[95%] py-2">
                <H1 className="font-InterSemiBold font-semibold text-[32px]">Base</H1>
            </div>
            <div className="w-[95%] rounded-[12px] bg-white py-5 gap-5 flex flex-col items-center">
                <div className="w-full flex justify-between items-center px-7">
                    <P className="font-InterRegular font-normal text-[18px]">Liste des pays</P>

                    <Button onClick={() => handlesetnewotem()} className="bg-[#4763E4] text-white gap-2 p-[6px] rounded-[10px] flex items-center sv ">
                        <Span>Ajouter</Span>
                        <Icon name="plusicon" />
                    </Button>
                </div>

                <div className="w-[95%] border border-[#4763E480] rounded-[10px] flex items-center gap-3 py-3 px-4">
                    <Icon name="searchIcon" />
                    <Input className="placeholder:text-[#A1A1AA] font-InterRegular font-normal text-[14px]" placeholder="Vous cherchez un pays ..." />
                </div>

                <div className="w-full flex flex-col gap-2">
                    <div className="flex gap-1 px-10">
                        {array.map((item, index) => (
                            <div className="bg-white flex-1"><Span className="text-[#A1A1AA] text-[16px] font-medium font-InterMedium ">{item}</Span></div>
                        ))}
                    </div>
                    <div className="w-full">
                        {currentItems.map((item, inedx) => (
                            <div className="flex border-b-2 border-[#F4F4F5] px-10 pt-4 pb-2 ite">
                                <div className="flex-25%">{item.Dragonfly}</div>
                                <div className="flex-25%">{item.CodeISO}</div>
                                <div className="flex-25%">{item.Description}</div>
                                <div className="flex-25% flex gap-3 justify-center">
                                    <Button className="px-6 py-1 text-[14px] font-InterMedium font-medium rounded-[10px] border border-[#5C73DB] text-[#5C73DB]">Modifier</Button>
                                    <Button className="px-6 py-1 text-[14px] font-InterMedium font-medium rounded-[10px] bg-[#DC2626] text-white">Supprimer</Button>
                                </div>
                            </div>
                        ))}
                    </div >


                    <div className="flex justify-between w-full items-center pl-5 pt-10 pr-16">
                        <div className="font-InterRegular font-normal text-[16px] text-[#4763E4]">
                            {paies.length} pays
                        </div>

                        <ReactPaginate
                            breakLabel="..."
                            nextLabel=">"
                            onPageChange={handlePageClick}
                            pageRangeDisplayed={2}
                            pageCount={pageCount}
                            previousLabel="<"
                            renderOnZeroPageCount={null}
                            className="flex border border-[#D4D4D8] rounded-[12px] overflow-hidden paginate"
                            activeClassName="activepaginate"
                        />
                    </div>


                </div>
            </div>
        </div>
    )
}
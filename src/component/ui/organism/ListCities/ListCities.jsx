import { methodes } from "../../../../Chore/Array/Array";
import Button from "../../atom/button/Button";
import Icon from "../../atom/icon/Icon";
import Input from "../../atom/input/Input";
import P from "../../atom/p/P";
import Span from "../../atom/span/Span";

export default function ListCities() {
    const array = ["Libellé", "Description", "Actions"]

    return (
        <div className="w-1/2 flex items-center justify-end gap-4">
            <div className="w-[95%] h-full bg-white flex flex-col gap-4 px-6 py-3 rounded-[12px]">
                <div className="w-full flex justify-between items-center">
                    <P className="font-InterRegular font-normal text-[18px]">Liste des villes</P>

                    <Button className="bg-[#4763E4] text-white gap-2 p-[6px] rounded-[10px] flex items-center sv">
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
                        {methodes.map((item, inedx) => (
                            <div className="w-full flex border-b-2 border-[#F4F4F5] pt-4 pb-2 ">
                                <div className="flex-33%">{item.Dragonfly}</div>
                                <div className="flex-33%">{item.Description}</div>
                                <div className="flex-33% flex gap-3 justify-center">
                                    <Button className="py-2 px-3 text-[14px] font-InterMedium font-medium rounded-[10px] border border-[#5C73DB] text-[#5C73DB]">Modifier</Button>
                                    <Button className="py-2 px-3 text-[14px] font-InterMedium font-medium rounded-[10px] bg-[#DC2626] text-white">Supprimer</Button>
                                </div>
                            </div>
                        ))}
                    </div >


                    {/* <div className="flex justify-between w-full items-center pl-5 pt-10 pr-16">
                        <div className="font-InterRegular font-normal text-[16px] text-[#4763E4]">
                            {paies.length} pays
                        </div>

                        <ReactPaginate
                        breakLabel="..."
                        nextLabel=">"
                        onPageChange={handlePageClick}
                        pageRangeDisplayed={5}
                        pageCount={pageCount}
                        previousLabel="<"
                        renderOnZeroPageCount={null}
                        className="flex border border-[#D4D4D8] rounded-[12px] overflow-hidden paginate"
                        activeClassName="activepaginate"
                    />
                    </div> */}


                </div>
            </div>
        </div>
    )
}
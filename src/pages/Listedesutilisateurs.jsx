import H1 from '../component/ui/atom/h1/H1'
import Input from '../component/ui/atom/input/Input'
import Icon from '../component/ui/atom/icon/Icon'
import Button from '../component/ui/atom/button/Button'
import { users } from '../Chore/Array/Array'
import { HeaderTitle } from '../Chore/Array/HeaderTitle'
import P from '../component/ui/atom/p/P'
import React, { useEffect, useState } from 'react'
import ReactPaginate from 'react-paginate'
import { Link } from 'react-router-dom'
import {useLocalStorage} from '../hooks/useLocalStorage'
export default function Listedes() {
    useEffect(()=>{
        const [items , seItems] = useLocalStorage("myitems",users);
    },[])
    const [page, setPage] = useState(0)
    const AllPage = 4
    const End = page + AllPage
    const AllUser = (Array.isArray(items) ? items : []).filter(user => user.role === 'user')
    const CourrentPage = AllUser.slice(page, End)
    const PageCount = AllUser ? Math.ceil(AllUser.length / AllPage) : 0
    const handeCLick = (event) => {
        const newOffset = (event.selected * AllPage) % AllUser.length;
        setPage(newOffset)
    }
    const removeHandle = (removeItem) =>(
        seItems(prev=>prev.filter((item)=> item.id !==removeItem.id))
    )
    console.log(removeHandle);
    
    return (
        <>
            <div className='w-full'>
                <div className='mt-7 '>
                    <div>
                        <H1 className={`text-2xl font-InterReguler font-semibold`}>Configuration</H1>
                    </div>
                    <div className='flex border-[1px] border-[#4763E4] rounded-[10px] h-[50px] items-center gap-3 pl-3 mt-3 '>
                        <Icon name={'search'} />
                        <Input type={'text'} placeholder={'Vous cherchez quel utilisateur...'} className={'w-full placeholder:font-InterReguler placeholder:text-sm focus:outline-none placeholder:font-normal '} />
                    </div>
                    <div className='mt-3'>
                        <Button className={`bg-[#4763E4] text-[#FFFFFF] flex justify-center items-center w-52 h-12 rounded-xl font-InterReguler text-base gap-3 `}>Ajouter un utilisateur <Icon name={'plus'} /></Button>
                    </div>
                    <div className='flex ml-8 mt-12 w-[1100px]  '>
                        {HeaderTitle.map((item, index) => (
                            <React.Fragment key={index}>
                                <div className='flex'>
                                    <div className='flex  gap-36'>
                                        <P className={'flex w-[60px] '}>{item.name}</P>
                                        <P className={'flex w-[60px] '}>{item.smallname}</P>
                                        <P className={'flex w-[60px] '}>{item.email}</P>
                                        <P className={'flex w-[60px] '}>{item.phone}</P>
                                        <P className={'flex w-[60px] '}>{item.status}</P>
                                        <P className={'flex w-[60px] '}>{item.action}</P>
                                    </div>
                                </div>
                            </React.Fragment>
                        ))}
                    </div>
                    <div className='flex justify-start items-start gap-7 flex-col mt-7 w-[1100px] ml-8'>
                        {CourrentPage.map((item, index) => (
                            <React.Fragment key={index}>
                                <div className='flex justify-start items-start  gap-[144px] pb-6 border-b w-[1100px] border-[#F4F4F5]'>
                                    <div className='flex w-[60px] InterLight font-normal text-sm text-[#27272A]'>
                                        <P>{item.name}</P>
                                    </div>
                                    <div className='flex w-[60px] InterLight font-normal text-sm text-[#27272A]'>
                                        <P>{item.smallname}</P>
                                    </div>
                                    <div className='flex w-[60px] InterLight font-normal text-sm text-[#27272A]'>
                                        <P>{item.email}</P>
                                    </div>
                                    <div className='flex w-[60px] InterLight font-normal text-sm text-[#27272A]'>
                                        <P>{item.numberphone}</P>
                                    </div>
                                    <div className={`flex w-[60px] justify-center items-center rounded-xl ${item.textcolor} ${item.bgstatus}`}>
                                        <P>{item.status}</P>
                                    </div>
                                    <div className='flex gap-2 w-[60px]'>
                                        <Button className={'border-[2px] rounded-xl border-[#5C73DB]  font-medium text-xs p-[7px]'}><Link to={`/utilisateurs/${item.id}`}> Suspendre</Link></Button>
                                        <Button onClick={()=>removeHandle(item)} className={'bg-[#DC2626] text-[#FFFFFF] rounded-xl InterLight font-medium text-xs p-[7px]'}><Link>Supprimer</Link> </Button>
                                    </div>
                                </div>
                            </React.Fragment>
                        ))}
                    </div>
                    <div className="mt-7 mb-7">
                        <ReactPaginate

                            previousLabel={'<'}
                            nextLabel={'>'}
                            breakLabel={'...'}
                            initialPage={0}
                            pageCount={PageCount}
                            marginPagesDisplayed={1}
                            pageRangeDisplayed={2}
                            onPageChange={handeCLick}
                            className="flex justify-center   pagination"
                            containerClassName="pagination flex justify-center text-[#FFB800]"
                            pageClassName="flex text-[#00000099] h-[35px] items-center w-[35px] justify-center border-[1px]   border-[#D4D4D8]"
                            pageLinkClassName="flex"
                            previousClassName="text-[#71717A] border-[1px]   border-[#D4D4D8]  w-[35px] h-[35px] flex justify-center items-center"
                            nextClassName="text-[#71717A] border-[1px]   border-[#D4D4D8] w-[35px] h-[35px] flex justify-center items-center"
                            activeClassName="text-[#FFFFFF] bg-[#4763E4] border-none "
                            activeLinkClassName="text-[#FFFFFF] bg-[#4763E4] border-none"
                            renderOnZeroPageCount={null}

                        />
                    </div>
                </div>
            </div>
        </>
    )
}
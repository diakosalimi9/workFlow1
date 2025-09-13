import H1 from '../component/ui/atom/h1/H1'
import Input from '../component/ui/atom/input/Input'
import Icon from '../component/ui/atom/icon/Icon'
import Button from '../component/ui/atom/button/Button'
export default function Listedes() {
    return (
        <>
            <div>
                <div className='mt-7'>
                    <div>
                        <H1 className={`text-2xl font-InterReguler font-semibold`}>Configuration</H1>
                    </div>
                    <div className='flex border-[1px] border-[#4763E4] rounded-[10px] h-[50px] items-center gap-3 pl-3 mt-3 '>
                        <Icon name={'search'}/>
                        <Input type={'text'} placeholder={'Vous cherchez quel utilisateur...'} className={'w-full placeholder:font-InterReguler placeholder:text-sm focus:outline-none placeholder:font-normal '}/>
                    </div>
                    <div className='mt-3'>
                        <Button className={`bg-[#4763E4] text-[#FFFFFF] flex justify-center items-center w-52 h-12 rounded-xl font-InterReguler text-base gap-3 `}>Ajouter un utilisateur <Icon name={'plus'}/></Button>
                    </div>
                </div>
            </div>
        </>
    )
}
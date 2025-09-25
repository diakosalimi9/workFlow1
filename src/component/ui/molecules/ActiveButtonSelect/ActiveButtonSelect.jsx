import { ActiveBtn } from "../../../../context/ActiveButtonControle"
import Button from "../../atom/button/Button"

const AllButton = [
    {type:'first',text:'Société'},
    {type:'two',text:'Commissaires contrôleurs'},
    {type:'three',text:'CRCA'},
    {type:'four',text:'Paramètres de contrôle'},
]
export default function ActiveButtonSelect(){
    const {active , setActive} = ActiveBtn()
    return(
        <div>
            <div className="flex gap-7 border-b border-[#E4E4E7]  ">
                {AllButton.map((item , index)=>(
                    <Button key={index} className={`${active === item.type ? 'font-InterMedium font-medium transition-all duration-200 text-[#4763E4] border-b-2 border-[#4763E4] pb-3 ' : 'font-InterReguler font-normal text-[#71717A] pb-3'}`} onClick={()=>setActive(item.type)}>
                        {item.text}
                    </Button>
                ))}
            </div>

        </div>
    )
}
import { FirstArray } from "../../../../Chore/Array/FirstArray"
import { ActiveBtn } from "../../../../context/ActiveButtonControle"


export default function FirstShow(){
    const {active} = ActiveBtn()

    return(
        <div>
            {active === 'first' &&(
                <div>
                    {FirstArray.map((item,index)=>(
                        <div>
                            
                        </div>
                    ))}
                </div>
            )}

        </div>
    )
}
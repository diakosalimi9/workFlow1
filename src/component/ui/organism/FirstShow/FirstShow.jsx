import { ActiveBtn } from "../../../../context/ActiveButtonControle"
import {FirstArray} from '../../../../Chore/Array/FirstArray'

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
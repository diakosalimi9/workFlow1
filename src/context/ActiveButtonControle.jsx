import { createContext, useContext, useState } from "react";

const myContext = createContext()
function ActiveButtonControl ({children}){
    const [active , setActive] = useState('first')
    return(
        <myContext.Provider value={{active , setActive}}>
            {children}
        </myContext.Provider>
    )
}
export default ActiveButtonControl
export const ActiveBtn = ()=> useContext(myContext)
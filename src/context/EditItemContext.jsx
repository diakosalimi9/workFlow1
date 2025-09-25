import { Field } from "formik"
import { createContext, useContext, useState } from "react"

const creatcontext = createContext()
export default function EditItemContext({ children }) {
    const [modaleEdit, setModaleEdit] = useState({isopen:false,fields:null,title:null})
    return (
        <creatcontext.Provider value={{modaleEdit,setModaleEdit}}>
            {children}
        </creatcontext.Provider>
    )
}
export const useEdit = () => useContext(creatcontext)
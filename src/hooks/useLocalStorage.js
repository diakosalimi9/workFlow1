import { useEffect, useState } from "react"

export const useLocalStorage = (key, defaultValue) => {
    const [localStorafeValue, seLocalStorafeValue] = useState(() => {
        const data = localStorage.getItem(key)
        const initialValue = JSON.parse(data)
        return initialValue || defaultValue
    })
    useEffect(() => {
        localStorage.setItem(key, JSON.stringify(localStorafeValue))
    }, [key, localStorafeValue])
    const updateItem = (id,updates)=>{
        seLocalStorafeValue(prev =>Array.isArray(prev)?prev.map(item=>item.id === id ? {...item, ...updates} : item):prev)
    }
    return [localStorafeValue, seLocalStorafeValue , updateItem]
}
// const [s,sets]=useLocalStorage("hhh",lll)
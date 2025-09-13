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
    return [localStorafeValue, seLocalStorafeValue]
}
// const [s,sets]=useLocalStorage("hhh",lll)
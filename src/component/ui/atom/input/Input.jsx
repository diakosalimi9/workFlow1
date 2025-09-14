export default function Input({ type, value, className, onchange, onBlur, onFocus, placeholder, name }) {
    return <input type={type} className={className} value={value} onChange={onchange} onBlur={onBlur} onFocus={onFocus} placeholder={placeholder} name={name} />
}
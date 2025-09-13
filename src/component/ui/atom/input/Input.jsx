export default function Input({ type, value, className, onchange, onBlur, onFocus, placeholder, name, id, checked }) {
    return <input type={type} className={className} value={value} onChange={onchange} onBlur={onBlur} onFocus={onFocus} placeholder={placeholder} name={name} id={id} checked={checked} />
}
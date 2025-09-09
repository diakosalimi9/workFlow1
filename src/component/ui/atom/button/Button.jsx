export default function Button({children, type, className, onClick}){
    return <button type={type} onClick={onClick} className={className}>{children}</button>
}
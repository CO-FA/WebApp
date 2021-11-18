

export default function Button({className,type="button",onClick, children,disabled}){
    return <>
            <button type={type} disabled={disabled} className={"btn  "+className} onClick={onClick}>{children}</button>
    </>
}
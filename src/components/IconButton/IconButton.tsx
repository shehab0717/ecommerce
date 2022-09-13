import { MouseEventHandler } from "react";

type props={
    className?: string,
    iconSrc: string,
    onClick: MouseEventHandler<HTMLButtonElement>,
    text?:string,
}

const IconButton = ({className, iconSrc, onClick, text}: props):JSX.Element => {
    return (
        <button className={`${className} text-sm inline-block`} onClick={onClick}>
            <img className="inline mr-3 w-4" src={iconSrc} />
            <span >{text}</span>
        </button>
    )
}

export default IconButton;
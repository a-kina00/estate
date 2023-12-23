import clsx from "clsx"

type Button = {
    text?: string
    buttonType?:  "button" | "submit" | "reset" | undefined
    buttonClass?: string
    onClick?: () => void
    disabled?: boolean
}

export default function Button({ text, buttonType='button', buttonClass, onClick, disabled }: Button) {
    return (
        <button
            type={buttonType}
            className={clsx('button text', buttonClass)}
            onClick={onClick}
            disabled={disabled}
        >
            <span className="text text_label">
                {text}
            </span>
        </button>
    )
}
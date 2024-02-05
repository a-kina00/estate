import { useState } from "react"
import clsx from "clsx"
import Icon from "./Icon"

type Input = {
    title?: string
    placeholder?: string
    onChange?: () => void
    disabled?: boolean
    error?: string
    options: string[]
}

export default function DropDownInput({ title, placeholder = '', onChange, disabled, error, options }: Input) {

    const [dropDownState, setDropDownState] = useState(false)
console.log(dropDownState);

    return (
        <div className="col col_start col_gap-1">
            <h2 className={clsx("text text_label input__title", disabled && 'input__title_disabled', error && 'text_warning')}>{title}</h2>
            <div className="input input__form drop-down" onClick={() => setDropDownState(!dropDownState)}>
                {dropDownState && options.map(option => <div className="col">{option}</div>)}
            </div>
        </div>
    )
}
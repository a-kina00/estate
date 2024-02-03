import { useState } from "react"
import clsx from "clsx"
import Icon from "./Icon"
import Trl from "../utils/trl"

export type DropDownInput = {
    title?: string
    currentValue?: string
    onValueChange: (value: string) => void
    disabled?: boolean
    error?: string
    options: string[]
    transparent?: boolean
}

export default function DropDownInputFilled({ title, currentValue, onValueChange, disabled, error, options, transparent }: DropDownInput) {

    const [dropDownState, setDropDownState] = useState(false)
// TODO: поправить отступ у инпута
    return (
        <div className="col col_start col_gap-1">
            <h2 className={clsx("text text_label input__title", disabled && 'input__title_disabled', error && 'text_warning')}>
                {title && Trl(title)}
            </h2>
            <div 
                className={clsx("drop-down col", transparent ? "drop-down_trantrasparent" : "drop-down_default")} 
                onClick={() => setDropDownState(!dropDownState)}
            >
                <div className="row">
                    <div 
                        className={clsx("drop-down__icon drop-down__icon_absolute", dropDownState &&'drop-down__icon_opened')} 
                        onClick={() => setDropDownState(!dropDownState)}
                    >
                        <Icon type={'arrowDown'}/>
                    </div>
                    <p className="text drop-down__option drop-down__option_selected">{currentValue}</p>
                </div>
                {dropDownState && 
                    options.map((option, index) => 
                    <p 
                        key={index}
                        className="text drop-down__option"
                        onClick={()  => onValueChange(option)}
                    >
                        {Trl(option)}
                    </p>)}
            </div>
        </div>
    )
}
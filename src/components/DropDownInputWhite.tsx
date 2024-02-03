import { useState } from "react"
import clsx from "clsx"
import Icon from "./Icon"
import Trl from "../utils/trl"

import type { DropDownInput } from "./DropDownInputFilled"

export default function DropDownInputWhite({ title, currentValue, onValueChange, disabled, error, options, transparent }: DropDownInput) {

    const [dropDownState, setDropDownState] = useState(false)

    return (
        <div className="col col_start col_gap-1">
            <div className="row row_start row_gap-4">
                <h2 className={clsx("text text_label input__title", disabled && 'input__title_disabled', error && 'text_warning')}>
                    {title && Trl(title)}
                </h2>
                <div 
                    className={clsx("drop-down__icon", dropDownState &&'drop-down__icon_opened')}
                    onClick={() => setDropDownState(!dropDownState)}
                >
                    <Icon type={'arrowUp'}/>
                </div>
            </div>
            <div className={clsx("drop-down drop-down_white col", dropDownState && 'drop-down_white_active', transparent && "drop-down_trantrasparent")} 
                onClick={() => setDropDownState(!dropDownState)}
            >
                <p className="text drop-down__option drop-down__option_selected">{currentValue}</p>
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
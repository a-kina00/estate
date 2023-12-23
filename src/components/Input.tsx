import clsx from "clsx"
import Button from "./Button"

type Input = {
    title?: string
    placeholder?: string
    inputClass?: string
    inputType?: string
    onChange?: () => void
    disabled?: boolean
    error?: string
    showButton?: {
        show: boolean
        text?: string
    }
}

export default function Input({ title, placeholder = '', inputClass, inputType = 'text', onChange, disabled, error, showButton }: Input) {
    return (
        <div className="col col_start col_gap-1">
            <h2 className={clsx("text text_label input__title", disabled && 'input__title_disabled', error && 'text_warning')}>{title}</h2>
            <form className="input-wrapper">
                <input
                    type={inputType}
                    className={clsx('input input__form', inputClass, disabled && 'input_disabled', !!error && 'input_error')}
                    placeholder={placeholder}
                    onChange={onChange}
                    disabled={disabled}
                />
                {showButton?.show &&
                    <button type='button' className="button input__button">
                        {showButton.text}
                    </button>
                }
            </form>
            <span className="text text_warning-sub">{error}</span>
        </div>
    )
}
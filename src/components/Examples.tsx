import Button from "./Button";
import Input from "./Input";
import DropDownInput from "./DropDownInput";

const DropDownExamples = ['option-1', 'option-2', 'option-3', 'option-4', 'option-5']

export default function Examples() {
    return (<div className="page-content col col_start col_gap-20">
        <div className="col col_start col_gap-6">
            <h1 className="text">BUTTONS</h1>
            <hr className="line" />
            <div className="row row_start row_gap-4">
                <p className="text text_label">main</p>
                <Button text="active" />
                <Button text="disabled" disabled />
            </div>
            <div className="row row_start row_gap-4">
                <p className="text text_label">links</p>
                <a className="link" title="link">Link</a>
                <a className="link link_disabled" title="disabled">Disabled</a>
            </div>
        </div>
        <div className="col col_start col_gap-6">
            <h1 className="text">INPUTS</h1>
            <hr className="line" />
            <div className="row row_start row_gap-4">
                <Input title="Active" placeholder="Placeholder active" />
                <Input title="Disabled" placeholder="Placeholder disabled" disabled />
                <Input title="Error" placeholder="Placeholder error" error="error message" />
                <Input title="Input with a button" placeholder="Placeholder with a button" showButton={{ show: true, text: '+' }} />
            </div>
            <div>
                <DropDownInput
                    title="Drop down"
                    options={DropDownExamples}
                />
            </div>
        </div>
    </div>
    )
}
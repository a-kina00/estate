import { useState } from "react";

import Button from "./Button";
import Input from "./Input";
import DropDownInputFilled from "./DropDownInputFilled";
import DropDownInputWhite from "./DropDownInputWhite";

const DropDownExamples = ['option-1', 'option-2', 'option-3', 'option-4', 'option-5']

export default function Examples() {
    const [currentValue1, setCurreurrentValue1] = useState('initial')
    const [currentValue2, setCurreurrentValue2] = useState('initial')

    return (<div className="page-content col col_start col_gap-20">
        <div className="col col_start col_gap-6">
            <h1 className="text text_uppercase">typography</h1>
            <hr className="line" />
            <div className="row row_start row_gap-4">
                <p className="text">default</p>
                <p className="text text_assertive">assertive</p>
                <p className="text text_label">label</p>
            </div>
        </div>
        <div className="col col_start col_gap-6">
            <h1 className="text text_uppercase">buttons</h1>
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
            <h1 className="text text_uppercase">inputs</h1>
            <hr className="line" />
            <div className="row row_start row_align-start  row_gap-4">
                <Input title="Active" placeholder="Placeholder active" />
                <Input title="Disabled" placeholder="Placeholder disabled" disabled />
                <Input title="Error" placeholder="Placeholder error" error="error message" />
                <Input title="Button" placeholder="Placeholder with a button" showButton={{ show: true, text: '+' }} />
            </div>
            <div className="row row_start row_align-start row_gap-4">
                <DropDownInputFilled
                    title="Drop down blue"
                    options={DropDownExamples}
                    currentValue={currentValue1}
                    onValueChange={value => setCurreurrentValue1(value)}
                />
                <DropDownInputWhite
                    title="Drop down white"
                    options={DropDownExamples}
                    currentValue={currentValue2}
                    onValueChange={value => setCurreurrentValue2(value)}
                />
            </div>
        </div>
    </div>
    )
}
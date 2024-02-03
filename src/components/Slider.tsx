import { useRef } from "react"

import Icon from "./Icon"

import { JsxElement } from "typescript"

type Slider = {
    elements:  JsxElement[]
}

export default function Slider({elements}: Slider) {
    const container = useRef()

    const handleSlide = (direction: number) => { {
        return direction
    }}

    return <div>
        <div>
            <span 
                onClick={() => handleSlide(-1)}
            >
                <Icon type="arrowLeft"/>
            </span>
            <span
                onClick={() => handleSlide(1)}
            >
                <Icon type="arrowRight"/>
            </span>
        </div>

        <div 
            className="row row_nowrap"
            ref={container.current}
        >
            {elements.map(element => 
                <>
                    {element}
                </>
            )}
        </div>
    </div>
}
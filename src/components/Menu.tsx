import { useState } from "react"

import Icon from "./Icon"
import DropDownInputFilled from "./DropDownInputFilled"
import Trl from "../utils/trl"

import { languages, defaultLanguage } from "../utils/const"

export default function Menu() {
    //TODO: изменить язык и хардкод элементов меню
    const [currentLanguage, setCurrentLanguage] = useState(defaultLanguage)
    const el = [
        {
            'title': 'Купить',
            'path':'buy'
        }, 
        {
            'title': 'Продать',
            'path':'sell'
        }, 
        {
            'title': 'О нас',
            'path':'about'
        }, 
        {
            'title': 'Контакты',
            'path':'contacts'
        }
    ]

    const goTo = (path: string) =>  {
        if (path == 'buy') return
        document.getElementById(path)?.scrollIntoView({behavior: 'smooth'})
    }
// TODO: перепеределать через гриды
    return <header className="menu row row_between">
        <Icon type="logo" className="icon icon_logo hoverable"/>
        <div className="row row_between">
            {el.map((element, index) => 
                <a 
                    key={index}
                    className='text text_light text_bold text_uppercase text_clickable'
                    onClick={() => goTo(element.path)}
                >
                    {Trl(element.title)}
                </a>)
            }
        </div>
{/* TODO: избавиться от стайл */}
        <span style={{width:'400px'}}>
            <DropDownInputFilled
                currentValue={currentLanguage}
                onValueChange={setCurrentLanguage}
                options={languages}
                transparent
            />
        </span>
    </header>
}
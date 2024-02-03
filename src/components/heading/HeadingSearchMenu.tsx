import { useState } from "react"

import Icon from "../Icon"
import DropDownInputWhite from "../DropDownInputWhite"

const DropDownExamples = ['option-1', 'option-2', 'option-3', 'option-4', 'option-5']

export default function HeadingSearchMenu() {
  const [currentValue2, setCurreurrentValue2] = useState('initial')

    return <section className='search-menu'>
      {/* <DropDownInputWhite
        title="Drop down white"
        options={DropDownExamples}
        currentValue={currentValue2}
        onValueChange={value => setCurreurrentValue2(value)}
      /> */}
        <button className='search-menu__button hoverable'>
          <Icon type="search" className="icon icon_extra-large"/>
        </button>
      </section>
  }
import { useState, useEffect } from "react"

//import '../../public/textes'
import { defaultLanguage } from "./const"

const currentLanguage = defaultLanguage

export default function Trl(text: string) {
    if (currentLanguage == 'ru') return text
       // else translationMap[text][currentLanguage] ? translationMap[text][currentLanguage] : text
}
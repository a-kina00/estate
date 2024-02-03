import logo from '../assets/icons/icon.png'
import arrowUp from '../assets/icons/arrow-up.svg'
import arrowDown from '../assets/icons/arrow-down.svg'
import search from '../assets/icons/search.svg'

type Icons = {
    logo: string
    arrowDown: string
    arrowUp: string
    arrowLeft: string
    arrowRight: string
    search: string
}

type Icon = {
    type: keyof Icons
    className?: string
}

const icons = {
    logo: logo,
    arrowUp: arrowUp,
    arrowDown: arrowDown,
    search: search
} as Icons

export default function Icon({ type, className }: Icon) {
    return (
        <img 
            className={className ? className : 'icon icon_default'}
            src={icons[type]}
        />
    )
}
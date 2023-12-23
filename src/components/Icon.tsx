type Icon = {
    type: string
}

export default function Icon({ type, ...props }: Icon) {
    return (
        <svg {...props}>
            <use xlinkHref={`/assets/sprite.svg#${type}-usage`}/>
        </svg>
    )
}
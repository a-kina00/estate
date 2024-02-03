//TODO: протипизировать
type DropBox = {
    onChange: (item: any) => void
}

export default function DropBox({onChange}: DropBox) {
    return <input 
    //TODO: добавить placeholder
        type='drop-area'
        onChange={event => onChange(event)}
    />
}
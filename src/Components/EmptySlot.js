import { useEffect } from 'react'
import MoleHill from '../molehill.png'

// declare useEffect
const EmptySlot = (props) => {

    // define seconds, timer with setTimeout, props, clearTimeout
    useEffect(() => {
        let randSeconds = Math.ceil(Math.random() * 5000)
        let timer = setTimeout(() => {
            props.toggle(true)
        }, randSeconds)
        return () => clearTimeout(timer)
    })

    return (
        <div>
            <img style={{'width': '20vw'}} src={MoleHill} />
        </div>
    )
}

export default EmptySlot
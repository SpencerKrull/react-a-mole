import { useState } from 'react'
import Mole from './Mole'
import EmptySlot from './EmptySlot'

// set state variable
const MoleContainer = (props) => {
    let [theMole, setTheMole] = useState(false)

    // bop the mole
    const handleClick = (e) => {
        props.setScore(props.score + 1)
        setTheMole(false)
    }

    // display component
    let displayMole = theMole ? <Mole setScore={props.setScore} toggle={setTheMole} handleClick={handleClick} /> : <EmptySlot toggle={setTheMole} />

    // return value
    return (
        <div style={{'display': 'inline-block', 'width': '20vw'}}>
            {displayMole}
        </div>
    )
}

export default MoleContainer
import React, { useRef, useState } from 'react'
import { Modal } from '../Modal/Modal'
import s from './App.module.css'

export const App = () => {
    const [isClicked, setIsClicked] = useState(false)

    return (
        <div>
            <button
                onClick={ () => setIsClicked(!isClicked)}
            >open modal</button>

            { isClicked && <Modal close={setIsClicked} /> }
        </div>
    )
}

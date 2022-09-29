import React from 'react'
import s from './Modal.module.css'

export const Modal = ({close}) => {
    return (
        <div
            className={s.wrapper}
            onClick={
                (e) => {
                    if(e.target.classList.contains(s.wrapper)){
                        close(false)
                    }
                }
            }
        >
            <div className={s.content}>Hello world</div>
        </div>
    )
}

import React from 'react'
import women from '../../assets/img/image.jpg'
import './App.css'

export const App = () => {
    const [text, setText] = React.useState('')
    const [todos, setTodos] = React.useState([])

    const changeText = (e) => {
        setText(e.target.value)
    }

    const addTodo = () => {
        setTodos( [...todos, text] )
        setText('')
    }

    return (
        <div>
            <input 
                type="text" 
                value={text}
                onChange={ changeText }
            />
            <button
                onClick={addTodo}
            >Add</button>

            {
                todos.map(todo => {
                    return <div>{todo}</div>
                })
            }

            <img src={women} width={50}  alt="" />
        </div>
    )
}

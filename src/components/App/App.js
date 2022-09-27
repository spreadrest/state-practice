import React from 'react'
import s from './App.module.css'

export const App = () => {
    const [text, setText] = React.useState('')
    const [todos, setTodos] = React.useState([])

    const changeText = (e) => {
        setText(e.target.value)
    }

    const addTodo = () => {
        const newTodo = {
            id: Date.now(),
            title: text,
            complete: false,
        }
        setTodos( [...todos, newTodo] )
        console.log(todos)
        setText('')
    }

    const changeComplete = (id) => {
        const newArr = todos.map(
            todo => {
                if(todo.id === id){
                    return {...todo, complete: !todo.complete}
                }
                return todo
            }
        )
        setTodos(newArr)
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
                    return (
                        <div>
                            <input 
                                type="checkbox" 
                                checked={todo.complete}
                                onChange={() => changeComplete(todo.id)}
                            />
                            <span
                                className={todo.complete ? `${s.text} ${s.active}` : s.text}
                            >{todo.title}</span>
                            <button
                                onClick = { () => {
                                    const filteredArr = todos.filter( item => {
                                        if(item.id !== todo.id){
                                            return item
                                        }
                                    })
                                    setTodos(filteredArr)
                                }}
                            >X</button>
                        </div>
                    )
                })
            }
        </div>
    )
}

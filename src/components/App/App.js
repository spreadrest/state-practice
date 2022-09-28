import React, { useRef } from 'react'
import s from './App.module.css'

export const App = () => {
    const [text, setText] = React.useState('')
    const [todos, setTodos] = React.useState([])

    const inputRef = useRef(null)
    

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

    const deleteTodo = (id) => {
        const filteredArr = todos.filter( todo => {
            if(todo.id !== id){
                return todo
            }
        })
        setTodos(filteredArr)
    }

    const keyHandler = (e) => {
        if(e.key === 'Enter'){
            addTodo()
        }
    }

    return (
        <div>
            <input 
                type="text" 
                value={text}
                onChange={ changeText }
                onKeyDown={ keyHandler }
                ref={inputRef}
            />
            <button
                onClick={addTodo}
            >Add</button>
            <button
                onClick={ () => inputRef.current.focus()}
            >focus</button>

            {
                todos.map(todo => {
                    return (
                        <div key={todo.id}>
                            <input 
                                type="checkbox" 
                                checked={todo.complete}
                                onChange={() => changeComplete(todo.id)}
                            />
                            <span
                                className={todo.complete ? `${s.text} ${s.active}` : s.text}
                            >{todo.title}</span>
                            <button
                                onClick = {() => deleteTodo(todo.id)}
                            >X</button>
                        </div>
                    )
                })
            }
        </div>
    )
}

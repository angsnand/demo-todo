// author: angshuman

import React from 'react'
import firebase from '../firebase'

export default function Form() {
    const [title, setTitle] = React.useState('')

    const handleOnChange = (e) => {
        setTitle(e.target.value)
    }

    const createTodo = () => {
        if (title === '') {
            alert('Heyy! Please feel free to type, we will not steal your wish')
            return
        }

        const todoRef = firebase.database().ref("Todo")
        const todo = {
            title,
            complete: false
        }

        todoRef.push(todo)

    }

    return (
        <div>
            <input type="text" onChange={handleOnChange} value={title} /> <br />
            <button onClick={createTodo}>Yes</button>
        </div>
    )
}

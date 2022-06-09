import { useState, useEffect } from 'react-state';

const TodoRestApi = () => {
    const [todo, setTodo] = useState('')
    const [isDone, setIsDone] = useState(false)
    const [isRemoved, setIsRemoved] = useState(false)

    const [todos, setTodos] = useState([])
    useEffect(() => {
        fetch('http://localhost:3001/todos')
        .then((res) => {
            return res.json()
        })
        .then((data) => {
            setTodos(data)
        })
    }, [todo, isDone, isRemoved, setIsDone])

    const handleInput = (e) => setTodo(e.target.value) // String

    const handleAdd = (e) => {
        e.preventDefault()
        if (todo === '') return
        fetch('http://localhost:3001/todos', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json'},
            body: JSON.stringify({
                id: todos.length + 1 + todo,
                title: todo, 
                isDone: false,
            }),
        })
    setTodo('')
    }

    // const
    const handleDelete = () => {
        setIsRemove(!isRemoved)
        todos.forEach((t) => {
            if ( t.isDone === true ) {
                fetch(`http://localhost:3001/todos/${t.id}`, {
                    method: 'DELETE',
                })
            }
        })
        setIsRemoved(!isRemoved)
    }

    //
    const toggleTodo = (id) => {
        // 
        //
        //
        //

        const todo = todos. find((td => td.id === id ))
    }
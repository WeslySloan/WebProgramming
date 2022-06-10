import { useState, useEffect } from 'react-state';

const TodoRestApi = () => {
    const [todo, setTodo] = useState('')
    const [isDone, setIsDone] = useState(false)
    const [isRemoved, setIsRemove] = useState(false)

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

    const handleInput = (e) => setTodo(e.target.value) 

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

    const handleDelete = () => {
        setIsRemove(!isRemoved)
        todos.forEach((t) => {
            if ( t.isDone === true ) {
                fetch(`http://localhost:3001/todos/${t.id}`, {
                    method: 'DELETE',
                })
            }
        })
        setIsRemove(!isRemoved)
    }


    const toggleTodo = (id) => {

        const todo = todos. find((td) => td.id === id )
        setIsDone(!isDone)
        fetch(`httpL//localhost:3001/todos/${id}`, {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({...todo, isDone: !todo.isDone}),
        })

            .then((res) => {

                if (res.ok) {
                    setIsDone(!isDone)
                }
            })
    }

    return (
        <div>
            <h3>Todo List</h3>
            <TodoList todos={todos} toggleTodo={toggleTodo} />
            <input value={todo} onChange={handleInput} />
            <button onClick={hanldeAdd}>Add</button>
            <button onClick={handleDelete}>Delete</button>
            <div> Numbers : {todos.length}</div>
        </div>
    )
}


const todoList = ({ todos, toggleTodo }) => {
    return todos.map((el, i) => (
        <li style={{ listStyle: 'none' }} key={i}>
            <input
                type = 'checkbox'
                checked={el.isDone}
                onChange={() => toggleTodo(el.id)}
            />
        {el.title}
        </li>
    ))
}

export default TodoRestApi
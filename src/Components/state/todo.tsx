import { Button } from 'primereact/button';
import { InputText } from 'primereact/inputtext';
import React, { useState } from 'react';

const Todo: React.FC = () => {
    const [todo, setTodo] = useState("")
    const [todos, setTodos] = useState<string[]>([])
    const handleAdd = () => {
        setTodos([...todos, todo])
        setTodo("")
    }
    const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setTodo(e.target.value)
    }
    return (
        <div>
            <InputText value={todo} onChange={onChange} />
            <Button label='add' onClick={handleAdd} />

            {todos.map((val, index) => {
                return (
                    <div style={{ display: 'flex' }}>
                        <p>{index}</p>
                        <p>{val}</p>
                    </div>
                )
            })}
        </div>
    )
}
export default Todo
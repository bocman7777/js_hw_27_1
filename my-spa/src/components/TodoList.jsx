import { useState, useEffect } from 'react';

export default function TodoList() {
    const [todos, setTodos] = useState(() => {
        const saved = localStorage.getItem('todos');
        return saved ? JSON.parse(saved) : [];
    });

    const [input, setInput] = useState('');

    useEffect(() => {
        localStorage.setItem('todos', JSON.stringify(todos));
    }, [todos]);

    const addTodo = (e) => {
        e.preventDefault();
        if (!input.trim()) return;
        setTodos(prev => [...prev, { id: Date.now(), text: input }]);
        setInput('');
    };

    const removeTodo = (id) => {
        setTodos(prev => prev.filter(todo => todo.id !== id));
    };

    return (
        <div>
            <form onSubmit={addTodo}>
                <input
                    type="text"
                    value={input}
                    onChange={e => setInput(e.target.value)}
                    placeholder="Додати TODO"
                />
                <button type="submit">Додати</button>
            </form>

            <ul>
                {todos.map(todo => (
                    <li key={todo.id}>
                        {todo.text} <button onClick={() => removeTodo(todo.id)}>Видалити</button>
                    </li>
                ))}
            </ul>
        </div>
    );
}

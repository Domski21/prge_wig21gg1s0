import React from 'react'
 
function TodoItem({ id, zadanie }) {
    console.log(id, zadanie)
    return (
        <div key={id}>Nr {id}. Opis zadania: {zadanie} 
            <button onclick=e =>console.log(e.target)} REMOVE </button>
        </div>

    )
}
 
export default TodoItem
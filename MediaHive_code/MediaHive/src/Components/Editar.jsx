import React, { useState } from "react";
import "../styles/Editar.css";

function Editar() {
    const [nombre, setNombre] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        localStorage.setItem('nombre', nombre);
    }

    return (
        <form onSubmit={handleSubmit}>
            <input type="text" value={nombre} onChange={(e) => setNombre(e.target.value)} />
            <button type="submit">Guardar</button>
        </form>
    );
}

export default Editar;
import React, { useState, useEffect  } from "react";
import { useNavigate } from 'react-router-dom';
import { useForm } from "react-hook-form";

import "../styles/Perfil.css";

function Perfil() {
    const { handleSubmit, formState: { errors }} = useForm();

    console.log(errors);

    const navigate = useNavigate();

    const onSubmit = handleSubmit(data => {
        console.log(data)
        if (Object.keys(errors).length === 0) {
          // Si no hay errores, redireccionamos a /Inicio y guardamos el nombre de usuario en localStorage
            localStorage.setItem('username', data.nombreUsuario);
            navigate(`/Inicio/${data.nombreUsuario}`);
        }
    })

    const [file, setFile] = useState();
    function handleChange(e) {
        console.log(e.target.files);
        setFile(URL.createObjectURL(e.target.files[0]));
    }

    const [username, setUsername] = useState('');

    // Supongamos que tienes una función para manejar la actualización del nombre de usuario
    const handleUsernameChange = (newUsername) => {
        setUsername(newUsername);
    };

    // Supongamos que tienes una función para actualizar el nombre de usuario
    const updateUsername = () => {
        // Aquí es donde actualizarías el nombre de usuario, por ejemplo, haciendo una solicitud a una API
        // Por ahora, solo vamos a cambiar el nombre de usuario a 'NuevoNombre'
        handleUsernameChange('NuevoNombre');
    };

    // Usamos useEffect para llamar a updateUsername cuando el componente se monta
    useEffect(() => {
        updateUsername();
    }, []); // Pasamos un array vacío como segundo argumento para que useEffect solo se ejecute una vez, cuando el componente se monta


    return (
        <div className="seccionPerfil">
            <div className="form-seccionPerfil">
                <h1>Perfil de usuario</h1>
                <div>
                    <h5 className="nombreActualizado">{username}</h5>
                </div>
                <form onSubmit={onSubmit}>
                    <div>
                        <label htmlFor="username">Nombre de usuario:</label>
                        <input
                            type="text"
                            id="username"
                            value={username}
                            onChange={e => setUsername(e.target.value)}
                            required
                        />
                    </div>
                    <div>
                        <label htmlFor="profile-image">Imagen de perfil:</label>
                        <input type="file" onChange={handleChange} />
                        <img src={file} />
                    </div>
                    
                    <button type="submit">Guardar cambios</button>
                </form>
            </div>
        </div>
    );
}

export default Perfil;
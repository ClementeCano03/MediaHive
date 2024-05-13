import React, { useState } from "react";
import "../styles/Perfil.css";

function Perfil() {
    const [username, setUsername] = useState(""); // Estado para el nombre de usuario
    const [profileImage, setProfileImage] = useState(null); // Estado para la imagen de perfil

    const handleUsernameChange = (event) => {
        setUsername(event.target.value);
    };

    const handleImageChange = (event) => {
        const imageFile = event.target.files[0];
        // Puedes realizar cualquier validación necesaria aquí
        setProfileImage(imageFile);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        // Aquí puedes enviar los datos actualizados al servidor, por ejemplo, a través de una solicitud HTTP
        // Puedes enviar el nuevo nombre de usuario (username) y la imagen de perfil (profileImage)
        console.log("Nombre de usuario actualizado:", username);
        console.log("Imagen de perfil actualizada:", profileImage);
        // Restablecer el formulario después de enviar los datos
        setUsername("");
        setProfileImage(null);
    };

    return (
        <div className="seccionPerfil">
            <div>
                <img src="profile-image"/>
            </div>
            <div className="form-seccionPerfil">
                <h1>
                    Perfil de usuario
                </h1>
                <form onSubmit={handleSubmit}>
                    <div>
                        <label htmlFor="username">Nombre de usuario:</label>
                        <input
                            type="text"
                            id="username"
                            value={username}
                            onChange={handleUsernameChange}
                            required
                        />
                    </div>
                    <div>
                        <label htmlFor="profile-image">Imagen de perfil:</label>
                        <input
                            type="file"
                            id="profile-image"
                            accept="image/*"
                            onChange={handleImageChange}
                        />
                    </div>
                    
                    <button type="submit">Guardar cambios</button>
                </form>
            </div>
        </div>
    );
}

export default Perfil;

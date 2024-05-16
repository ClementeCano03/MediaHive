import React, { useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom';
import { useForm } from "react-hook-form";
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import "../Styles/Perfil.css";

function Perfil() {
    const { handleSubmit, formState: { errors }, register } = useForm();
    const navigate = useNavigate();

    const [nombreUsuarioTemp, setNombreUsuarioTemp] = useState(localStorage.getItem('username') || '');
    const [nombreUsuario, setNombreUsuario] = useState(nombreUsuarioTemp);
    const [perfilURLTemp, setPerfilURLTemp] = useState(localStorage.getItem('profileImage') || '');
    const [perfilURL, setPerfilURL] = useState(perfilURLTemp);

    const onSubmit = handleSubmit(data => {
        if (Object.keys(errors).length === 0) {
            localStorage.setItem('username', nombreUsuarioTemp);
            localStorage.setItem('profileImage', perfilURLTemp);
            setNombreUsuario(nombreUsuarioTemp);
            setPerfilURL(perfilURLTemp);
            navigate(`/Inicio/${nombreUsuarioTemp}`);
        }
    });

    const handleChange = (e) => {
        const file = e.target.files[0];
        const imageURL = URL.createObjectURL(file);
        setPerfilURLTemp(imageURL);
    };

    const handleNombreChange = (e) => {
        setNombreUsuarioTemp(e.target.value);
    };

    const handleDeleteProfileImage = () => {
        setPerfilURL('');
        setPerfilURLTemp('');
    };

    const handleLogout = () => {
        localStorage.clear();
        navigate('/Inicio');
    };

    return (
        <div className="seccionPerfil-container">
            <link href='https://fonts.googleapis.com/css?family=Livvic' rel='stylesheet'></link>

            <div className="form-seccionPerfil-container">
                <h1 className="h1-perfil">Perfil de {nombreUsuario}</h1>

                <form onSubmit={onSubmit} className="form-perfil">

                    {perfilURLTemp !== '' ? <img src={perfilURLTemp} alt="Foto de perfil" className="perfil-image" /> : <AccountBoxIcon style={{ fill: "white" }} />}
                    <div className="inline-group">
                        <label htmlFor="profile-image" className="label-perfil">Seleccionar nueva imagen de perfil:</label>
                        <input type="file" onChange={handleChange} />
                    </div>

                    <div className="inline-group">
                        <button type="button" onClick={handleDeleteProfileImage}>Eliminar imagen de perfil</button>
                    </div>

                    <div className="inline-group">
                        <label htmlFor="username" className="label-perfil">Cambiar nombre de usuario:</label>
                        <input
                            type="text"
                            id="username"
                            value={nombreUsuarioTemp}
                            onChange={handleNombreChange}
                            {...register("nombreUsuario", {
                                required: {
                                    value: true,
                                    message: 'Nombre de usuario obligatorio'
                                },
                                maxLength: {
                                    value: 20,
                                    message: 'Nombre de usuario demasiado largo'
                                },
                                minLength: {
                                    value: 4,
                                    message: 'Nombre de usuario demasiado corto'
                                }
                            })}
                            className="input-perfil"
                        />
                        {
                            errors.nombreUsuario && <span className='span-crearcuenta'>{errors.nombreUsuario.message}</span>
                        }
                    </div>

                    <div className="inline-group">
                        <button type="submit" className="boton-perfil">Guardar cambios</button>
                        <button type="button" onClick={handleLogout} className="boton-perfil">Cerrar sesión</button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default Perfil;

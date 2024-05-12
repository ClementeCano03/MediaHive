import React from "react";
import '../styles/CrearCuenta.css';
import imagen from "../Images/MediaHive_icon.png";
import { useForm } from "react-hook-form";
import { useNavigate } from 'react-router-dom';

function CrearCuenta() {
  const { register, handleSubmit, formState: { errors }} = useForm();
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

  return (
    <div className="content-crear-cuenta">
      <link href='https://fonts.googleapis.com/css?family=Livvic' rel='stylesheet'></link>
      <div className="crear-cuenta-container">
        <img className="imagen-crear-cuenta" src={imagen} alt="Icono de MediaHive"/>
          <form onSubmit={ onSubmit } className="form-container">
            <label htmlFor="nombreUsuario" className="label-crear-cuenta">Nombre de usuario</label>
            <input
              type="text"
              name="nombreUsuario"
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
              className="input-crear-cuenta"
            />
            {
              errors.nombreUsuario && <span className='span-crearcuenta'>{errors.nombreUsuario.message}</span>
            }
            <label htmlFor="correoElectronico" className="label-crear-cuenta">Correo electrónico</  label>
            <input
              type="email"
              name="correoElectronico"
              {...register("correoElectronico", { 
                required: {
                  value: true,
                  message: 'Correo electrónico obligatorio'
                },
                pattern: {
                  value: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
                  message: 'Correo no válido'
                }
              })}
              className="input-crear-cuenta"
            />
            {
              errors.correoElectronico && <span className='span-crearcuenta'>{errors.correoElectronico.message}</span>
            }
            <label htmlFor="contrasena" className="label-crear-cuenta">Contraseña</label>
            <input
              type="password"
              name="contrasena"
              {...register("contrasena", { 
                required: {
                  value: true, 
                  message: 'Contraseña obligatoria'
               },
               minLength: {
                 value: 4,
                 message: 'Contraseña debe tener al menos 4 caracteres'
               },
               maxLength: {
                  value: 20,
                  message: 'Contraseña debe tener menos de 20 caracteres'
               }
              })}
              className="input-crear-cuenta"
            />
            {
              errors.contrasena && <span className='span-crearcuenta'>{errors.contrasena.message}</span>
            }
            
              <button
                type="submit"
                to="/Inicio"
                className="boton-aceptar">
                ACEPTAR
              </button>
          </form>
      </div>
    </div>
  );
}

export default CrearCuenta;
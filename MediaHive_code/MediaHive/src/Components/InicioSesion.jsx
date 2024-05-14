
import React, { useState, useEffect } from "react";
import "../styles/InicioSesion.css";

const InicioSesion = () => {
    const initialValues = { email: "", password: "" };
    const [formValues, setFormValues] = useState(initialValues);
    const [formErrors, setFormErrors] = useState({});
    const [isSubmitting, setIsSubmitting] = useState(false);

    const submit = () => {
        console.log(formValues);
    };

    //input change handler
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormValues({ ...formValues, [name]: value });
    };

    //form submission handler
    const handleSubmit = (e) => {
        e.preventDefault();
        setFormErrors(validate(formValues));
        setIsSubmitting(true);
    };

    //form validation handler
    const validate = (values) => {
        let errors = {};
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;

        if (!values.email) {
            errors.email = "No puede estar en blanco";
        } else if (!regex.test(values.email)) {
            errors.email = "Formato de correo electrónico no válido";
        }

        if (!values.password) {
            errors.password = "No puede estar en blanco";
        } else if (values.password.length < 4) {
            errors.password = "La contraseña debe tener más de 4 caracteres";
        }

        return errors;
    };

    useEffect(() => {
        if (Object.keys(formErrors).length === 0 && isSubmitting) {
            submit();
        }
    }, [formErrors]);

    return (
        <div className="container" id="inicioSesioncontainer">
            <div className="form-container-iniciosesion">
                <h1>Inicia sesión para continuar</h1>
                {Object.keys(formErrors).length === 0 && isSubmitting && (
                    <span>Formulario enviado con éxito</span>
                )}
                <form onSubmit={handleSubmit} noValidate>
                    <div>
                        <label htmlFor="email">Email</label>
                        <input
                            type="email"
                            name="email"
                            id="email"
                            value={formValues.email}
                            onChange={handleChange}
                        />
                        {formErrors.email && <span className="error-message">{formErrors.email}</span>}
                    </div>
                    <div>
                        <label htmlFor="password">Contraseña</label>
                        <input
                            type="password"
                            name="password"
                            id="password"
                            value={formValues.password}
                            onChange={handleChange}
                        />
                        {formErrors.password && <span className="error-message">{formErrors.password}</span>}
                    </div>
                    <button type="submit">Iniciar Sesión</button>
                </form>
            </div>
        </div>
    );
};

export default InicioSesion;

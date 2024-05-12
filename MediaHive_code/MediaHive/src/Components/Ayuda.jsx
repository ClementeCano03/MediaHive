import React from "react";
import "../styles/Ayuda.css";

function Ayuda() {
    return (

        <div className="ayuda">
            <a href="#quienes-somos" className="section-link">
                <section id="1quienes-somos">
                    <h2>1. ¿Quiénes somos?</h2>
                    {/* Contenido de "Quiénes somos" */}
                </section>
            </a>

            <a href="#manual-instruccion" className="section-link">
                <section id="2manual-instruccion">
                    <h2>2. Manual de instrucción para el novato</h2>
                    {/* Contenido del manual */}
                </section>
            </a>

            <a href="#musica" className="section-link">
                <section id="3musica">
                    <h2>3. Música</h2>
                    {/* Contenido de la sección de música */}
                </section>
            </a>

            {/* Más secciones con hipervínculos similares */}
            <a href="#peliculas" className="section-link">
                <section id="4peliculas">
                    <h2>4. Películas</h2>
                    {/* Contenido de la sección de películas */}
                    
                </section>
            </a>
            

            {/* Secciones de películas, como búsqueda y visualización de películas */}

            <a href="#series" className="section-link">
                <section id="5series">
                    <h2>5. Series</h2>
                    {/* Contenido de la sección de películas */}
                    
                </section>
            </a>

            {/* Secciones de series, como búsqueda y visualización de series */}
            <a href="#biblioteca" className="section-link">
                <section id="6biblioteca">
                    <h2>6. Biblioteca</h2>
                    {/* Contenido de la sección de películas */}
                    
                </section>
            </a>

            {/* Secciones de biblioteca, como visualización de libros */}
            <a href="#perfil" className="section-link">
                <section id="7perfil">
                    <h2>7. Perfil</h2>
                    {/* Contenido de la sección de películas */}
                    
                </section>
            </a>
        

        {/* Secciones de perfil, como visualización de información de perfil */}
    </div>
    );
}
    
export default Ayuda;
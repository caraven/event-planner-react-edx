import React from 'react';
import './EventPlanner.css'; // Import CSS file for styling
import Footer from './Footer';

const EventPlanner = () => {
    return (
        <div className="event-planner-container">
            <header>
                <h1>Bienvenidos a Event Planner</h1>
            </header>
            {/* Sección para describir el propósito o visión general de la app */}
            <section className="description">
                {/* Breve introducción o mensaje de marketing */}
                <p>
                    Planifica y organiza tus eventos sin esfuerzo con Event Planner.
                    Desde fiestas de cumpleaños hasta reuniones corporativas, te tenemos cubierto.
                </p>
                {/* Botón principal de llamada a la acción */}
                <button className='get-started-button'>Comenzar</button>
            </section>
            {/* Sección para listar o categorizar diferentes tipos de eventos */}
            <section className="events_categories">
                {/* Eventos sociales */}
                <ul>
                    <h2>Eventos Sociales:</h2>
                    <li>Fiestas de cumpleaños</li>
                    <li>Celebraciones de aniversario</li>
                    <li>Recepciones</li>
                    <li>Baby showers</li>
                    <li>Fiestas de graduación</li>
                    <li>Reuniones familiares</li>
                </ul>
                {/* Eventos de entretenimiento */}
                <ul>
                    <h2>Eventos de Entretenimiento</h2>
                    <li>Conciertos</li>
                    <li>Festivales musicales</li>
                    <li>Cine al aire libre</li>
                    <li>Shows de comedia</li>
                    <li>Exhibiciones de arte</li>
                    <li>Eventos culturales</li>
                </ul>
                {/* Eventos enfocados a la comunidad */}
                <ul>
                    <h2>Eventos Comunitarios:</h2>
                    <li>Eventos de recolección de fondos</li>
                    <li>Galas de caridad</li>
                    <li>Voluntariados</li>
                    <li>Fiestas de barrios</li>
                    <li>Festivales comunitarios</li>
                    <li>Celebraciones culturales</li>
                </ul>
            </section>
            {/* Sección para resaltar las características o funcionalidades de la app */}
            <section className="features">
                {/* Encabezado de la sección */}
                <h2>Características</h2>
                {/* Lista de características principales de la plataforma */}
                <ul>
                    <li>Fácil creación y manejo de eventos</li>
                    <li>Plantillas de ventos personalizables</li>
                    <li>Gestión del listado de invitados</li>
                    <li>Colaboración en tiempo real</li>
                    <li>Recordatorios y notificaciones</li>
                </ul>
            </section>
            {/* Sección para mostrar opiniones de usuarios o testimonios */}
            <section className="testimonials">
                {/* Encabezado de la sección */}
                <h2>Testimonios</h2>
                {/* Bloque de testimonios indivisuales*/}
                <div className='testimonial'>
                    <p>"Event Planner hizo que organizar mi boda fuera pan comido. ¡Lo recomiendo muchísimo!"</p>
                    <p className='author'>Emily Jhonson</p>
                </div>
                <div className='testimonial'>
                    <p>"Utilizo Event Planner para todos mis eventos corporativos. ¡Me ahorra muho tiempo y esfuerzo!"</p>
                    <p className='author'>John Smith</p>
                </div>
            </section>
            {/* Sección para proporcionar información de contacto o un formulario de contacto */}
            <section className="contact">
                {/* Encabezado de la sección */}
                <h2>Contáctanos</h2>
                {/* Formulario de contacto */}
                <form>
                    {/* Campo de entrada para el nombre*/}
                    <input type="text" placeholder="Nombre" />
                    {/* Campo de entrada para el correo electrónico */}
                    <input type="email" placeholder='Correo electrónico' />
                    {/* Área de texto para el mensaje */}
                    <textarea placeholder='Mensaje'></textarea>
                    {/* Botón de enviar */}
                    <button className='submit-button'>Enviar</button>
                    
                </form
            <Footer/>>
            </section>
        </div>
    );
};

export default EventPlanner;

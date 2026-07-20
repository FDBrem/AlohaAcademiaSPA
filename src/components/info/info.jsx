import "./Info.css";

const InfoAcademia =() => {
    return(
    <section className="info">
      <div className="info-content">

            <div className="info-left">
                
                <h1>
                    Entrena
                    <br />
                    Aprende
                    <br /> 
                    Pertenece
                </h1>

                    <p>
                        Brazilian Jiu-Jitsu para niños, jóvenes y adultos.<br />
                        Desarrollá confianza, disciplina y comunidad en<br />
                        un ambiente profesional donde cada alumno <br />
                        encuentra su lugar.
                    </p>

                    <div className="info-buttons">
                        <button className="info-btn">
                            Comenzá tu primera clase
                        </button>

                        <a href="#filosofia" className="info-link">
                            Nuestra filosofía →
                        </a>
                    </div>

                <div className="info-cards">

                        <div className="info-card">
                            <span>👨‍👩‍👧‍👦</span>

                            <h3>Niños y Adultos</h3>

                            <p>Clases adaptadas para todas las edades.</p>
                        </div>

                        <div className="info-card">
                            <span>🥋</span>

                            <h3>Todos los niveles</h3>

                            <p>Desde principiantes hasta competidores.</p>
                        </div>

                        <div className="info-card">
                            <span>🤝</span>

                            <h3>Comunidad</h3>

                            <p>Entrená en un ambiente de respeto y crecimiento.</p>
                        </div>
                </div>
            </div>
        </div>
    </section>
    
    );
};

export default InfoAcademia;
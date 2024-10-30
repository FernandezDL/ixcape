import "./footer.css";

export default function Footer(){
    return(
        <div className="footerMainContainer">
            <div className="contenido">
                <img src="img/header/logoLetras.svg" alt="Letras del logo" className="logoImg"/>

                <div className="columnas">
                    <div className="footer-column">
                        <p><u>Suscribete</u> nuestro boletín y recibe actualizaciones<br/> sobre rutas culturales, intercambios y eventos exclusivos.</p>
                        <p>© 2024 IXCAPE. TODOS LOS DERECHOS RESERVADOS. POLÍTICA DE PRIVACIDAD</p>
                    </div>

                    <div class="footer-column">
                        +502 1234-5678<br/>
                        INFO@IXCAPE.COM<br/>
                        CIUDAD DE GUATEMALA, GUATEMALA
                    </div>

                    <div class="footer-column">
                        AYUDA<br/>
                        PREGUNTAS FRECUENTES<br/>
                        TÉRMINOS Y CONDICIONES<br/>
                        POLÍTICA DE PRIVACIDAD
                    </div>

                    <div class="footer-column">
                        <p>SÍGUENOS EN:</p>
                        <img src="img/footer/socialMedia.svg" alt="iconos redes sociales" className="social-icons"/>
                    </div>
                </div>
            </div>
        </div>
    )
}
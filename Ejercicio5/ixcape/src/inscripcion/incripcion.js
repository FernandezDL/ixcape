import "./inscripcion.css";

export default function Inscripcion({onClose}){
    return(
        <div className="inscripcionMainContainer">
            <div className="formularioContainer">
                <button className="buttonContainer" onClick={onClose}></button>
                <div className="formularioHeader">FORMULACIO DE INSCRIPCIÓN</div>

                <div className="formularioBody">
                    <button className="pinkHalf">
                        <div className="flecha">
                            <img src="img/formulario/flechaBlanca.svg" alt="Flecha blanca" className="flechaImg"/>
                        </div>

                        <h1>SOLITO</h1>
                        <p>INDIVIDUAL</p>
                    </button>
                    <button className="blueHalf">
                        <div className="flecha">
                            <img src="img/formulario/flechaBlanca.svg" alt="Flecha blanca" className="flechaImg"/>
                        </div>

                        <h1>CON CUATES</h1>
                        <p>GRUPO - HASTA 5 PERSONAS</p>
                    </button>
                </div>
            </div>
        </div>
    )
}
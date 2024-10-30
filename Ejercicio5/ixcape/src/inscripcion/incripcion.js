import "./inscripcion.css";
import Datos from "../datos/datos";
import { useState } from "react";
import "../calendario/calendario.css";

export default function Inscripcion({onClose}){
    const [showDatos, setShowDatos] = useState(false);

    const handleClickDatos = () => {
        setShowDatos(true);
    };
    
    const handleCloseDatos = () => {
        setShowDatos(false);
    }; 

    return(
        <div className="inscripcionMainContainer">
            <div className="formularioContainer">
                <button className="buttonContainer" onClick={onClose}></button>
                <div className="formularioHeader">FORMULACIO DE INSCRIPCIÓN</div>

                <div className="formularioBody">
                    <button className="pinkHalf" onClick={handleClickDatos}>
                        <div className="flecha">
                            <img src="img/formulario/flechaBlanca.svg" alt="Flecha blanca" className="flechaImg"/>
                        </div>

                        <h1>SOLITO</h1>
                        <p>INDIVIDUAL</p>
                    </button>
                    <button className="blueHalf" onClick={handleClickDatos}>
                        <div className="flecha">
                            <img src="img/formulario/flechaBlanca.svg" alt="Flecha blanca" className="flechaImg"/>
                        </div>

                        <h1>CON CUATES</h1>
                        <p>GRUPO - HASTA 5 PERSONAS</p>
                    </button>
                </div>
            </div>

            {showDatos && (
                <div className="culturaContainer show">
                    <Datos onClose={handleCloseDatos} />
                </div>
            )}
        </div>
    )
}
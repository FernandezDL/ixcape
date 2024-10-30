import "./enero.css";
import "../calendario/calendario.css";
import React, {useState} from "react";
import Inscripcion from "../inscripcion/incripcion";

export default function Enero({onClose}){
    const [showInscripcion, setShowInscripcion] = useState(false);

    const handleClickInscripcion = () => {
        setShowInscripcion(true);
    };

    const handleCloseInscripcion = () => {
        setShowInscripcion(false);
    };

    return(
        <div className="eneroMainContainer">
            <div className="cardContainer">
                <button className="eneroButtonContainer" onClick={onClose}></button> {/* Botón de cerrar */}
                
                <div className="firstRowContainer">
                    <div>
                        ENERO <br/>
                        <span className="pinkText">2024</span>
                    </div>
                    
                    <button className="inscripcionBttn" onClick={handleClickInscripcion}>INSCRIPCIÓN</button>
                </div>

                <div className="filas">
                    <div className="fila yellowEnero">
                        <button className="cuadrado cA" onClick={handleClickInscripcion}>18</button>
                        AÑO NUEVO MAYA
                    </div>
                    <div className="fila blue">
                        <button className="cuadrado cB" onClick={handleClickInscripcion}>23</button>
                        DANZA DE LOS <br/> NEGRITOS
                    </div>
                    <div className="fila pink">
                        <button className="cuadrado cP" onClick={handleClickInscripcion}>06</button>
                        FERIA PATRONAL <br/> DE SAN GASPAR
                    </div>
                    <div className="fila greenEnero">
                        <button className="cuadrado cG" onClick={handleClickInscripcion}>14</button>
                        CAMPAMENTO <br/> DE TEJIDOS
                    </div>
                </div>
            </div>

            {showInscripcion && (
                <div className="culturaContainer show">
                    <Inscripcion onClose={handleCloseInscripcion} />
                </div>
            )}
        </div>
    )
}

import "./calendario.css";
import Enero from "../enero/enero";
import React, {useState} from "react";

export default function Calendario({onClose}){
    const [showEnero, setShowEnero] = useState(false);

    const handleClickEnero = () => {
        setShowEnero(true);
    };

    const handleCloseEnero = () => {
        setShowEnero(false);
    };

    return(
        <div className="CalendarioMainContainer">
            <div className="calendarioHeader">
                CALENDARIO
            </div>

            <div className="calendarioTextoContainer">
                <button className="calendarioButtonContainer" onClick={onClose}></button>
                <p>
                    <span className="pinkTextCalendario">Planifica tu próximo viaje</span><br/>
                    Selecciona el mes que te favorece y descubrelas rutas <br/>
                    y experiencias culturales disponibles en esa fecha
                </p>
            </div>

            <div className="calendarioCuerpoContainer">
                <div className="columnCalendario">
                    <button className="month pink" onClick={handleClickEnero}>ENE</button>
                    <button className="month yellow" onClick={handleClickEnero}>AGO</button>
                </div>
                <div className="columnCalendario">
                    <div className="month">
                        <button className="month2 blue" onClick={handleClickEnero}>FEB</button>
                        <button className="month3 green" onClick={handleClickEnero}>MAR</button>
                    </div>
                    <button className="month black" onClick={handleClickEnero}>SEPT</button>
                </div>
                <div className="columnCalendario">
                    <button className="month yellow" onClick={handleClickEnero}>ABR</button>
                    <button className="month pink" onClick={handleClickEnero}>OCT</button>
                </div>
                <div className="columnCalendario">
                    <button className="month black" onClick={handleClickEnero}>MAY</button>
                    <button className="month blue" onClick={handleClickEnero}>NOV</button>
                </div>
                <div className="columnCalendario">
                    <div className="month">
                        <button className="month2 blue" onClick={handleClickEnero}>JUN</button>
                        <button className="month3 pink" onClick={handleClickEnero}>JUL</button>
                    </div>
                    <button className="month yellow" onClick={handleClickEnero}>DIC</button>
                </div>
            </div>

            {showEnero && (
                <div className="culturaContainer show">
                    <Enero onClose={handleCloseEnero} />
                </div>
            )}
        </div>
    )
}
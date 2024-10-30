import "./test.css";
import Calendario from "../calendario/calendario";
import React, {useState} from "react";

export default function Test({onClose}){
    const [showCalendario, setShowCalendario] = useState(false);

    const handleClickCalendario = () => {
        setShowCalendario(true);
    };
    
    const handleCloseCalendario = () => {
        setShowCalendario(false);
    }; 

    return(
        <div className="testMainContainer">
            <div className="testHeader">
                <div className="firstColumnHeader">
                    <div className="container1">
                        <button className="flechaAmarillaButton" onClick={onClose}></button>

                        <div className="texto">
                            T<span className="yellowText">E</span>ST
                        </div>
                    </div>
                </div>
                <div className="secondColumnHeader">
                    <div className="container2">
                        <div className="firstRowSC">
                            ¡SELECCIONA TUS INTERESES!

                            <button className="buttonContainer" onClick={onClose}></button>
                        </div>
                        
                        Para conocer más sobre tus gustos y mostrarte todo lo que Guatemala tiene para ofrecer
                    </div>
                </div>
            </div>

            <div className="cuerpoContainer">
                <div className="firstRowCC">
                    <button className="firstBttn" onClick={handleClickCalendario}>HISTORIA & CULTURA</button>
                    <button className="secondBttn" onClick={handleClickCalendario}>TEJIDOS & TEXTILES</button>
                </div>

                <div className="secondRowCC">
                    <button className="artesaniasBttn" onClick={handleClickCalendario}>ARTESANÍAS & TRADICIONES</button>
                    <button className="gastronomiaBttn" onClick={handleClickCalendario}>GASTRONOMÍA LOCAL</button>
                    <button className="naturalezaBttn" onClick={handleClickCalendario}>NATURALEZA & AVENTURA</button>
                    <button className="comIndigenasBttn" onClick={handleClickCalendario}>COMUNIDADES INDÍGENAS</button>
                    <button className="festividadesBttn" onClick={handleClickCalendario}>FESTIVIDADES & CELEBRACIONES</button>
                </div>
            </div>

            {showCalendario && (
                <div className="culturaContainer show">
                    <Calendario onClose={handleCloseCalendario} />
                </div>
            )}
        </div>
    )
}
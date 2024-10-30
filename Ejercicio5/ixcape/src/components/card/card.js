import "./card.css";
import React, { useState } from "react";
import CulturaHistoria from "../../culturaHistoria/culturaHistoria";
import Voces from "../../voces/voces";

export default function Card({onScrollToRutas}) {
    const [showCulturaHistoria, setShowCulturaHistoria] = useState(false);
    const [showVoces, setShowVoces] = useState(false);

    const handleClick = () => {
        setShowCulturaHistoria(true);
    };

    const handleClose = () => {
        setShowCulturaHistoria(false);
    };

    const handleClickVoces = () => {
        setShowVoces(true);
    };

    const handleCloseVoces = () => {
        setShowVoces(false);
    };

    return (
        <>
            <div className="card">
                <img src="img/card/fondo2.png" alt="fondo" className="imagen" />
                <div className="cardMainContainer">
                    <div className="firstColumn">
                        <div className="text-container">
                            <div>NUESTRAS</div>
                            <div className="pinkText">INICIATIVAS</div>
                            <div>ESTE <br /> 2024</div>
                        </div>
                    </div>

                    <div className="column">
                        <div className="firstRow">
                            <button className="flechaButton" onClick={handleClick}>
                                <img src="img/card/flecha.svg" alt="flecha" className="flechaImg" />
                            </button>
                            <div>CULTURA <br />E HISTORIA</div>
                        </div>

                        <div className="secondRow">
                            <button className="flechaButton" onClick={onScrollToRutas}>
                                <img src="img/card/flecha.svg" alt="flecha" className="flechaImg" />
                            </button>
                            <div>RUTAS <br />CULTURALES</div>
                        </div>

                        <div className="thirdRow">
                            <button className="flechaButton" onClick={handleClickVoces}>
                                <img src="img/card/flecha.svg" alt="flecha" className="flechaImg" />
                            </button>
                            <div>CONEXIÓN & <br />AUTENTICIDAD</div>
                        </div>
                    </div>
                </div>

                <div className="threeButtons">
                    <button className="popUpButton"></button>
                    <button className="popUpButton" onClick={handleClick}></button>
                    <button className="popUpButton" onClick={handleClickVoces}></button>
                </div>
            </div>

            {showCulturaHistoria && (
                <div className="culturaContainer show">
                    <CulturaHistoria onClose={handleClose} />
                </div>
            )}

            {showVoces && (
                <div className="culturaContainer show">
                    <Voces onClose={handleCloseVoces} />
                </div>
            )}
        </>
    );
}

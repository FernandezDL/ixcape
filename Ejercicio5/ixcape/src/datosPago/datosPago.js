import "./datosPago.css";
import React from "react";
import { useNavigate } from 'react-router-dom';

export default function DatosPago() {
    const navigate = useNavigate();

    const handleClickHome = () => {
        navigate("/")
    };

    return (
        <div className="pagoMainContainer">
            <div className="headerPago">
                <button className="logo" onClick={handleClickHome}></button>
            </div>

            <div className="containerTarjeta">
                <div className="tarjetaLetrasContainer">
                    <h1>TU APORTE, <br /> TU <span className="pinkLetter">EXPERIENCIA</span></h1>

                    <img src="img/datosPago/tarjeta.svg" alt="tarjeta" className="targetaSVG" />

                    <div className="buttonsContainer">
                        <button className="firstButton">CRÉDITO</button>
                        <button className="secondButton">DÉBITO</button>
                    </div>
                </div>
            </div>

            <div className="fondoNegro">
                <div className="parteNegra">
                    <div className="anotherCardContainer">
                        <div className="pinkCard1">
                            <input type="text" placeholder="NÚMERO DE TARJETA" className="inputField"/>
                        </div>
                        <div className="secondRowCard">
                            <div className="blueCard1">
                                <input type="text" placeholder="VIGENCIA" className="inputField"/>
                            </div>
                            <div className="greenCard1">
                                <input type="text" placeholder="CVV" className="inputField"/>
                            </div>
                        </div>
                        <div className="yellowCard1">
                            <input type="text" placeholder="NOMBRE" className="inputField"/>
                        </div>
                    </div>

                    {/* Botones de Cancelar y Pagar */}
                    <div className="paymentButtonsContainer">
                        <button className="cancelButton" onClick={handleClickHome}>CANCELAR PAGO</button>
                        <button className="payButton">PAGAR</button>
                    </div>

                    <div className="footer">.</div>
                </div>
            </div>
        </div>
    )
}

import "./culturaHistoria.css";

export default function CulturaHistoria({ onClose }) {
    return (
        <div className="culturaMainContainer">
            <div className="container2">
                <button className="closeButtonContainer" onClick={onClose}></button>

                <div className="fila">
                    <div className="cards blueCard">
                        <img src="img/cultura/card1.svg" alt="Figura 1"/>
                        
                        <div className="cardTexts">
                            <p className="cardNumber">+ 500</p>
                            <p>Testimonios</p>
                        </div>
                    </div>

                    <div className="cards pinkCard">
                        <img src="img/cultura/card1.svg" alt="Figura 1"/>
                        
                        <div className="cardTexts">
                            <p className="cardNumber">+ 100</p>
                            <p>Artesanos</p>
                        </div>
                    </div>
                </div>

                <div className="fila">
                    <div className="cards yellowCard">
                        <img src="img/cultura/card1.svg" alt="Figura 1"/>
                        
                        <div className="cardTexts">
                            <p className="cardNumber">+ 28</p>
                            <p>Documentales</p>
                        </div>
                    </div>

                    <div className="cards greenCard">
                        <img src="img/cultura/card4.svg" alt="Figura 4"/>
                        
                        <div className="cardTexts">
                            <p className="cardNumber">+ 78</p>
                            <p>Destinos</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

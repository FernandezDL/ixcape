import "./culturaHistoria.css";

export default function CulturaHistoria({ onClose }) {
    return (
        <div className="culturaMainContainer">
            <button className="culturaButtonContainer" onClick={onClose}></button>

            <div className="filaCultura">
                <div className="cardsCultura blueCard">
                    <img src="img/cultura/card1.svg" alt="Figura 1" className="logos"/>
                    
                    <div className="cardTexts">
                        <p className="cardNumber">+ 500</p>
                        <p>Testimonios</p>
                    </div>
                </div>

                <div className="cardsCultura pinkCard">                    
                    <div className="cardTexts otras">
                        <p className="cardNumber">+ 100</p>
                        <p>Artesanos</p>
                    </div>
                </div>
            </div>

            <div className="filaCultura">
                <div className="cardsCultura yellowCard">
                    <div className="cardTexts otras">
                        <p className="cardNumber">+ 28</p>
                        <p>Documentales</p>
                    </div>
                </div>

                <div className="cardsCultura greenCard">
                    <img src="img/cultura/card4.svg" alt="Figura 4" className="logos"/>
                    
                    <div className="cardTexts">
                        <p className="cardNumber">+ 78</p>
                        <p>Destinos</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

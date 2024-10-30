import "./test.css";

export default function Test({onClose}){
    return(
        <div className="testMainContainer">
            <div className="testHeader">
                <div className="firstColumnHeader">
                    <div className="container1">
                        <button className="flechaButton" onClick={onClose}></button>

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
                    <button className="firstBttn">HISTORIA & CULTURA</button>
                    <button className="secondBttn">TEJIDOS & TEXTILES</button>
                </div>

                <div className="secondRowCC">
                    <button className="artesaniasBttn">ARTESANÍAS & TRADICIONES</button>
                    <button className="gastronomiaBttn">GASTRONOMÍA LOCAL</button>
                    <button className="naturalezaBttn">NATURALEZA & AVENTURA</button>
                    <button className="comIndigenasBttn">COMUNIDADES INDÍGENAS</button>
                    <button className="festividadesBttn">FESTIVIDADES & CELEBRACIONES</button>
                </div>
            </div>
        </div>
    )
}
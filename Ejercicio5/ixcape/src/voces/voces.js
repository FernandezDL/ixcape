import "./voces.css";

export default function Voces({ onClose }){
    return(
        <div className="vocesMainContainer">
            <button className="closeButtonContainer" onClick={onClose}></button>

            <img src="img/voces/fondo.svg" alt="fondo" className="vocesImg"/>

            <div className="textoVoces">
                <h1>VOCES &<br/> MANOS <span className="textoRosa">QUE<br/> TEJEN</span> NUESTRA<br/> HISTORIA</h1>
            </div>
        </div>
    )
}
import "./calendario.css";

export default function Calendario({onClose}){
    return(
        <div className="CalendarioMainContainer">
            <div className="calendarioHeader">
                CALENDARIO
            </div>

            <div className="calendarioTextoContainer">
                <button className="buttonContainer" onClick={onClose}></button>
                <p>
                    <span className="pinkTextCalendario">Planifica tu próximo viaje</span><br/>
                    Selecciona el mes que te favorece y descubrelas rutas <br/>
                    y experiencias culturales disponibles en esa fecha
                </p>
            </div>

            <div className="calendarioCuerpoContainer">
                <div className="columnCalendario">
                    <button className="month pink">ENE</button>
                    <button className="month yellow">AGO</button>
                </div>
                <div className="columnCalendario">
                    <div className="month">
                        <button className="month2 blue">FEB</button>
                        <button className="month3 green">MAR</button>
                    </div>
                    <button className="month black">SEPT</button>
                </div>
                <div className="columnCalendario">
                    <button className="month yellow">ABR</button>
                    <button className="month pink">OCT</button>
                </div>
                <div className="columnCalendario">
                    <button className="month black">MAY</button>
                    <button className="month blue">NOV</button>
                </div>
                <div className="columnCalendario">
                    <div className="month">
                        <button className="month2 blue">JUN</button>
                        <button className="month3 pink">JUL</button>
                    </div>
                    <button className="month yellow">DIC</button>
                </div>
            </div>
        </div>
    )
}
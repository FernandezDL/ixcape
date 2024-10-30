import "./datos.css";

export default function Datos({onClose}){
    return(
        <div className="datosMainContainer">
            <div className="datosContainer">
                <button className="buttonContainer" onClick={onClose}></button>

                <div className="inputsContainer">
                    <div className="inputColumn">
                        <input type="text" placeholder="NOMBRE" className="styled-input" />
                        <input type="text" placeholder="LUGAR DE INTERÉS" className="styled-input" />
                    </div>

                    <div className="inputColumn">
                        <input type="text" placeholder="APELLIDO" className="styled-input" />
                        <input type="text" placeholder="EMAIL" className="styled-input" />
                    </div>

                    <div className="inputColumn">
                        <input type="text" placeholder="USUARIO" className="styled-input" />
                    </div>
                </div>

                <div class="checkbox-container">
                    <input type="checkbox" id="terms" class="styled-checkbox"/>
                    <label for="terms">ACEPTO LOS TÉRMINOS Y CONDICIONES</label>
                </div>

                <button className="pagoBttn">MÉTODO DE PAGO</button>
            </div>
        </div>
    )
}